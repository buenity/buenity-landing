"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, QrCode } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/60 bg-background">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 py-12 relative">
                    <div className="grid gap-10 lg:grid-cols-12">
                        {/* Marca */}
                        <div className="lg:col-span-4 space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-semibold text-primary-text">Buenity</span>
                                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs text-secondary">
                                    Menú digital
                                </span>
                            </div>
                            <p className="text-sm text-secondary-text max-w-sm leading-relaxed">
                                Convierte tu menú en una experiencia digital elegante que tus clientes aman usar.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button size="lg" className="w-full sm:w-auto" asChild>
                                    <a href="https://app.buenity.com/auth/register">
                                        <Sparkles className="size-5" />
                                        Crear mi menú
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                                    <a href="https://app.buenity.com/starbucks">
                                        <QrCode className="size-5" />
                                        Ver ejemplo
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Navegación */}
                        <div className="lg:col-span-8 grid gap-8 sm:grid-cols-3">
                            <div>
                                <h4 className="text-sm font-semibold text-primary-text mb-4">
                                    Producto
                                </h4>
                                <ul className="space-y-2 text-sm text-secondary-text">
                                    <li>
                                        <a href="#como-funciona" className="hover:text-primary transition-colors">
                                            Cómo funciona
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#beneficios" className="hover:text-primary transition-colors">
                                            Beneficios
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#por-que-buenity" className="hover:text-primary transition-colors">
                                            Por qué Buenity
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-primary-text mb-4">
                                    Empresa
                                </h4>
                                <ul className="space-y-2 text-sm text-secondary-text">
                                    <li>
                                        <a href="/contacto" className="hover:text-primary transition-colors">
                                            Contáctanos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/privacidad" className="hover:text-primary transition-colors">
                                            Privacidad
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/terminos" className="hover:text-primary transition-colors">
                                            Términos
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-primary-text mb-4">
                                    Recursos
                                </h4>
                                <ul className="space-y-2 text-sm text-secondary-text">
                                    <li>
                                        <a href="#como-funciona" className="hover:text-primary transition-colors">
                                            Guía rápida
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#beneficios" className="hover:text-primary transition-colors">
                                            Casos de uso
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#por-que-buenity" className="hover:text-primary transition-colors">
                                            Comparativa
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-10 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-text">
                        <p>© {new Date().getFullYear()} Buenity. Todos los derechos reservados.</p>
                        <p className="text-xs text-secondary-text/80">
                            Hecho para restaurantes que quieren vender más.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


