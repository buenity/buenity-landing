import { Card, CardContent } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
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
          <Title as="h2" size="h2" align="center" variant="default">
            El problema real
            <span className="block text-secondary-text text-2xl sm:text-3xl md:text-4xl mt-2 font-normal">
              (lo que sí duele)
            </span>
          </Title>
          <Paragraph size="base" align="center" variant="secondary">
            Hoy la mayoría de restaurantes tienen:
          </Paragraph>
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
                      <h3 className="font-semibold text-primary-text">{problem.title}</h3>
                    </div>
                    <Paragraph size="sm" variant="secondary">{problem.description}</Paragraph>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="rounded-lg border-2 border-destructive/30 bg-destructive/5 p-6">
          <Paragraph size="base" align="center" weight="semibold" variant="primary" className="mb-4">
            Eso se traduce en:
          </Paragraph>
          <ul className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {consequences.map((consequence, index) => (
              <li key={index} className="flex items-center gap-2 text-secondary-text">
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

