import PageLayout, { ActionButton, MediaAsset, SectionTag, useReveal } from "@/components/PageLayout";
import { siteContent } from "@/content/siteContent";

export default function CreatorLab() {
  const heroRef = useReveal();
  const introRef = useReveal();
  const processRef = useReveal();
  const ctaRef = useReveal();

  return (
    <PageLayout>
      <section className="page-hero page-hero-soft page-hero-compact creator-lab-hero" ref={heroRef}>
        <div className="container page-hero-floating page-hero-copy-centered">
          <SectionTag>{siteContent.pages.creatorLab.hero.eyebrow}</SectionTag>
          <h1 className="page-title reveal reveal-delay-1">{siteContent.pages.creatorLab.title}</h1>
          <p className="page-subtitle reveal reveal-delay-2">{siteContent.pages.creatorLab.subtitle}</p>
          <div className="reveal reveal-delay-3">
            <ActionButton action={{ href: "/get-involved", label: "Apply to Creator Lab", variant: "primary" }} />
          </div>
        </div>
      </section>

      <section className="creator-lab-media-band page-media-band-compact" data-creator-media="band">
        <MediaAsset
          media={siteContent.pages.creatorLab.hero.media}
          aspectRatio="21 / 8"
          className="creator-lab-media-frame"
          priority
        />
      </section>

      <section className="site-section site-section-deep" ref={introRef}>
        <div className="container">
          <div className="section-grid">
            <div>
              <SectionTag>About the Program</SectionTag>
              <span className="divider reveal reveal-delay-1" />
              <div className="prose-stack">
                {siteContent.pages.creatorLab.intro.map((paragraph, index) => (
                  <p key={paragraph} className={`reveal reveal-delay-${Math.min(index + 1, 4)}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="callout-panel reveal reveal-delay-2">
              <SectionTag>Projects May Include</SectionTag>
              <div className="moment-list">
                {siteContent.pages.creatorLab.projects.map((project, index) => (
                  <div key={project} className={`moment-item reveal reveal-delay-${Math.min(index + 1, 4)}`}>
                    {project}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-ink" ref={processRef}>
        <div className="container">
          <div className="section-center">
            <SectionTag>How Creator Lab Works</SectionTag>
            <h2 className="section-title reveal reveal-delay-1">Imagine. Prototype. Produce. Share.</h2>
          </div>

          <div className="feature-grid feature-grid-2">
            {[
              {
                title: "Imagine",
                description: "Students identify a story, challenge, or idea they want to express through technology.",
              },
              {
                title: "Prototype",
                description: "Participants explore creative tools, test prompts, and develop visual and narrative concepts.",
              },
              {
                title: "Produce",
                description: "Teams build films, experiences, apps, or prototypes that translate experimentation into real work.",
              },
              {
                title: "Share",
                description: "Projects become portfolio pieces, conversations, and catalysts for future learning or community impact.",
              },
            ].map((step, index) => (
              <div key={step.title} className={`feature-card reveal reveal-delay-${(index % 4) + 1}`}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section-callout" ref={ctaRef}>
        <div className="container">
          <div className="cta-band">
            <div className="cta-copy">
              <SectionTag>Bring Creator Lab To Life</SectionTag>
              <h2 className="section-title reveal reveal-delay-1">Partner with us to make creative technology accessible.</h2>
              <p className="reveal reveal-delay-2">
                Creator Lab is designed to travel across classrooms, campuses, and communities. We work with organizations that want to give people a way into the future through making.
              </p>
            </div>
            <div className="cta-actions reveal reveal-delay-3">
              <ActionButton action={{ href: "/get-involved", label: "Get Involved", variant: "primary" }} />
              <ActionButton action={{ href: "/programs", label: "All Programs", variant: "ghost" }} />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
