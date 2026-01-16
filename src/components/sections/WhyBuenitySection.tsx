import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Resaltar } from "@/components/my/Resaltar";
import { Palette, Wrench, X, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhyBuenitySection() {
    return (
        <Section id="por-que-buenity" gradient="secondary" containerClassName="max-w-6xl">
            <div className="w-full space-y-12">
                <div className="text-center space-y-4">
                    <Title as="h2" size="h2" align="center" variant="default">
                        Por qué Buenity
                        <span className="block text-secondary-text text-2xl sm:text-3xl md:text-4xl mt-2 font-normal">
                            (y no Canva o PDF)
                        </span>
                    </Title>
                </div>

                <div className="grid gap-6 sm:gap-8 sm:grid-cols-[1fr_1.2fr]">
                    {/* Canva Card - Más pequeña y desactivada */}
                    <Card className="group border border-destructive/15 hover:border-destructive/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 bg-card/70 backdrop-blur-sm relative overflow-hidden opacity-90">
                        <div className="absolute inset-0 bg-gradient-to-br from-destructive/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardHeader className="relative z-10 pb-4">
                            <div className="flex items-start gap-3">
                                <div className="rounded-xl bg-destructive/8 p-2.5 group-hover:bg-destructive/15 transition-colors duration-300">
                                    <Palette className="size-5 text-destructive/70" />
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-lg font-semibold text-primary-text/80 mb-1.5">
                                        Canva hace diseños
                                    </CardTitle>
                                    <Badge variant="destructive" className="text-xs bg-destructive/10 text-destructive/80 border-destructive/20">
                                        <X className="size-3 mr-1" />
                                        Limitado
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="relative z-10 pt-0">
                            <Paragraph variant="secondary" size="sm" className="leading-relaxed text-secondary/70 max-w-sm">
                                Canva crea <Resaltar>imágenes estáticas</Resaltar>. Una vez que cambias algo, tienes que <Resaltar>rediseñar todo</Resaltar>.
                            </Paragraph>
                        </CardContent>
                    </Card>

                    {/* Buenity Card - Dominante y premium */}
                    <Card className="group relative border-2 border-primary/40 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-gradient-to-br from-primary/15 via-primary/8 to-transparent backdrop-blur-sm overflow-hidden shadow-lg min-h-full">
                        {/* Etiqueta "Recomendado" */}
                        <div className="absolute top-4 right-4 z-20">
                            <Badge variant="default" className="text-xs bg-primary/90 text-secondary border-primary shadow-lg flex items-center gap-1">
                                <Sparkles className="size-3" />
                                Recomendado
                            </Badge>
                        </div>

                        {/* Check grande decorativo */}
                        <div className="absolute -top-6 -right-6 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                            <CheckCircle2 className="size-32 text-primary" strokeWidth={1.5} />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-primary/15 to-primary/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardHeader className="relative z-10 pb-5 pt-6">
                            <div className="flex items-start gap-5">
                                <div className="rounded-2xl bg-primary/70 p-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-xl ring-2 ring-primary/30">
                                    <Wrench className="size-7 text-secondary" />
                                </div>
                                <div className="flex-1 pt-1">
                                    <CardTitle className="text-2xl sm:text-xl font-bold text-primary-text mb-3">
                                        Buenity crea sistemas
                                    </CardTitle>
                                    <Badge variant="default" className="text-xs bg-primary/30 text-secondary border-primary/40 shadow-md">
                                        <CheckCircle2 className="size-3.5 mr-1.5" />
                                        Solución completa
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="relative z-10 pt-0 pb-6">
                            <Paragraph variant="secondary" className="leading-relaxed max-w-md">
                                Tu menú no es una imagen. Es una <Resaltar>herramienta de ventas</Resaltar>. Buenity está hecho para <Resaltar>restaurantes</Resaltar>, no para diseñadores.
                            </Paragraph>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Section>
    );
}

