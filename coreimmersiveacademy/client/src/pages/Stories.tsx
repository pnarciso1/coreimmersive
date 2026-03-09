import PageLayout, { ActionButton, MediaAsset, SectionTag, useReveal } from "@/components/PageLayout";
import { siteContent } from "@/content/siteContent";

export default function Stories() {
  const heroRef = useReveal();
  const journeyRef = useReveal();
  const ctaRef = useReveal();

  return (
    <PageLayout>
      <section className="page-hero page-hero-soft page-hero-compact stories-hero" ref={heroRef}>
        <div className="container page-hero-floating page-hero-copy-centered">
          <SectionTag>{siteContent.pages.stories.hero.eyebrow}</SectionTag>
          <h1 className="page-title reveal reveal-delay-1">{siteContent.pages.stories.title}</h1>
          <p className="page-intro reveal reveal-delay-2">
            At Core Immersive, the journey often begins with curiosity. What happens next changes everything.
          </p>
        </div>
      </section>

      <section className="stories-media-band page-media-band-compact" data-stories-media="band">
        <MediaAsset
          media={siteContent.pages.stories.hero.media}
          aspectRatio="21 / 8"
          className="stories-media-frame"
          priority
        />
      </section>

      <section className="site-section site-section-deep" ref={journeyRef}>
        <div className="container">
          <div className="section-grid">
            <div className="story-timeline">
              {siteContent.pages.stories.beats.map((beat, index) => (
                <div key={beat} className={`timeline-row reveal reveal-delay-${Math.min(index + 1, 4)}`}>
                  <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
                  <p className={index >= 5 ? "timeline-copy timeline-copy-accent" : "timeline-copy"}>{beat}</p>
                </div>
              ))}
            </div>

            <div className="story-card reveal reveal-delay-2">
              <SectionTag>What Changes</SectionTag>
              <p>
                Technology no longer feels distant or inaccessible. It becomes a tool for creativity, a platform for self-expression, and a way to shape what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-callout" ref={ctaRef}>
        <div className="container">
          <div className="cta-band">
            <div className="cta-copy">
              <SectionTag>Begin Your Story</SectionTag>
              <h2 className="section-title reveal reveal-delay-1">Every creator starts somewhere.</h2>
              <p className="reveal reveal-delay-2">
                Core Immersive exists to help people begin that journey and build something worth sharing.
              </p>
            </div>
            <div className="cta-actions reveal reveal-delay-3">
              <ActionButton action={{ href: "/programs", label: "Explore Programs", variant: "primary" }} />
              <ActionButton action={{ href: "/get-involved", label: "Get Involved", variant: "ghost" }} />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
