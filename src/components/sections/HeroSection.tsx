import { Button } from "@/components/ui/button";
import { QrCode, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Tu restaurante merece algo mejor que una foto de WhatsApp
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl md:text-2xl">
            Convierte tu menú en una experiencia digital elegante que tus clientes aman usar.
          </p>
        </div>

        <p className="mx-auto max-w-xl text-base text-text-tertiary sm:text-lg">
          Con Buenity, tus clientes escanean un QR y ven tu menú en una página moderna, rápida y clara.
          <br />
          <span className="font-medium">Sin Canva. Sin PDFs borrosos. Sin links feos.</span>
        </p>

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

