import { Card, CardContent } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { Resaltar } from "@/components/my/Resaltar";
import { Rocket, ShoppingCart, Users, Zap, Target } from "lucide-react";

export function FutureSection() {
  const futureFeatures = [
    {
      icon: ShoppingCart,
      title: "Facturas",
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
    <Section gradient="primary" containerClassName="max-w-5xl">
      <div className="w-full space-y-8">
        <div className="text-center space-y-4">
          <Title as="h2" size="h2" align="center" variant="default">
            Lo que viene después
          </Title>
          <Paragraph size="base" align="center" weight="medium" variant="secondary">
            (sin prometer humo)
          </Paragraph>
        </div>

        <Card className="group border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <CardContent className="pt-8 pb-8 relative z-10">
            <div className="space-y-8">
              <div className="text-center">
                <Paragraph size="lg" align="center" weight="semibold" variant="primary" className="mb-2">
                  Buenity está creciendo hacia algo más grande:
                </Paragraph>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {futureFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Badge
                      key={index}
                      variant="default"
                      className="group/badge text-sm px-5 py-3 rounded-full border-2 bg-primary/20 hover:bg-primary/30 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 cursor-default"
                    >
                      <Icon className="size-4 mr-2 text-secondary group-hover/badge:text-secondary transition-colors duration-300" />
                      <span className="font-semibold text-primary-text">{feature.title}</span>
                    </Badge>
                  );
                })}
              </div>

              <div className="text-center space-y-3 pt-4 border-t border-primary/20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-2">
                  <Target className="size-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Enfoque actual</span>
                </div>
                <Paragraph size="base" align="center" variant="secondary" className="leading-relaxed">
                  Pero hoy empiezas por lo más importante:
                  <br />
                  <span className="font-bold text-primary-text text-lg">
                    tener una <Resaltar>carta que venda</Resaltar>.
                  </span>
                </Paragraph>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

