import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary py-20 px-4">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <div className="space-y-4">
          <Title as="h2" size="h2" align="center" variant="secondary">
            Tu restaurante no puede verse como uno más
          </Title>
          <Paragraph size="base" align="center" variant="secondary" className="opacity-90">
            Empieza por lo básico:
            <br />
            <span className="font-semibold">un menú digital que sí da buena impresión.</span>
          </Paragraph>
        </div>

        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-white">
          <Sparkles className="size-5" />
          Crear mi menú digital ahora
        </Button>
      </div>
    </section>
  );
}

