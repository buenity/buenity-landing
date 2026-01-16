"use client";

import React from "react";
import { cn } from "@/lib/utils";

type GradientVariant = "primary" | "secondary";

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    gradient?: GradientVariant;
    withBackground?: boolean;
    containerClassName?: string;
}

const gradientVariants: Record<GradientVariant, string> = {
    primary: "from-primary/20 via-transparent to-tertiary/50",
    secondary: "from-secondary/10 via-transparent to-secondary/5",
};

export function Section({
    children,
    id,
    className,
    gradient = "primary",
    withBackground = true,
    containerClassName,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "bg-background py-16 md:py-20 px-4 md:px-6 relative overflow-hidden",
                className
            )}
        >
            {withBackground && (
                <>
                    {/* Fondo decorativo principal con animación */}
                    <div
                        className={cn(
                            "absolute inset-0 bg-gradient-to-b pointer-events-none transition-opacity duration-1000 animate-pulse-slow",
                            gradientVariants[gradient]
                        )}
                    />
                    {/* Gradientes radiales adicionales con animación */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,214,10,0.08),transparent_50%)] pointer-events-none animate-pulse-slow"
                        style={{ animationDelay: "1s" }} />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,253,231,0.1),transparent_50%)] pointer-events-none animate-pulse-slow"
                        style={{ animationDelay: "2s" }} />
                </>
            )}

            <div
                className={cn(
                    "mx-auto max-w-7xl space-y-16 relative z-10 flex flex-col items-center justify-center",
                    containerClassName
                )}
            >
                {children}
            </div>
        </section>
    );
}

