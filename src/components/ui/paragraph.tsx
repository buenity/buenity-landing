import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const paragraphVariants = cva(
    "leading-relaxed",
    {
        variants: {
            variant: {
                default: "text-secondary-text",
                primary: "text-primary-text",
                secondary: "text-secondary",
                tertiary: "text-tertiary-text",
                muted: "text-muted-text",
                inverse: "text-inverse-text",
                foreground: "text-foreground",
                link: "text-link-text hover:text-link-text-hover",
                highlight: "bg-primary/10 text-primary border-l-4 border-primary pl-4 py-2 rounded-r-md",
            },
            size: {
                sm: "text-sm sm:text-base",
                base: "text-base sm:text-lg",
                lg: "text-lg sm:text-xl md:text-2xl",
                xl: "text-xl sm:text-2xl md:text-3xl",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
                justify: "text-justify",
            },
            weight: {
                normal: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "base",
            align: "left",
            weight: "normal",
        },
    }
)

interface ParagraphProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
    asChild?: boolean
    as?: "p" | "span" | "div"
}

function Paragraph({
    className,
    variant,
    size,
    align,
    weight,
    as = "p",
    asChild = false,
    ...props
}: ParagraphProps) {
    const Comp = asChild ? Slot : as

    return (
        <Comp
            data-slot="paragraph"
            data-variant={variant}
            data-size={size}
            data-align={align}
            data-weight={weight}
            className={cn(paragraphVariants({ variant, size, align, weight, className }))}
            {...props}
        />
    )
}

export { Paragraph, paragraphVariants }

