"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Leaf, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { useLocalStorage } from "@/hooks/use-debounce";

const Navbar = () => {
  const [isDark, setIsDark] = useLocalStorage("theme", false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="#home"
            className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors"
          >
            <Leaf size={32} />
            <span className="text-2xl font-headline font-semibold">{SITE_CONFIG.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm"
              >
                {item.name}
              </Link>
            ))}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-foreground/80 hover:text-primary"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground/80 hover:text-primary"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="flex flex-col h-full p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-headline font-semibold text-primary">
                    {SITE_CONFIG.name}
                  </span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X size={24} />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md text-base"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                {mounted && (
                  <div className="pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={toggleTheme}
                    >
                      {isDark ? (
                        <>
                          <Sun size={20} className="mr-2" />
                          Light Mode
                        </>
                      ) : (
                        <>
                          <Moon size={20} className="mr-2" />
                          Dark Mode
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;