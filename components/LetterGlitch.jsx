
"use client";

import { useEffect, useRef } from "react";
import "./LetterGlitch.css";

const DEFAULT_COLORS = ["#38BDF8", "#FF2D95", "#00E5FF", "#FF4DAD"];

export default function LetterGlitch({
  className = "",
  backgroundColor = "transparent",
  baseColor = "#38BDF8",
  glitchColors = DEFAULT_COLORS,
  baseOpacity = 0.3,
  speed = 0.8,
  interactive = true,
  cursorRadius = 140,
  flow = 0.5,
  edgeFade = 0.3,
  centerFade = 0.15,
  intro = true,
  dpr = 1,
  style = {},
}) {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let disposed = false;

    const cellWidth = 18;
    const cellHeight = 22;
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]*&%$#@!?+=-_:;";

    const colors =
      Array.isArray(glitchColors) && glitchColors.length
        ? glitchColors
        : DEFAULT_COLORS;

    let columns = 0;
    let rows = 0;
    let cells = [];

    const random = (max) => Math.floor(Math.random() * max);

    const makeCell = () => ({
      char: chars[random(chars.length)],
      color: colors[random(colors.length)],
      opacity: 0.35 + Math.random() * 0.65,
      changeAt: elapsed + Math.random() * 1.2,
      glitch: Math.random() > 0.9,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.max(
        1,
        Math.min(Number(dpr) || 1, 2)
      );

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      columns = Math.ceil(width / cellWidth);
      rows = Math.ceil(height / cellHeight);

      cells = Array.from(
        { length: columns * rows },
        makeCell
      );
    };

    const draw = (time) => {
      if (disposed) return;

      animationFrame = requestAnimationFrame(draw);

      const delta = lastTime
        ? Math.min((time - lastTime) / 1000, 0.05)
        : 0;

      lastTime = time;
      elapsed += delta * Math.max(0.1, Number(speed) || 0.8);

      ctx.clearRect(0, 0, width, height);

      if (backgroundColor && backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.font = "12px monospace";
      ctx.textBaseline = "middle";

      const pointer = pointerRef.current;
      const centerX = width / 2;
      const centerY = height / 2;
      const introOpacity = intro ? Math.min(1, elapsed / 1.2) : 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const index = row * columns + col;
          const cell = cells[index];
          if (!cell) continue;

          const x = col * cellWidth;
          const y = row * cellHeight;

          if (elapsed >= cell.changeAt) {
            cell.char = chars[random(chars.length)];
            cell.color =
              Math.random() > 0.35
                ? baseColor
                : colors[random(colors.length)];

            cell.opacity = 0.35 + Math.random() * 0.65;
            cell.glitch = Math.random() > 0.82;
            cell.changeAt = elapsed + 0.05 + Math.random() * 1.1;
          }

          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const pointerDistance = Math.sqrt(dx * dx + dy * dy);

          const nearPointer =
            interactive && pointerDistance < Math.max(1, cursorRadius);

          const edgeDistance = Math.min(
            x,
            y,
            width - x,
            height - y
          );

          const edgeFactor =
            edgeFade > 0
              ? Math.min(
                  1,
                  edgeDistance /
                    Math.max(1, Math.min(width, height) * edgeFade)
                )
              : 1;

          const centerDistance = Math.sqrt(
            (x - centerX) ** 2 + (y - centerY) ** 2
          );

          const centerFactor =
            centerFade > 0
              ? Math.min(
                  1,
                  centerDistance /
                    Math.max(1, Math.min(width, height) * centerFade)
                )
              : 1;

          let opacity =
            cell.opacity *
            Math.max(0, Number(baseOpacity) || 0.3) *
            2.5 *
            edgeFactor *
            centerFactor;

          if (nearPointer) {
            opacity = Math.min(
              1,
              opacity +
                (1 - pointerDistance / Math.max(1, cursorRadius)) * 0.9
            );
          }

          if (
            cell.glitch &&
            Math.random() < 0.08 + Math.max(0, flow) * 0.2
          ) {
            cell.char = chars[random(chars.length)];
          }

          if (Math.random() < 0.004) {
            cell.glitch = !cell.glitch;
          }

          ctx.globalAlpha = Math.min(1, Math.max(0, opacity * introOpacity));
          ctx.fillStyle = cell.color;
          ctx.shadowColor = cell.color;
ctx.shadowBlur = 8;
ctx.fillText(cell.char, x, y);
ctx.shadowBlur = 0;

          if (cell.glitch && Math.random() > 0.45) {
            ctx.globalAlpha = Math.min(0.9, opacity * introOpacity);
            ctx.fillStyle = colors[random(colors.length)];
            ctx.fillRect(
              x,
              y + 4,
              cellWidth * (0.4 + Math.random() * 0.6),
              2
            );
          }

          if (nearPointer && Math.random() > 0.7) {
            ctx.globalAlpha = Math.min(1, opacity + 0.2);
            ctx.fillStyle = "#FF2D95";
            ctx.fillText(cell.char, x + 2, y);
          }
        }
      }

      ctx.globalAlpha = 1;
      frameRef.current = animationFrame;
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();

      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const onPointerLeave = () => {
      pointerRef.current = { x: -1000, y: -1000 };
    };

    resize();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(resize)
        : null;

    resizeObserver?.observe(canvas);

    if (interactive) {
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerleave", onPointerLeave);
    }

    animationFrame = requestAnimationFrame(draw);

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      cancelAnimationFrame(frameRef.current);
      resizeObserver?.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      ctx.clearRect(0, 0, width, height);
    };
  }, [
    backgroundColor,
    baseColor,
    glitchColors,
    baseOpacity,
    speed,
    interactive,
    cursorRadius,
    flow,
    edgeFade,
    centerFade,
    intro,
    dpr,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        pointerEvents: interactive ? "auto" : "none",
        ...style,
      }}
    />
  );
}
