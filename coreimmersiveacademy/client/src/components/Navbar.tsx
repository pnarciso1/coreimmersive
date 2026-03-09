import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <nav className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <div className="container site-nav-bar">
        <Link href="/">
          <span className="site-logo">
            Core <span>Immersive</span>
          </span>
        </Link>

        <div className="site-nav-links hidden md:flex">
          {siteContent.navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`site-nav-link ${location === link.href ? "site-nav-link-active" : ""}`}>
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/get-involved">
            <span className="btn-primary btn-small">
              Get Involved
            </span>
          </Link>
        </div>

        <button
          className="site-nav-toggle md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="site-mobile-menu">
          <div className="container site-mobile-menu-inner">
            {siteContent.navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="site-mobile-link">
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/get-involved">
              <span className="btn-primary">
                Get Involved
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
