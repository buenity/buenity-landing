import { Card, CardContent } from "@/components/ui/card";
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
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Lo que viene después
          </h2>
          <p className="text-lg font-medium text-text-secondary sm:text-xl">
            (sin prometer humo)
          </p>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <p className="text-center text-lg text-text-primary">
                Buenity está creciendo hacia algo más grande:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {futureFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 rounded-full bg-card px-4 py-2 border">
                      <Icon className="size-4 text-primary" />
                      <span className="text-sm font-medium text-text-secondary">{feature.title}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-text-secondary">
                Pero hoy empiezas por lo más importante:
                <br />
                <span className="font-semibold text-text-primary">
                  tener una carta que venda.
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

