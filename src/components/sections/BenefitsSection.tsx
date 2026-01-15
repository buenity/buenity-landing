import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { FileEdit, Smartphone, Palette, TrendingUp } from "lucide-react";

export function BenefitsSection() {
    const benefits = [
        {
            icon: FileEdit,
            title: "Tu menú, siempre actualizado",
            description: "Cambias precios, productos o fotos en segundos. Sin volver a imprimir nada. Sin diseñadores.",
        },
        {
            icon: Smartphone,
            title: "Funciona en cualquier celular",
            description: "No necesitas apps. Solo escanean el QR y listo.",
        },
        {
            icon: Palette,
            title: "Con la identidad de tu marca",
            description: "Logo, colores y estilo de tu restaurante. No más menús genéricos.",
        },
        {
            icon: TrendingUp,
            title: "Te ves más grande de lo que eres",
            description: "Un restaurante con menú digital se percibe: Más moderno, más confiable, más profesional. Y eso vende.",
        },
    ];

    return (
        <section id="beneficios" className="bg-muted py-20 px-4">
            <div className="mx-auto max-w-6xl space-y-12">
                <div className="text-center space-y-4">
                    <Title as="h2" size="h2" align="center" variant="default">
                        Beneficios claros
                    </Title>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <Card key={index} className="border-primary/20">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-primary/10 p-3">
                                            <Icon className="size-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl text-primary-text">{benefit.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Paragraph variant="secondary">{benefit.description}</Paragraph>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

