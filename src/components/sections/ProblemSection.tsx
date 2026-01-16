import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Title } from "@/components/ui/title";
import { Paragraph } from "@/components/ui/paragraph";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { X, FileText, Image, Palette, DollarSign } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: FileText,
      title: "Menús en PDF que no cargan",
      description: "Archivos pesados que tardan en abrir o no se ven bien en móviles",
      isPrimary: true,
    },
    {
      icon: Image,
      title: "Fotos enviadas por WhatsApp",
      description: "Imágenes borrosas, desordenadas y difíciles de leer",
      isPrimary: true,
    },
    {
      icon: Palette,
      title: "Cartas hechas en Canva sin orden",
      description: "Diseños genéricos que no reflejan la identidad de tu restaurante",
      isPrimary: true,
    },
    {
      icon: DollarSign,
      title: "Cambios de precio que requieren volver a diseñar todo",
      description: "Cada actualización significa horas de trabajo rediseñando",
      isPrimary: true,
    },
  ];

  const consequences = [
    "Clientes confundidos",
    "Meseros perdiendo tiempo",
    "Tu restaurante viéndose poco profesional",
  ];

  return (
    <Section gradient="secondary" containerClassName="max-w-7xl">
      <div className="w-full space-y-14">
        {/* Header */}
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

        {/* Problemas Grid */}
        <div className="grid gap-4 items-stretch sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className={
                  "group relative border border-destructive/15 transition-all duration-300 bg-card/80 backdrop-blur-sm gap-2 " +
                  "hover:shadow-lg hover:-translate-y-1 " +
                  (problem.isPrimary
                    ? "lg:col-span-2 border-l-4 border-l-destructive/70 hover:border-destructive/40"
                    : "border-l-2 border-l-destructive/30 opacity-90")
                }
              >
                <CardContent className="pb-2">
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-destructive/10 p-2.5 group-hover:bg-destructive/20 transition-colors duration-300">
                      <Icon className={problem.isPrimary ? "size-6 text-destructive" : "size-5 text-destructive/80"} />
                    </div>
                    <CardTitle className={problem.isPrimary
                      ? "text-xl sm:text-lg font-bold text-primary-text leading-tight"
                      : "text-base sm:text-sm font-semibold text-primary-text/90 leading-tight"
                    }>
                      {problem.title}
                    </CardTitle>
                  </div>
                </CardContent>

                <CardContent className="space-y-2">
                  <Paragraph size="sm" variant="secondary" className={problem.isPrimary ? "max-w-sm text-secondary-text" : "max-w-xs text-secondary-text/80 text-sm"}>
                    {problem.description}
                  </Paragraph>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Consecuencias */}
        <div className="relative">
          <div className="rounded-2xl border-2 border-destructive/30 bg-gradient-to-br from-destructive/10 via-destructive/20 to-destructive/10 p-6 sm:p-10 backdrop-blur-sm">
            <Title as="h4" size="h4" align="center" variant="default" className="mb-6">
              Eso se traduce en:
            </Title>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {consequences.map((consequence, index) => (
                <Badge
                  key={index}
                  variant="destructive"
                  className="text-sm px-4 py-2.5 rounded-full border-2 bg-destructive/60 hover:bg-destructive/80 transition-all duration-300"
                >
                  <X className="size-4 mr-2" />
                  {consequence}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

