import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { QrCode, Sparkles } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Resaltar } from "@/components/my/Resaltar";

export function HeroSection() {
    return (
        <BackgroundGradientAnimation
            containerClassName="min-h-[90dvh]"
            className="relative z-10"
        >
            <section className="relative mx-auto max-w-5xl w-full flex h-full flex-col items-center justify-center px-4 py-17 lg:py-12 text-center gap-8">
                <HeroHighlight className="w-full">
                    <div className="space-y-6">
                        <Title as="h1" size="h1" align="center" variant="default" className="relative z-10">
                            <Highlight className="text-primary inline">
                                Tu restaurante merece algo mejor </Highlight> que una foto de
                            WhatsApp

                        </Title>
                        <Paragraph size="lg" align="center" variant="secondary" className="mx-auto max-w-2xl">
                            Convierte tu menú en una experiencia <Resaltar>digital elegante</Resaltar> que tus clientes aman usar.
                        </Paragraph>
                        <Paragraph size="base" align="center" variant="secondary" className="mx-auto max-w-2xl">
                            <Resaltar>Con Buenity</Resaltar>, tus clientes escanean un <Resaltar>QR</Resaltar> y ven tu menú en una página moderna, rápida y clara.
                            <br />  <br />
                            <span className="font-bold">
                                Sin <Resaltar>Canva</Resaltar>. Sin <Resaltar>PDFs borrosos</Resaltar>. Sin <Resaltar>links feos</Resaltar>.
                            </span>
                        </Paragraph>
                    </div>
                </HeroHighlight>



                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="xl" className="w-full sm:w-auto" asChild>
                        <a href="https://app.buenity.com/auth/register">
                            <Sparkles className="size-5" />
                            Probar gratis
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                        <a href="https://app.buenity.com/starbucks">
                            <QrCode className="size-5" />
                            Ver ejemplo
                        </a>
                    </Button>
                </div>
            </section>
        </BackgroundGradientAnimation >
    );
}

