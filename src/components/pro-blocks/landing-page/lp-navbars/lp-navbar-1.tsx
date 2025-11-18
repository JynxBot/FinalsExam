"use client";

import { Button } from "~/components/ui/button";
import { Menu, X, Headphones } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "Products", href: "#" },
  { label: "Use cases", href: "#" },
  { label: "Docs", href: "/docspage" },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button
          variant="ghost"
          className="w-full md:w-auto text-blue-300 hover:bg-blue-800"
        >
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-black sticky top-0 isolate z-50 py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Go to homepage">
            {/* Headphones logo with navy blue background */}
            <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center">
              <Headphones className="w-6 h-6 text-blue-300" />
            </div>
          </Link>

          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden text-blue-300"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          <Link href="#">
            <Button className="bg-blue-900 text-blue-300 hover:bg-blue-800">
              Get started
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <Link href="#">
              <Button className="w-full bg-blue-900 text-blue-300 hover:bg-blue-800">
                Get started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
