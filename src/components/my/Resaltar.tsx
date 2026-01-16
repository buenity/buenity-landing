import React from "react";
import { cn } from "@/lib/utils";

interface ResaltarProps {
    children: React.ReactNode;
    className?: string;
}

export const Resaltar = ({ children, className }: ResaltarProps) => {
    return (
        <span
            className={cn(
                "inline-block text-primary-text",
                "bg-tertiary p-1 rounded-md",
                "transition-all duration-300 ease-in-out",
                "hover:bg-primary hover:text-secondary font-bold",
                className
            )}
        >
            {children}
        </span>
    );
};

