import PageLayout, { ActionButton, MediaAsset, SectionTag, useReveal } from "@/components/PageLayout";
import { siteContent } from "@/content/siteContent";

export default function Impact() {
  const heroRef = useReveal();
  const challengeRef = useReveal();
  const partnersRef = useReveal();
  const supportRef = useReveal();

  return (
    <PageLayout>
      <section className="page-hero page-hero-soft page-hero-compact impact-hero" ref={heroRef}>
        <div className="container page-hero-floating page-hero-copy-centered">
          <SectionTag>Impact & Partners</SectionTag>
          <h1 className="page-title reveal reveal-delay-1">{siteContent.pages.impact.title}</h1>
        </div>
      </section>

      <section className="impact-media-band page-media-band-compact" data-impact-media="band">
        <MediaAsset
          media={siteContent.pages.impact.media}
          aspectRatio="21 / 8"
          className="impact-media-frame"
          priority
        />
      </section>

      <section className="site-section site-section-deep" ref={challengeRef}>
        <div className="container">
          <div className="section-grid">
            <div>
              <SectionTag>The Challenge</SectionTag>
              <span className="divider reveal reveal-delay-1" />
              <div className="prose-stack">
                {siteContent.pages.impact.challenge.map((paragraph, index) => (
                  <p key={paragraph} className={`reveal reveal-delay-${Math.min(index + 1, 4)}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="callout-panel reveal reveal-delay-2">
              <SectionTag>Our Approach</SectionTag>
              <p>{siteContent.pages.impact.approach}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-ink" ref={partnersRef}>
        <div className="container">
          <div className="section-intro">
            <SectionTag>Partnership Opportunities</SectionTag>
            <h2 className="section-title reveal reveal-delay-1">Core Immersive collaborates with:</h2>
          </div>

          <div className="feature-grid feature-grid-3">
            {siteContent.pages.impact.partners.map((partner, index) => (
              <div key={partner} className={`feature-card reveal reveal-delay-${(index % 4) + 1}`}>
                <h3>{partner}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section-callout" ref={supportRef}>
        <div className="container">
          <div className="cta-band">
            <div className="cta-copy">
              <SectionTag>Why Support Core Immersive</SectionTag>
              <h2 className="section-title reveal reveal-delay-1">
                Supporting Core Immersive helps expand opportunity and empower new creators.
              </h2>
              <p className="reveal reveal-delay-2">Your partnership helps:</p>
              <div className="bullet-list">
                {siteContent.pages.impact.whySupport.map((item, index) => (
                  <div key={item} className={`bullet-item reveal reveal-delay-${Math.min(index + 2, 4)}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-actions reveal reveal-delay-4">
              <ActionButton action={{ href: "/get-involved", label: "Partner With Us", variant: "primary" }} />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
