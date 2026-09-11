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

    let frame = 0;

    const move = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;

      frame = requestAnimationFrame(animate);
    };

    const handlePointerOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest(
          "a, button, input, textarea, select, [data-cursor-hover]"
        )
      ) {
        cursor.classList.add("cursor-active");
        glow.classList.add("cursor-glow-active");
      }
    };

    const handlePointerOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest(
          "a, button, input, textarea, select, [data-cursor-hover]"
        )
      ) {
        cursor.classList.remove("cursor-active");
        glow.classList.remove("cursor-glow-active");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handlePointerOver);
    window.addEventListener("mouseout", handlePointerOut);

    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handlePointerOver);
      window.removeEventListener("mouseout", handlePointerOut);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--teal-400)]/10 blur-2xl transition-[width,height,opacity] duration-300 md:block"
      />

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="site-cursor pointer-events-none fixed left-0 top-0 z-[9999] hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--teal-500)] shadow-[0_0_0_5px_rgba(17,181,161,0.12)] transition-[width,height,background-color] duration-200 md:block"
      />
    </>
  );
}