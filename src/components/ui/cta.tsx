"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import Image from "next/image";

const ctaVariants = cva(
    "group relative overflow-hidden rounded-2xl border transition-all duration-500",
    {
        variants: {
            layout: {
                centered: "flex flex-col items-center justify-center text-center p-8 sm:p-12",
                split: "flex flex-col lg:flex-row items-center justify-between gap-6 p-8 sm:p-12",
                card: "flex flex-col gap-6 p-8 sm:p-12",
                minimal: "flex flex-col items-center gap-4 p-6",
            },
            variant: {
                primary: "bg-primary/10 border-primary/20 hover:border-primary/40 hover:shadow-xl",
                secondary: "bg-secondary/10 border-secondary/20 hover:border-secondary/40 hover:shadow-xl",
                gradient: "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/30 hover:border-primary/50 hover:shadow-2xl",
                outline: "bg-card/50 backdrop-blur-sm border-primary/30 hover:bg-card/80 hover:border-primary/50 hover:shadow-lg",
                solid: "bg-primary border-primary hover:bg-primary/90 hover:shadow-xl",
            },
            size: {
                sm: "p-6 sm:p-8",
                md: "p-8 sm:p-12",
                lg: "p-12 sm:p-16",
            },
        },
        defaultVariants: {
            layout: "centered",
            variant: "primary",
            size: "md",
        },
    }
);

export interface CTAProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ctaVariants> {
    title?: string;
    description?: string;
    primaryAction?: {
        label: string;
        href?: string;
        onClick?: () => void;
        icon?: React.ReactNode;
        image?: string;
        imageAlt?: string;
    };
    secondaryAction?: {
        label: string;
        href?: string;
        onClick?: () => void;
        icon?: React.ReactNode;
        image?: string;
        imageAlt?: string;
    };
    children?: React.ReactNode;
}

function CTA({
    className,
    layout = "centered",
    variant = "primary",
    size = "md",
    title,
    description,
    primaryAction,
    secondaryAction,
    children,
    ...props
}: CTAProps) {
    return (
        <div
            className={cn(ctaVariants({ layout, variant, size }), className)}
            {...props}
        >
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none opacity-0 group-hover:opacity-100" />

            {/* Contenido */}
            <div className={cn(
                "relative z-10 text-center flex flex-col items-center justify-center gap-2",
                layout === "split" && "flex-1",
                layout !== "split" && "w-full"
            )}>
                {title && (
                    <Title
                        as="h3"
                        size={size === "lg" ? "h2" : size === "sm" ? "h4" : "h3"}
                        align={layout === "centered" || layout === "minimal" ? "center" : "left"}
                        variant={variant === "solid" ? "secondary" : "default"}
                        className={cn(
                            layout === "split" && "mb-2",
                            layout === "card" && "mb-2"
                        )}
                    >
                        {title}
                    </Title>
                )}

                {description && (
                    <Paragraph
                        size={size === "lg" ? "lg" : size === "sm" ? "sm" : "base"}
                        align={layout === "centered" || layout === "minimal" ? "center" : "left"}
                        variant={variant === "solid" ? "secondary" : "secondary"}
                        className={cn(
                            layout === "split" && "max-w-2xl",
                            layout === "card" && "max-w-2xl",
                            "opacity-90"
                        )}
                    >
                        {description}
                    </Paragraph>
                )}

                {children}
            </div>

            {/* Acciones */}
            {(primaryAction || secondaryAction) && (
                <div className={cn(
                    "relative z-10 flex flex-col sm:flex-row gap-4",
                    layout === "centered" && "items-center justify-center mt-6 w-full",
                    layout === "minimal" && "items-center justify-center mt-2 w-full",
                    layout === "split" && "items-center justify-end lg:justify-end shrink-0",
                    layout === "card" && "items-start sm:items-center w-full mt-4"
                )}>
                    {primaryAction && (
                        <Button
                            size={size === "lg" ? "xl" : size === "sm" ? "lg" : "xl"}
                            variant={variant === "solid" ? "secondary" : "default"}
                            className={cn(
                                "min-w-[200px]",
                                layout === "split" && "w-full sm:w-auto"
                            )}
                            asChild={!!primaryAction.href}
                            onClick={primaryAction.onClick}
                        >
                            {primaryAction.href ? (
                                <a href={primaryAction.href} className="flex items-center gap-2">
                                    {primaryAction.image ? (
                                        <Image
                                            src={primaryAction.image}
                                            alt={primaryAction.imageAlt || primaryAction.label}
                                            width={20}
                                            height={20}
                                            className="object-contain size-5"
                                        />
                                    ) : (
                                        primaryAction.icon
                                    )}
                                    {primaryAction.label}
                                </a>
                            ) : (
                                <>
                                    {primaryAction.image ? (
                                        <Image
                                            src={primaryAction.image}
                                            alt={primaryAction.imageAlt || primaryAction.label}
                                            width={20}
                                            height={20}
                                            className="object-contain size-5"
                                        />
                                    ) : (
                                        primaryAction.icon
                                    )}
                                    {primaryAction.label}
                                </>
                            )}
                        </Button>
                    )}

                    {secondaryAction && (
                        <Button
                            size={size === "lg" ? "lg" : size === "sm" ? "default" : "lg"}
                            variant="outline"
                            className={cn(
                                layout === "split" && "w-full sm:w-auto"
                            )}
                            asChild={!!secondaryAction.href}
                            onClick={secondaryAction.onClick}
                        >
                            {secondaryAction.href ? (
                                <a href={secondaryAction.href} className="flex items-center gap-2">
                                    {secondaryAction.image ? (
                                        <Image
                                            src={secondaryAction.image}
                                            alt={secondaryAction.imageAlt || secondaryAction.label}
                                            width={20}
                                            height={20}
                                            className="object-contain size-5"
                                        />
                                    ) : (
                                        secondaryAction.icon
                                    )}
                                    {secondaryAction.label}
                                </a>
                            ) : (
                                <>
                                    {secondaryAction.image ? (
                                        <Image
                                            src={secondaryAction.image}
                                            alt={secondaryAction.imageAlt || secondaryAction.label}
                                            width={20}
                                            height={20}
                                            className="object-contain size-5"
                                        />
                                    ) : (
                                        secondaryAction.icon
                                    )}
                                    {secondaryAction.label}
                                </>
                            )}
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
}

export { CTA, ctaVariants };

