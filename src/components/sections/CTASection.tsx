import { CTA } from "@/components/ui/cta";
import { Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary/10 py-14 px-4">
      <div className="mx-auto max-w-4xl">
        <CTA
          layout="centered"
          variant="primary"
          size="lg"
          title="Tu restaurante no puede verse como uno más"
          description="Empieza por lo básico: un menú digital que sí da buena impresión."
          primaryAction={{
            label: "Crear mi menú digital ahora",
            href: "https://app.buenity.com/auth/register",
            icon: <Sparkles className="size-5" />,
          }}
        />
      </div>
    </section>
  );
}

