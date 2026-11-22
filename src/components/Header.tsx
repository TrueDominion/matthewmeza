"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content";
import { Lockup } from "./Brand";
import { ArrowRight, Close, Menu, Moon, Sun } from "./Icons";

type Theme = "light" | "dark";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as Theme) || "light");
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";
  const toggle = () => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={theme ? `Switch to ${next} mode` : "Toggle color mode"}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

export function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => !href.startsWith("/#") && pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label={`${site.name}, home`}>
          <Lockup />
        </Link>

        <nav className="pill-nav" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pill-nav__item"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <a className="btn btn--primary btn--sm site-header__cta" href={`mailto:${site.email}`}>
            Get in touch <ArrowRight size={16} />
          </a>
          <button
            type="button"
            className="icon-btn site-header__menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className="mobile-nav" data-open={open} aria-label="Mobile" hidden={!open}>
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="mobile-nav__item" onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a className="btn btn--primary" href={`mailto:${site.email}`}>
          Get in touch <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}
