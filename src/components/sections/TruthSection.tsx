import { Card, CardContent } from "@/components/ui/card";
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
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Verdad incómoda
          </h2>
          <p className="text-lg font-medium text-text-secondary sm:text-xl">
            (pero poderosa)
          </p>
        </div>

        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <p className="text-center text-lg font-semibold text-text-primary sm:text-xl">
                Lo que vendes no es tecnología.
                <br />
                <span className="text-primary">Vendes estatus.</span>
              </p>

              <div className="space-y-4">
                <p className="text-center text-text-secondary">
                  Un restaurante con Buenity se ve:
                </p>
                <div className="flex flex-col items-center gap-3">
                  {perceptions.map((perception, index) => {
                    const Icon = perception.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 border w-full sm:w-auto">
                        <Icon className="size-5 text-primary" />
                        <span className="font-medium text-text-primary">"{perception.text}"</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="text-center text-lg text-text-primary">
                Y eso, es lo que hace que la gente confíe y consuma.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

