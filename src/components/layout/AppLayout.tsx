"use client";

import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { BuenityNavbar } from "./ResizableNavbar";
import { Footer } from "./Footer";

interface AppLayoutProps {
    children: ReactNode;
    /**
     * Si es true, siempre muestra el header. Si es false, siempre lo oculta.
     * Si es undefined, usa las reglas automáticas basadas en la ruta.
     */
    showHeader?: boolean;
    /**
     * Si es true, siempre muestra el footer. Si es false, siempre lo oculta.
     * Si es undefined, usa las reglas automáticas basadas en la ruta.
     */
    showFooter?: boolean;
    /**
     * Rutas donde el header debe estar oculto (por defecto)
     */
    hideHeaderOnRoutes?: string[];
    /**
     * Rutas donde el footer debe estar oculto (por defecto)
     */
    hideFooterOnRoutes?: string[];
}

/**
 * Layout principal de la aplicación que maneja el renderizado condicional
 * del header y footer basado en rutas o props explícitas.
 */
export function AppLayout({
    children,
    showHeader,
    showFooter,
    hideHeaderOnRoutes = [],
    hideFooterOnRoutes = [],
}: AppLayoutProps) {
    const pathname = usePathname();

    // Determinar si mostrar el header
    const shouldShowHeader =
        showHeader !== undefined
            ? showHeader
            : !hideHeaderOnRoutes.some((route) => pathname.startsWith(route));

    // Determinar si mostrar el footer
    const shouldShowFooter =
        showFooter !== undefined
            ? showFooter
            : !hideFooterOnRoutes.some((route) => pathname.startsWith(route));

    return (
        <div className="min-h-[100dvh] bg-background flex flex-col w-full">
            {shouldShowHeader && <BuenityNavbar />}
            <main className="flex-1 w-full">{children}</main>
            {shouldShowFooter && <Footer />}
        </div>
    );
}

