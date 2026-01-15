import { Card, CardContent } from "@/components/ui/card";
import { Palette, Wrench } from "lucide-react";

export function WhyBuenitySection() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Por qué Buenity
            <span className="block text-text-secondary text-2xl sm:text-3xl md:text-4xl mt-2">
              (y no Canva o PDF)
            </span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <Card className="border-muted-foreground/20">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-muted-foreground/10 p-2">
                    <Palette className="size-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-text-primary">Canva hace diseños</h3>
                </div>
                <p className="text-text-secondary">
                  Canva crea imágenes estáticas. Una vez que cambias algo, tienes que rediseñar todo.
                </p>
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
                  <h3 className="font-semibold text-text-primary">Buenity crea sistemas</h3>
                </div>
                <p className="text-text-secondary">
                  Tu menú no es una imagen. Es una herramienta de ventas. Buenity está hecho para restaurantes, no para diseñadores.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

