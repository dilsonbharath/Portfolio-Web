import { useEffect, useMemo, useRef } from "react";

function SkillsSection({ items, onNavigate }) {
  const skills = useMemo(() => items ?? [], [items]);
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const bubbleRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const reducedMotionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const shouldAnimate = !reducedMotionQuery?.matches;

    const nodes = [];
    const bonds = new Map();
    let rafId = 0;
    let width = 0;
    let height = 0;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const rand = (min, max) => min + Math.random() * (max - min);

    const measure = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.setAttribute("width", `${width}`);
      svg.setAttribute("height", `${height}`);
    };

    const init = () => {
      bubbleRefs.current = bubbleRefs.current.slice(0, skills.length);
      measure();

      nodes.length = 0;
      bonds.clear();

      const count = skills.length;
      if (!count || width < 220 || height < 260) return;

      const centerX = width / 2;
      const centerY = height / 2;
      const ringOneCount = Math.max(1, Math.round(count * 0.6));
      const ringTwoCount = count - ringOneCount;
      const baseRadiusOuter = Math.min(width, height) * 0.32;
      const baseRadiusInner = Math.min(width, height) * 0.2;

      for (let index = 0; index < count; index += 1) {
        const isOuter = index < ringOneCount;
        const ringIndex = isOuter ? index : index - ringOneCount;
        const ringCount = isOuter ? ringOneCount : Math.max(1, ringTwoCount);
        const angle = (ringIndex / ringCount) * Math.PI * 2;
        const radius = isOuter ? rand(42, 62) : rand(30, 48);
        const ringRadius = isOuter ? baseRadiusOuter : baseRadiusInner;
        const jitter = rand(-10, 10);
        const anchorX = centerX + Math.cos(angle) * (ringRadius + jitter);
        const anchorY = centerY + Math.sin(angle) * (ringRadius + jitter);
        const ringSpeedBase = isOuter ? 0.0007 : -0.0005;
        nodes.push({
          x: clamp(anchorX, radius + 8, width - radius - 8),
          y: clamp(anchorY, radius + 8, height - radius - 8),
          ax: anchorX,
          ay: anchorY,
          angle,
          ringRadius,
          ringSpeed: ringSpeedBase + rand(-0.00018, 0.00018),
          driftX: rand(-14, 14),
          driftY: rand(-14, 14),
          driftVX: rand(-0.06, 0.06),
          driftVY: rand(-0.06, 0.06),
          vx: rand(-0.35, 0.35),
          vy: rand(-0.35, 0.35),
          r: radius,
          wobble: rand(0, Math.PI * 2)
        });
      }
    };

    const render = () => {
      const count = nodes.length;
      if (!count) return;

      const linkDist = Math.min(170, Math.max(120, Math.min(width, height) * 0.24));
      const linkDistOff = linkDist + 12;
      const maxLinks = Math.min(12, Math.floor(count * 0.8));

      const candidates = [];
      for (let i = 0; i < count; i += 1) {
        for (let j = i + 1; j < count; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);
          candidates.push([i, j, dist]);
        }
      }
      candidates.sort((p, q) => p[2] - q[2]);

      const activeKeys = new Set();
      for (let k = 0; k < candidates.length && activeKeys.size < maxLinks; k += 1) {
        const [i, j, dist] = candidates[k];
        const key = `${i}-${j}`;
        const prev = bonds.get(key) ?? 0;
        const shouldAttach = dist < linkDist || (prev > 0.12 && dist < linkDistOff);
        if (shouldAttach) activeKeys.add(key);
      }

      for (let i = 0; i < count; i += 1) {
        for (let j = i + 1; j < count; j += 1) {
          const key = `${i}-${j}`;
          const prev = bonds.get(key) ?? 0;
          const next = activeKeys.has(key) ? prev + 0.06 : prev - 0.06;
          const strength = clamp(next, 0, 1);
          if (strength <= 0.001) bonds.delete(key);
          else bonds.set(key, strength);
        }
      }

      for (let i = 0; i < count; i += 1) {
        const el = bubbleRefs.current[i];
        if (!el) continue;
        const node = nodes[i];
        el.style.transform = `translate3d(${node.x - node.r}px, ${node.y - node.r}px, 0)`;
        el.style.setProperty("--bubble-r", `${node.r}px`);
      }

      const lines = [];
      for (const [key, strength] of bonds.entries()) {
        const [iStr, jStr] = key.split("-");
        const i = Number(iStr);
        const j = Number(jStr);
        const a = nodes[i];
        const b = nodes[j];
        if (!a || !b) continue;

        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 1;
        const t = clamp(1 - dist / linkDistOff, 0, 1);
        const opacity = clamp(strength * (0.18 + 0.6 * t), 0, 1);
        const widthPx = 0.6 + 1.1 * strength;

        lines.push(
          `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(
            1
          )}" y2="${b.y.toFixed(1)}" stroke-opacity="${opacity.toFixed(
            3
          )}" stroke-width="${widthPx.toFixed(2)}" />`
        );
      }
      svg.innerHTML = lines.join("");
    };

    const tick = () => {
      const count = nodes.length;
      if (!count) {
        rafId = window.requestAnimationFrame(tick);
        return;
      }

      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < count; i += 1) {
        const node = nodes[i];
        node.angle += node.ringSpeed;
        node.driftVX = clamp(node.driftVX + rand(-0.002, 0.002), -0.08, 0.08);
        node.driftVY = clamp(node.driftVY + rand(-0.002, 0.002), -0.08, 0.08);
        node.driftX = clamp(node.driftX + node.driftVX, -18, 18);
        node.driftY = clamp(node.driftY + node.driftVY, -18, 18);
        node.ax = centerX + Math.cos(node.angle) * node.ringRadius + node.driftX;
        node.ay = centerY + Math.sin(node.angle) * node.ringRadius + node.driftY;

        const dx = node.ax - node.x;
        const dy = node.ay - node.y;
        node.vx += dx * 0.0016;
        node.vy += dy * 0.0016;

        node.wobble += 0.0028;
        node.vx += Math.cos(node.wobble) * 0.0021;
        node.vy += Math.sin(node.wobble) * 0.0021;
      }

      for (let i = 0; i < count; i += 1) {
        for (let j = i + 1; j < count; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.0001;
          const minDist = a.r + b.r + 18;

          if (dist < minDist) {
            const push = (minDist - dist) * 0.0016;
            const nx = dx / dist;
            const ny = dy / dist;
            a.vx -= nx * push;
            a.vy -= ny * push;
            b.vx += nx * push;
            b.vy += ny * push;
          }
        }
      }

      for (let i = 0; i < count; i += 1) {
        const node = nodes[i];
        node.vx *= 0.985;
        node.vy *= 0.985;

        node.x += node.vx;
        node.y += node.vy;

        const pad = 12;
        if (node.x < node.r + pad) {
          node.x = node.r + pad;
          node.vx *= -0.6;
        } else if (node.x > width - node.r - pad) {
          node.x = width - node.r - pad;
          node.vx *= -0.6;
        }

        if (node.y < node.r + pad) {
          node.y = node.r + pad;
          node.vy *= -0.6;
        } else if (node.y > height - node.r - pad) {
          node.y = height - node.r - pad;
          node.vy *= -0.6;
        }
      }

      render();
      rafId = window.requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(() => {
      measure();
      init();
      render();
    });

    resizeObserver.observe(container);
    init();
    render();

    if (shouldAnimate) {
      rafId = window.requestAnimationFrame(tick);
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      svg.innerHTML = "";
    };
  }, [skills]);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-head reveal">
          <h3 className="section-kicker">Technical Stack</h3>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Tools and technologies I regularly use to build polished frontend and practical backend
            solutions.
          </p>
        </div>

        <div className="skills-bubbles" ref={containerRef} aria-label="Skills bubble network">
          <svg className="skills-links" ref={svgRef} aria-hidden="true" />
          {skills.map((skill, index) => (
            <article
              className="skill-bubble"
              key={skill.name}
              ref={(el) => {
                bubbleRefs.current[index] = el;
              }}
              style={{ "--tone": (index % 6) + 1, "--delay": `${index * -0.18}s` }}
            >
              <div className="skill-bubble-inner">
                <img src={skill.icon} alt={skill.name} />
                <h4>{skill.name}</h4>
              </div>
            </article>
          ))}
        </div>

        <div className="skills-scroll-wrap">
          <button
            type="button"
            className="scroll-top-btn scroll-top-btn--bow"
            aria-label="Scroll to Home"
            onClick={() => onNavigate?.("home")}
          >
            <span className="bow-arrow" aria-hidden="true">
              <span className="bow-arrow-tip" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
