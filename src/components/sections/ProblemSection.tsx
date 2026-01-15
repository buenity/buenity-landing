import { Card, CardContent } from "@/components/ui/card";
import { X, FileText, Image, Palette, DollarSign } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: FileText,
      title: "Menús en PDF que no cargan",
      description: "Archivos pesados que tardan en abrir o no se ven bien en móviles",
    },
    {
      icon: Image,
      title: "Fotos enviadas por WhatsApp",
      description: "Imágenes borrosas, desordenadas y difíciles de leer",
    },
    {
      icon: Palette,
      title: "Cartas hechas en Canva sin orden",
      description: "Diseños genéricos que no reflejan la identidad de tu restaurante",
    },
    {
      icon: DollarSign,
      title: "Cambios de precio que requieren volver a diseñar todo",
      description: "Cada actualización significa horas de trabajo rediseñando",
    },
  ];

  const consequences = [
    "Clientes confundidos",
    "Meseros perdiendo tiempo",
    "Tu restaurante viéndose poco profesional",
  ];

  return (
    <section className="bg-muted py-20 px-4">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            El problema real
            <span className="block text-text-secondary text-2xl sm:text-3xl md:text-4xl mt-2">
              (lo que sí duele)
            </span>
          </h2>
          <p className="text-lg text-text-secondary sm:text-xl">
            Hoy la mayoría de restaurantes tienen:
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="border-destructive/20">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-destructive/10 p-2">
                        <Icon className="size-5 text-destructive" />
                      </div>
                      <h3 className="font-semibold text-text-primary">{problem.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary">{problem.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="rounded-lg border-2 border-destructive/30 bg-destructive/5 p-6">
          <p className="mb-4 text-center font-semibold text-text-primary">
            Eso se traduce en:
          </p>
          <ul className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {consequences.map((consequence, index) => (
              <li key={index} className="flex items-center gap-2 text-text-secondary">
                <X className="size-5 text-destructive" />
                <span>{consequence}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

