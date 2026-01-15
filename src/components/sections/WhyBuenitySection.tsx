import { Card, CardContent } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Palette, Wrench } from "lucide-react";

export function WhyBuenitySection() {
    return (
        <section id="por-que-buenity" className="py-20 px-4">
            <div className="mx-auto max-w-4xl space-y-12">
                <div className="text-center space-y-4">
                    <Title as="h2" size="h2" align="center" variant="default">
                        Por qué Buenity
                        <span className="block text-secondary-text text-2xl sm:text-3xl md:text-4xl mt-2 font-normal">
                            (y no Canva o PDF)
                        </span>
                    </Title>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                    <Card className="border-muted-foreground/20">
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-muted-foreground/10 p-2">
                                        <Palette className="size-5 text-muted-foreground" />
                                    </div>
                                    <h3 className="font-semibold text-primary-text">Canva hace diseños</h3>
                                </div>
                                <Paragraph variant="secondary">
                                    Canva crea imágenes estáticas. Una vez que cambias algo, tienes que rediseñar todo.
                                </Paragraph>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-primary/30 bg-primary/5">
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-primary/10 p-2">
                                        <Wrench className="size-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-primary-text">Buenity crea sistemas</h3>
                                </div>
                                <Paragraph variant="secondary">
                                    Tu menú no es una imagen. Es una herramienta de ventas. Buenity está hecho para restaurantes, no para diseñadores.
                                </Paragraph>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

