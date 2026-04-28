// components/CustomCursor.tsx
"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const ring = document.getElementById("cursor-ring");
    const dot = document.getElementById("cursor-dot");

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // dot snaps instantly
      if (!dot) return;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    const onMouseDown = () => {
      if (!dot || !ring) return;
      dot.style.width = "120px";
      dot.style.height = "120px";
      ring.style.width = "0px";
      ring.style.height = "0px";
    };

    const onMouseUp = () => {
      if (!dot || !ring) return;
      dot.style.width = "8px";
      dot.style.height = "8px";
      ring.style.width = "44px";
      ring.style.height = "44px";
    };

    // ring lerps toward the dot
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    let animFrame: number;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);

      if (ring) {
        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";
      }
      animFrame = requestAnimationFrame(animate);
    };

    animate();

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        id="cursor-ring"
        style={{
          position: "fixed",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: "1.5px solid white",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "width 0.15s ease, height 0.15s ease",
          mixBlendMode: "difference",
          zIndex: 9999,
        }}
      />
      <div
        id="cursor-dot"
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "white",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
          zIndex: 9999,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
}
