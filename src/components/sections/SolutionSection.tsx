import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Eye, Grid3x3, Camera, ShoppingCart, Palette } from "lucide-react";

export function SolutionSection() {
  const features = [
    {
      icon: Eye,
      title: "Ver tu carta",
      description: "Diseño claro y profesional",
    },
    {
      icon: Grid3x3,
      title: "Explorar categorías",
      description: "Navegación intuitiva",
    },
    {
      icon: Camera,
      title: "Ver fotos",
      description: "Imágenes de alta calidad",
    },
    {
      icon: ShoppingCart,
      title: "Elegir tranquilo",
      description: "Sin presión, a su ritmo",
    },
    {
      icon: QrCode,
      title: "Pedir sin presión",
      description: "Experiencia fluida",
    },
    {
      icon: Palette,
      title: "Con la identidad de tu marca",
      description: "Logo, colores y estilo personalizado",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            La solución
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary sm:text-xl">
            Buenity es tu menú digital profesional.
            <br />
            <span className="font-medium text-text-primary">
              Un solo link y un QR donde tus clientes pueden:
            </span>
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-text-primary">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-text-primary sm:text-xl">
            Todo con el diseño y los colores de tu restaurante.
          </p>
        </div>
      </div>
    </section>
  );
}

