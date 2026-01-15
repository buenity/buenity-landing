import { Card, CardContent } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Award, TrendingUp, Heart } from "lucide-react";

export function TruthSection() {
  const perceptions = [
    {
      icon: Award,
      text: "Este lugar está bien manejado",
    },
    {
      icon: TrendingUp,
      text: "Más moderno y confiable",
    },
    {
      icon: Heart,
      text: "Genera confianza y consumo",
    },
  ];

  return (
    <section className="bg-muted py-20 px-4">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <Title as="h2" size="h2" align="center" variant="default">
            Verdad incómoda
          </Title>
          <Paragraph size="base" align="center" weight="medium" variant="secondary">
            (pero poderosa)
          </Paragraph>
        </div>

        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <Paragraph size="base" align="center" weight="semibold" variant="primary" className="sm:text-xl">
                Lo que vendes no es tecnología.
                <br />
                <span className="text-primary">Vendes estatus.</span>
              </Paragraph>

              <div className="space-y-4">
                <Paragraph size="base" align="center" variant="secondary">
                  Un restaurante con Buenity se ve:
                </Paragraph>
                <div className="flex flex-col items-center gap-3">
                  {perceptions.map((perception, index) => {
                    const Icon = perception.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 border w-full sm:w-auto">
                        <Icon className="size-5 text-primary" />
                        <span className="font-medium text-primary-text">"{perception.text}"</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Paragraph size="base" align="center" variant="primary">
                Y eso, es lo que hace que la gente confíe y consuma.
              </Paragraph>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

