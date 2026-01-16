import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { FileEdit, Smartphone, Palette, TrendingUp } from "lucide-react";

export function BenefitsSection() {
    const benefits = [
        {
            icon: FileEdit,
            title: "Tu menú, siempre actualizado",
            description: "Cambias precios, productos o fotos en segundos. Sin volver a imprimir nada. Sin diseñadores.",
            keywords: ["segundos", "Sin volver a imprimir", "Sin diseñadores"],
            gradient: "from-primary/20 to-primary/5",
        },
        {
            icon: Smartphone,
            title: "Funciona en cualquier celular",
            description: "No necesitas apps. Solo escanean el QR y listo.",
            keywords: ["cualquier celular", "No necesitas apps", "QR"],
            gradient: "from-primary/20 to-tertiary/10",
        },
        {
            icon: Palette,
            title: "Con la identidad de tu marca",
            description: "Logo, colores y estilo de tu restaurante. No más menús genéricos.",
            keywords: ["identidad de tu marca", "Logo, colores", "No más menús genéricos"],
            gradient: "from-tertiary/20 to-primary/10",
        },
        {
            icon: TrendingUp,
            title: "Te ves más grande de lo que eres",
            description: "Un restaurante con menú digital se percibe: Más moderno, más confiable, más profesional. Y eso vende.",
            keywords: ["más grande", "Más moderno", "más confiable", "más profesional", "vende"],
            gradient: "from-primary/25 to-primary/5",
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
                <div className="grid gap-8 sm:grid-cols-2">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <Card
                                key={index}
                                className="group relative border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-card/90 backdrop-blur-sm overflow-hidden"
                            >
                                {/* Gradiente de fondo en la card */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                <CardHeader className="relative z-10 pb-4">
                                    <div className="flex items-start gap-5">
                                        <div className="rounded-2xl bg-primary/60 p-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                                            <Icon className="size-7 text-secondary" />
                                        </div>
                                        <CardTitle className="text-xl sm:text-lg font-bold text-primary-text leading-tight pt-1">
                                            {benefit.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>

                                <CardContent className="relative z-10 space-y-4">
                                    <Paragraph size="base" variant="secondary" className="leading-relaxed">
                                        {benefit.description}
                                    </Paragraph>
                                </CardContent>

                                {/* Efecto de brillo en hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                            </Card>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}

