import { Card, CardContent } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Rocket, ShoppingCart, Users, Zap } from "lucide-react";

export function FutureSection() {
  const futureFeatures = [
    {
      icon: ShoppingCart,
      title: "Pedidos",
    },
    {
      icon: Users,
      title: "Mesas",
    },
    {
      icon: Zap,
      title: "Estados",
    },
    {
      icon: Rocket,
      title: "Automatización",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <Title as="h2" size="h2" align="center" variant="default">
            Lo que viene después
          </Title>
          <Paragraph size="base" align="center" weight="medium" variant="secondary">
            (sin prometer humo)
          </Paragraph>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <Paragraph size="base" align="center" variant="primary">
                Buenity está creciendo hacia algo más grande:
              </Paragraph>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {futureFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 rounded-full bg-card px-4 py-2 border">
                      <Icon className="size-4 text-primary" />
                      <span className="text-sm font-medium text-secondary-text">{feature.title}</span>
                    </div>
                  );
                })}
              </div>
              <Paragraph size="base" align="center" variant="secondary">
                Pero hoy empiezas por lo más importante:
                <br />
                <span className="font-semibold text-primary-text">
                  tener una carta que venda.
                </span>
              </Paragraph>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

