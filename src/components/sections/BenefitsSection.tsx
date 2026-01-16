"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { WobbleCard } from "@/components/ui/wobble-card";
import { FileEdit, Smartphone, PackageSearch, TrendingUp } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function BenefitsSection() {
    const benefits = [
        {
            icon: FileEdit,
            title: "Tu menú, siempre actualizado",
            description: "Cambias precios, productos o fotos en segundos. Sin volver a imprimir nada. Sin diseñadores.",
            keywords: ["segundos", "Sin volver a imprimir", "Sin diseñadores"],
            gradient: "from-primary/20 to-primary/5",
            isFeatured: true,
            hasImage: true,
            image: "/beneficio1.png",
        },
        {
            icon: Smartphone,
            title: "Funciona en cualquier celular",
            description: "No necesitas apps. Solo escanean el QR y listo.",
            keywords: ["cualquier celular", "No necesitas apps", "QR"],
            gradient: "from-primary/20 to-tertiary/10",
            isFeatured: false,
            hasImage: false,
        },
        {
            icon: PackageSearch,
            title: "Trazabilidad de pedidos en tiempo real",
            description: "Sigue cada pedido desde que se crea hasta que se entrega. Actualizaciones instantáneas para ti y tus clientes.",
            keywords: ["Trazabilidad", "tiempo real", "Actualizaciones instantáneas"],
            gradient: "from-tertiary/20 to-primary/10",
            isFeatured: false,
            hasImage: false,
        },
        {
            icon: TrendingUp,
            title: "Te ves más grande de lo que eres",
            description: "Un restaurante con menú digital se percibe: Más moderno, más confiable, más profesional. Y eso vende.",
            keywords: ["más grande", "Más moderno", "más confiable", "más profesional", "vende"],
            gradient: "from-primary/25 to-primary/5",
            isFeatured: true,
            hasImage: true,
            image: "/beneficio.png",
        },
    ];

    return (
        <Section id="beneficios" gradient="primary" containerClassName="max-w-7xl">
            <div className="w-full space-y-16">
                {/* Header */}
                <div className="text-center space-y-6">
                    <Title as="h2" size="h2" align="center" variant="default" className="max-w-3xl mx-auto">
                        Beneficios claros
                    </Title>

                    <Paragraph size="lg" align="center" variant="secondary" className="max-w-2xl mx-auto">
                        Todo lo que necesitas para hacer crecer tu restaurante con un menú digital profesional
                    </Paragraph>
                </div>

                {/* Benefits Grid */}
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        const isFeatured = benefit.isFeatured;
                        const hasImage = benefit.hasImage;

                        return (
                            <WobbleCard
                                key={index}
                                containerClassName={cn(
                                    "h-full",
                                    isFeatured ? "sm:col-span-2" : ""
                                )}
                                className="h-full"
                            >
                                <Card
                                    className={cn(
                                        "group relative border border-primary/15 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl bg-card/90 backdrop-blur-sm overflow-hidden h-full",
                                        isFeatured ? "shadow-lg" : ""
                                    )}
                                >
                                    {/* Gradiente de fondo en la card - más visible en featured */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-br",
                                        benefit.gradient,
                                        isFeatured ? "opacity-30" : "opacity-0",
                                        "group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    )} />

                                    {hasImage ? (
                                        <div className="relative h-full min-h-[400px] sm:min-h-[300px] flex flex-col lg:flex-row lg:items-center">
                                            <div className="relative z-20 flex-1 p-8 flex flex-col justify-center">
                                                <div className="max-w-md sm:max-w-lg">
                                                    <CardTitle className={cn(
                                                        "font-bold text-primary-text leading-tight mb-4",
                                                        "text-2xl sm:text-xl"
                                                    )}>
                                                        {benefit.title}
                                                    </CardTitle>
                                                    <Paragraph
                                                        size="base"
                                                        variant="secondary"
                                                        className="leading-relaxed text-secondary/80"
                                                    >
                                                        {benefit.description}
                                                    </Paragraph>
                                                </div>
                                            </div>
                                            {benefit.image && (
                                                <div className="relative lg:absolute lg:z-10 lg:-right-[20%] xl:-right-[10%] lg:-bottom-10 w-full lg:w-auto flex justify-center lg:justify-end px-8 pb-8 lg:px-0 lg:pb-0">
                                                    <Image
                                                        src={benefit.image}
                                                        alt={benefit.title}
                                                        width={1000}
                                                        height={1000}
                                                        className="object-contain rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500 max-w-[300px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-none"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <>
                                            <CardHeader className={cn(
                                                "relative z-10",
                                                isFeatured ? "pt-8 px-8" : "pt-6 px-6"
                                            )}>
                                                <div className={cn(
                                                    "flex items-start",
                                                    isFeatured ? "gap-6" : "gap-5"
                                                )}>
                                                    <div className={cn(
                                                        "rounded-2xl bg-primary/60 p-4 group-hover:bg-primary group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300 shadow-lg group-hover:shadow-xl",
                                                        isFeatured ? "p-5" : ""
                                                    )}>
                                                        <Icon className={cn(
                                                            "text-secondary",
                                                            isFeatured ? "size-8" : "size-7"
                                                        )} />
                                                    </div>
                                                    <CardTitle className={cn(
                                                        "font-bold text-primary-text leading-tight",
                                                        isFeatured
                                                            ? "text-2xl sm:text-xl pt-2"
                                                            : "text-xl sm:text-lg pt-1"
                                                    )}>
                                                        {benefit.title}
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>

                                            <CardContent className={cn(
                                                "relative z-10",
                                                isFeatured ? "px-8 pb-8" : "px-6 pb-6"
                                            )}>
                                                <Paragraph
                                                    size="base"
                                                    variant="secondary"
                                                    className="leading-relaxed text-secondary/80 max-w-none"
                                                >
                                                    {benefit.description}
                                                </Paragraph>
                                            </CardContent>
                                        </>
                                    )}

                                    {/* Efecto de brillo en hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                                </Card>
                            </WobbleCard>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}

