
"use client";

import { useEffect, useRef } from "react";

export default function InteractiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;

    if (!cursor || !glow) return;

    const finePointer = window.matchMedia(
      "(pointer: fine) and (min-width: 768px)"
    );

    if (!finePointer.matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let glowX = mouseX;
    let glowY = mouseY;

    let animationFrame = 0;
    let isHovering = false;

    const interactiveSelector =
      "a, button, input, textarea, select, [data-cursor-hover]";

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      cursor.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

      glow.style.transform =
        `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;

      animationFrame = requestAnimationFrame(animate);
    };

    const setHoverState = (hovering: boolean) => {
      if (isHovering === hovering) return;

      isHovering = hovering;
      cursor.classList.toggle("cursor-active", hovering);
      glow.classList.toggle("cursor-glow-active", hovering);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      setHoverState(Boolean(target.closest(interactiveSelector)));
    };

    const handleMouseOut = (event: MouseEvent) => {
      const nextTarget = event.relatedTarget;

      if (!(nextTarget instanceof Element)) {
        setHoverState(false);
        return;
      }

      setHoverState(Boolean(nextTarget.closest(interactiveSelector)));
    };

    const handlePointerLeave = () => {
      setHoverState(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden size-20 rounded-full bg-[#007BA7]/15 opacity-50 blur-2xl transition-[width,height,opacity] duration-300 md:block"
      />

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="site-cursor pointer-events-none fixed left-0 top-0 z-[9999] hidden size-3 rounded-full bg-[#FF2D95] shadow-[0_0_0_5px_rgba(255,45,149,0.15)] transition-[width,height,background-color] duration-200 md:block"
      />
    </>
  );
}
