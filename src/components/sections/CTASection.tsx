import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary py-20 px-4">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-text-inverse sm:text-4xl md:text-5xl">
            Tu restaurante no puede verse como uno más
          </h2>
          <p className="text-lg text-text-inverse/90 sm:text-xl">
            Empieza por lo básico:
            <br />
            <span className="font-semibold">un menú digital que sí da buena impresión.</span>
          </p>
        </div>

        <Button size="lg" variant="secondary" className="w-full sm:w-auto">
          <Sparkles className="size-5" />
          Crear mi menú digital ahora
        </Button>
      </div>
    </section>
  );
}

