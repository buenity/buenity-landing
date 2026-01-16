import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { QrCode, Sparkles, PlayCircle } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Resaltar } from "@/components/my/Resaltar";


export function HeroSection() {
    return (
        <BackgroundGradientAnimation
            containerClassName="min-h-[85dvh]"
            className="relative z-10"
        >
            <section className="relative mx-auto max-w-5xl w-full h-full flex flex-col items-center justify-center px-4 py-16 lg:py-14 text-center gap-10">
                <HeroHighlight className="w-full">
                    <div className="flex flex-col items-center justify-center gap-10">
                        <Title as="h1" size="h1" align="center" variant="default" className="relative z-10">
                            <Highlight className="text-primary inline">
                                Tu restaurante merece algo mejor </Highlight> que un PDF
                        </Title>
                        <Title as="h3" size="h3" align="center" variant="secondary" className="mx-auto max-w-4xl">
                            Convierte tu menú en una experiencia <Resaltar>digital elegante</Resaltar> que tus clientes aman usar.
                        </Title>
                        <Paragraph size="base" align="center" variant="secondary" className="mx-auto max-w-2xl">
                            <Resaltar>Con Buenity</Resaltar>, tus clientes escanean un <Resaltar>QR</Resaltar> y ven tu menú en una página moderna, rápida y clara.
                            <Resaltar className="font-bold">
                                Sin Canva.  Sin PDFs borrosos.  Sin links feos.
                            </Resaltar>
                        </Paragraph>
                    </div>
                </HeroHighlight>



                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                        size="xl"
                        className="min-w-64 font-bold shadow-lg shadow-primary/20 border-2 border-primary/80"
                        asChild
                    >
                        <a href="https://app.buenity.com/auth/register">
                            <Sparkles className="size-5" />
                            Probar gratis
                        </a>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto font-semibold border-2 border-primary/60"
                        asChild
                    >
                        <a href="#como-funciona">
                            <PlayCircle className="size-5" />
                            Ver cómo funciona
                        </a>
                    </Button>
                </div>
            </section>
        </BackgroundGradientAnimation >
    );
}

