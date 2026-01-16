"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Logo from "@/components/my/Logo";

export function BuenityNavbar() {
    const navItems = [
        {
            name: "Cómo funciona",
            link: "#como-funciona",
        },
        {
            name: "Beneficios",
            link: "#beneficios",
        },
        {
            name: "Por qué Buenity",
            link: "#por-que-buenity",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody className="justify-between gap-4">
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-2">
                    <NavbarButton
                        href="https://app.buenity.com/auth/login"
                        variant="secondary"
                    >
                        Iniciar sesión
                    </NavbarButton>
                    <NavbarButton
                        href="https://app.buenity.com/auth/register"
                        variant="primary"
                    >
                        Probar gratis
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-primary-text"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-4">
                        <NavbarButton
                            href="https://app.buenity.com/auth/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="secondary"
                            className="w-full"
                        >
                            Iniciar sesión
                        </NavbarButton>
                        <NavbarButton
                            href="https://app.buenity.com/auth/register"
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full"
                        >
                            Probar gratis
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
