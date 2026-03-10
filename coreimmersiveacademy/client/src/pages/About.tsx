import PageLayout, { ActionButton, MediaAsset, SectionTag, useReveal } from "@/components/PageLayout";
import { siteContent } from "@/content/siteContent";

export default function About() {
  const heroRef = useReveal();
  const missionRef = useReveal();
  const founderRef = useReveal();
  const valuesRef = useReveal();
  const joinRef = useReveal();

  return (
    <PageLayout>
      <section className="page-hero page-hero-soft page-hero-compact" ref={heroRef}>
        <div className="container page-hero-floating page-hero-copy-centered">
          <SectionTag>About Core Immersive</SectionTag>
          <h1 className="page-title reveal reveal-delay-1">{siteContent.pages.about.title}</h1>
          <p className="page-intro reveal reveal-delay-2">
            A nonprofit dedicated to expanding access to creative technology so more people can create, innovate, and shape the future.
          </p>
        </div>
      </section>

      <section className="about-media-band page-media-band-compact" data-about-media="band">
        <MediaAsset media={siteContent.pages.about.media} aspectRatio="21 / 8" className="about-media-frame" priority />
      </section>

      <section className="site-section site-section-deep" ref={missionRef}>
        <div className="container">
          <div className="section-grid">
            <div>
              <SectionTag>Mission</SectionTag>
              <span className="divider reveal reveal-delay-1" />
              <div className="prose-stack">
                {siteContent.pages.about.mission.map((paragraph, index) => (
                  <p key={paragraph} className={`reveal reveal-delay-${Math.min(index + 1, 4)}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="quote-block reveal reveal-delay-2">
              <p>{siteContent.people.founder.quote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-ink" ref={founderRef}>
        <div className="container">
          <div className="section-intro">
            <SectionTag>Founder</SectionTag>
            <h2 className="section-title reveal reveal-delay-1">Built around one founder and one clear vision.</h2>
          </div>
          <div className="about-founder-layout">
            <div className="about-founder-card reveal reveal-delay-1">
              <MediaAsset
                media={{
                  kind: "image",
                  src: siteContent.people.founder.image,
                  alt: siteContent.people.founder.name,
                  objectPosition: "center top",
                }}
                aspectRatio="4 / 5"
                className="about-founder-portrait"
              />
            </div>
            <div className="about-founder-copy reveal reveal-delay-2">
              <div className="person-card-copy about-founder-copy-inner">
                <SectionTag>Founder</SectionTag>
                <h2>{siteContent.people.founder.name}</h2>
                <p className="person-title">{siteContent.people.founder.title}</p>
                {siteContent.people.founder.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <a
                  className="about-founder-link"
                  href={siteContent.people.founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-deep" ref={valuesRef}>
        <div className="container">
          <div className="section-intro">
            <SectionTag>Values</SectionTag>
            <h2 className="section-title reveal reveal-delay-1">What we stand for</h2>
          </div>
          <div className="feature-grid feature-grid-2">
            {siteContent.pages.about.values.map((value, index) => (
              <div key={value.title} className={`feature-card reveal reveal-delay-${(index % 4) + 1}`}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section-callout" ref={joinRef} data-reveal-root="about-join">
        <div className="container">
          <div className="cta-band about-join-band">
            <div className="cta-copy about-join-copy">
              <SectionTag>{siteContent.pages.about.join.eyebrow}</SectionTag>
              <h2 className="section-title reveal reveal-delay-1">{siteContent.pages.about.join.title}</h2>
              <div className="prose-stack">
                {siteContent.pages.about.join.body.map((paragraph, index) => (
                  <p key={paragraph} className={`reveal reveal-delay-${Math.min(index + 2, 4)}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="cta-actions about-join-actions reveal reveal-delay-2">
                <ActionButton action={siteContent.pages.about.join.action} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
