import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { QrCode, Eye, Grid3x3, Camera, ShoppingCart, Palette, CheckCircle2 } from "lucide-react";

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
    <section className="bg-background py-16 px-4 md:px-6 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-tertiary/20 pointer-events-none" />

      <div className="mx-auto max-w-7xl space-y-16 relative z-10 flex flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center space-y-6">

          <Title as="h2" size="h2" align="center" variant="default" className="max-w-3xl mx-auto">
            La solución
          </Title>

          <Paragraph size="lg" align="center" variant="secondary" className="mx-auto max-w-2xl">
            Buenity es tu menú digital profesional.
            <br />
            <span className="font-medium text-primary-text">
              Un solo link y un QR donde tus clientes pueden:
            </span>
          </Paragraph>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full items-center ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
              >
                <CardHeader className="">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-primary/60 p-3 group-hover:bg-primary/80 transition-colors duration-300">
                      <Icon className="size-6 text-secondary" />
                    </div>
                    <CardTitle className="text-lg sm:text-base font-semibold text-primary-text leading-tight">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <Paragraph size="base" variant="secondary" className="leading-relaxed">
                    {feature.description}
                  </Paragraph>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer destacado */}
        <div className="relative">
          <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/15 to-primary/10 p-8 sm:p-10 backdrop-blur-sm">
            <div className="text-center">
              <Paragraph size="lg" align="center" weight="medium" variant="primary">
                Todo con el diseño y los colores de tu restaurante.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

