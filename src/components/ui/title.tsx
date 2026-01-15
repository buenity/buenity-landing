import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const titleVariants = cva(
    "font-bold leading-tight tracking-tight",
    {
        variants: {
            variant: {
                default: "text-primary-text",
                primary: "text-primary",
                secondary: "text-secondary",
                tertiary: "text-tertiary",
                inverse: "text-inverse-text",
                muted: "text-muted-text",
            },
            size: {
                h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
                h2: "text-3xl sm:text-4xl md:text-5xl",
                h3: "text-2xl sm:text-3xl md:text-4xl",
                h4: "text-xl sm:text-2xl md:text-3xl",
                h5: "text-lg sm:text-xl md:text-2xl",
                h6: "text-base sm:text-lg md:text-xl",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "h2",
            align: "left",
        },
    }
)

type TitleElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div"

interface TitleProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
    as?: TitleElement
    asChild?: boolean
}

function Title({
    className,
    variant,
    size,
    align,
    as,
    asChild = false,
    ...props
}: TitleProps) {
    const Comp = asChild ? Slot : (as || "h2")

    return (
        <Comp
            data-slot="title"
            data-variant={variant}
            data-size={size}
            data-align={align}
            className={cn(titleVariants({ variant, size, align, className }))}
            {...props}
        />
    )
}

export { Title, titleVariants }

