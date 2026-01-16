"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BRAND_COLORS } from "@/constants/theme/theme";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={cn(
        "relative h-full flex items-center justify-center w-full overflow-hidden rounded-md",
        containerClassName
      )}
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute h-full w-full opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${BRAND_COLORS.primary}40, transparent 40%)`,
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("relative z-10", className)}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ backgroundSize: "20% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 20, ease: "easeInOut", delay: 0 }}
      style={{
        backgroundImage: `linear-gradient(90deg, ${BRAND_COLORS.secondary}, ${BRAND_COLORS.secondary}, ${BRAND_COLORS.primary})`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundSize: "200% 100%",
      }}
      className={cn(
        "relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
