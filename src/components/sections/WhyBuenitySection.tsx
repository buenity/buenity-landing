import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Resaltar } from "@/components/my/Resaltar";
import { Palette, Wrench, X, CheckCircle2 } from "lucide-react";

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

                <div className="grid gap-8 sm:grid-cols-2">
                    {/* Canva Card */}
                    <Card className="group border-2 border-destructive/20 hover:border-destructive/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-card/90 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardHeader className="relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-destructive/10 p-3 group-hover:bg-destructive/20 transition-colors duration-300">
                                    <Palette className="size-6 text-destructive" />
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-xl font-bold text-primary-text mb-2">
                                        Canva hace diseños
                                    </CardTitle>
                                    <Badge variant="destructive" className="text-xs text-white">
                                        <X className="size-3 mr-1" />
                                        Limitado
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="relative z-10">
                            <Paragraph variant="secondary" className="leading-relaxed">
                                Canva crea <Resaltar>imágenes estáticas</Resaltar>. Una vez que cambias algo, tienes que <Resaltar>rediseñar todo</Resaltar>.
                            </Paragraph>
                        </CardContent>
                    </Card>

                    {/* Buenity Card */}
                    <Card className="group border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardHeader className="relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-primary/60 p-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <Wrench className="size-6 text-secondary" />
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-xl font-bold text-primary-text mb-2">
                                        Buenity crea sistemas
                                    </CardTitle>
                                    <Badge variant="default" className="text-xs bg-primary/20 text-secondary border-primary/30">
                                        <CheckCircle2 className="size-3 mr-1" />
                                        Solución completa
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="relative z-10">
                            <Paragraph variant="secondary" className="leading-relaxed">
                                Tu menú no es una imagen. Es una <Resaltar>herramienta de ventas</Resaltar>. Buenity está hecho para <Resaltar>restaurantes</Resaltar>, no para diseñadores.
                            </Paragraph>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Section>
    );
}

