import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { QrCode, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center">
            <div className="mx-auto max-w-4xl space-y-8">
                <div className="space-y-4">
                    <Title as="h1" size="h1" align="center" variant="default">
                        Tu restaurante merece algo mejor que una foto de WhatsApp
                    </Title>
                    <Paragraph size="lg" align="center" className="mx-auto max-w-2xl">
                        Convierte tu menú en una experiencia digital elegante que tus clientes aman usar.
                    </Paragraph>
                </div>

                <Paragraph size="base" align="center" variant="tertiary" className="mx-auto max-w-xl">
                    Con Buenity, tus clientes escanean un QR y ven tu menú en una página moderna, rápida y clara.
                    <br />
                    <span className="font-medium">Sin Canva. Sin PDFs borrosos. Sin links feos.</span>
                </Paragraph>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="w-full sm:w-auto">
                        <Sparkles className="size-5" />
                        Crear mi menú digital
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        <QrCode className="size-5" />
                        Ver ejemplo
                    </Button>
                </div>
            </div>
        </section>
    );
}

