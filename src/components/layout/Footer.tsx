"use client";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-lg font-semibold text-primary-text mb-2">
                            Buenity
                        </h3>
                        <p className="text-sm text-secondary-text">
                            Convierte tu menú en una experiencia digital elegante que tus
                            clientes aman usar.
                        </p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h4 className="text-sm font-semibold text-primary-text mb-4">
                            Enlaces
                        </h4>
                        <ul className="space-y-2 text-sm text-secondary-text">
                            <li>
                                <a href="#como-funciona" className="hover:text-primary">
                                    Cómo funciona
                                </a>
                            </li>
                            <li>
                                <a href="#beneficios" className="hover:text-primary">
                                    Beneficios
                                </a>
                            </li>
                            <li>
                                <a href="#por-que-buenity" className="hover:text-primary">
                                    Por qué Buenity
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="text-sm font-semibold text-primary-text mb-4">
                            Contacto
                        </h4>
                        <ul className="space-y-2 text-sm text-secondary-text">
                            <li>
                                <a href="/contacto" className="hover:text-primary">
                                    Contáctanos
                                </a>
                            </li>
                            <li>
                                <a href="/privacidad" className="hover:text-primary">
                                    Privacidad
                                </a>
                            </li>
                            <li>
                                <a href="/terminos" className="hover:text-primary">
                                    Términos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-secondary-text">
                    <p>© {new Date().getFullYear()} Buenity. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

