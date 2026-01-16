"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const [center, setCenter] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      setCenter({ x: rect.width / 2, y: rect.height / 2 });
      setMousePosition({ 
        x: x - centerX, 
        y: y - centerY 
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className={cn(
        "relative group/card w-full",
        containerClassName
      )}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{
          background: `radial-gradient(600px circle at ${center.x + mousePosition.x}px ${center.y + mousePosition.y}px, rgba(255, 214, 10, 0.15), transparent 40%)`,
        }}
      />
      <motion.div
        animate={{
          x: isHovering ? mousePosition.x / 15 : 0,
          y: isHovering ? mousePosition.y / 15 : 0,
          rotateX: isHovering ? mousePosition.y / 20 : 0,
          rotateY: isHovering ? mousePosition.x / 20 : 0,
          scale: isHovering ? 1.02 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative w-full h-full",
          className
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

