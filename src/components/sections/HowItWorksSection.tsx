import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Store, Upload, QrCode } from "lucide-react";

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
    <section id="como-funciona" className="bg-muted py-20 px-4">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center space-y-4">
          <Title as="h2" size="h2" align="center" variant="default">
            Cómo funciona
          </Title>
          <Paragraph size="base" align="center" variant="secondary">
            Eso es todo. Tus clientes ya pueden ver tu carta digital.
          </Paragraph>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary-text">{step.title}</CardTitle>
                    </div>
                    <Badge variant="default" className="text-lg font-bold">
                      {step.number}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Paragraph variant="secondary">{step.description}</Paragraph>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

