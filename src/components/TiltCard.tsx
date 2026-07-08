import React, { useRef, MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number; // Maximum tilt angle in degrees
  id?: string;
  key?: string;
}

export default function TiltCard({
  children,
  className = "",
  intensity = 10,
  id,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element

    // Calculate normalized position from center (-0.5 to 0.5)
    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;

    // Calculate rotation angles
    const rotateX = -normalizedY * intensity;
    const rotateY = normalizedX * intensity;

    // Apply transform style
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    // Update mouse lighting spotlight
    if (glow) {
      glow.style.background = `radial-gradient(
        250px circle at ${x}px ${y}px,
        rgba(37, 99, 235, 0.08),
        transparent 80%
      )`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;

    // Reset styles with smooth transition
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    if (glow) {
      glow.style.background = "transparent";
    }
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300 ease-out perspective-card hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)] ${className}`}
    >
      {/* Spotlight layer */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ zIndex: 1 }}
      />
      <div className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}
