import { siteContent, type ActionLink, type MediaContent } from "@/content/siteContent";
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "./Navbar";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;

    if (!el) {
      return;
    }

    if (reduceMotion) {
      el.querySelectorAll(".reveal").forEach((target) => target.classList.add("visible"));
      if (el.classList.contains("reveal")) {
        el.classList.add("visible");
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const targets = entry.target.querySelectorAll(".reveal");
          targets.forEach((target, index) => {
            setTimeout(() => target.classList.add("visible"), index * 80);
          });

          if (entry.target.classList.contains("reveal")) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function ActionButton({ action, small = false }: { action: ActionLink; small?: boolean }) {
  const className = `btn-${action.variant}${small ? " btn-small" : ""}`;

  return (
    <Link href={action.href}>
      <span className={className}>{action.label}</span>
    </Link>
  );
}

export function SectionTag({ children }: { children: React.ReactNode }) {
  return <span className="label-tag">{children}</span>;
}

export function MediaAsset({
  media,
  aspectRatio = "16 / 9",
  height,
  className = "",
  priority = false,
}: {
  media: MediaContent;
  aspectRatio?: string;
  height?: string;
  className?: string;
  priority?: boolean;
}) {
  if (!media.src) {
    return <MediaPlaceholder label={media.label ?? media.alt} aspectRatio={aspectRatio} height={height} isVideo={media.kind === "video"} />;
  }

  return (
    <div
      className={`media-shell ${className}`.trim()}
      style={{
        aspectRatio: height ? undefined : aspectRatio,
        height,
      }}
    >
      {media.kind === "video" ? (
        <video
          className="media-element"
          src={media.src}
          aria-label={media.alt}
          autoPlay
          loop
          muted
          playsInline
          preload={priority ? "auto" : "metadata"}
          style={{ objectPosition: media.objectPosition }}
        />
      ) : (
        <img
          className="media-element"
          src={media.src}
          alt={media.alt}
          loading={priority ? "eager" : "lazy"}
          style={{ objectPosition: media.objectPosition }}
        />
      )}
      <div className="media-overlay" />
      {media.label ? <span className="media-badge">{media.label}</span> : null}
    </div>
  );
}

export function MediaPlaceholder({
  label,
  aspectRatio = "16 / 9",
  height,
  isVideo = false,
}: {
  label: string;
  aspectRatio?: string;
  height?: string;
  isVideo?: boolean;
}) {
  return (
    <div
      className="media-placeholder"
      style={{
        aspectRatio: height ? undefined : aspectRatio,
        height,
        width: "100%",
      }}
    >
      <div className="media-placeholder-icon">
        {isVideo ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        )}
      </div>
      <span className="media-placeholder-label">{label}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-grid">
          <div>
            <div className="site-logo">
              Core <span>Immersive</span>
            </div>
            <p className="footer-copy">{siteContent.brand.tagline}</p>
          </div>

          <div>
            <div className="footer-heading">Programs</div>
            <div className="footer-links">
              {siteContent.footer.programs.map((item) => (
                <Link key={item.label} href={item.href}>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-heading">Organization</div>
            <div className="footer-links">
              {siteContent.footer.organization.map((item) => (
                <Link key={item.label} href={item.href}>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-heading">Contact</div>
            <div className="footer-links">
              <a href={`mailto:${siteContent.contact.primaryEmail}`}>{siteContent.contact.primaryEmail}</a>
              <a href={`mailto:${siteContent.contact.secondaryEmail}`}>{siteContent.contact.secondaryEmail}</a>
              <span>{siteContent.contact.phone}</span>
            </div>
          </div>
        </div>

        <div className="site-footer-meta">
          <p>© 2026 {siteContent.brand.name}. All rights reserved.</p>
          <p>{siteContent.brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-page">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
