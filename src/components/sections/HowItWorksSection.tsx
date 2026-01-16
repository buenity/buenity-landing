import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Section } from "@/components/ui/section";
import { Resaltar } from "@/components/my/Resaltar";
import { Store, Upload, QrCode, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: Store,
      title: "Creas tu restaurante",
      description: "Configura tu información básica y personaliza tu identidad visual",
    },
    {
      number: "2",
      icon: Upload,
      title: "Subes tu menú",
      description: "Agrega productos, categorías, precios y fotos de forma sencilla",
    },
    {
      number: "3",
      icon: QrCode,
      title: "Imprimes tu QR",
      description: "Descarga tu código QR y colócalo en tu restaurante",
    },
  ];

  return (
    <Section id="como-funciona" gradient="primary" containerClassName="max-w-6xl">
      <div className="w-full space-y-12">
        <div className="text-center space-y-4">
          <Title as="h2" size="h2" align="center" variant="default">
            Cómo funciona
          </Title>
          <Paragraph size="lg" align="center" variant="secondary" className="max-w-2xl mx-auto">
            Eso es todo. Tus clientes ya pueden ver tu carta digital.
          </Paragraph>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 relative">
          {/* Línea conectora decorativa */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="group relative border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-card/90 backdrop-blur-sm z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-primary/60 p-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Icon className="size-6 text-secondary" />
                      </div>
                    </div>
                    <Badge variant="default" className="text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center bg-primary/40 text-secondary border-primary/30 group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                      {step.number}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary-text">
                    {step.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <Paragraph variant="secondary" className="leading-relaxed">
                    {step.description}
                  </Paragraph>
                </CardContent>

                {/* Flecha decorativa entre pasos */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="size-6 text-primary/40 group-hover:text-primary transition-colors duration-300" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

