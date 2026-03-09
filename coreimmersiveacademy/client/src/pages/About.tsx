import PageLayout, { ActionButton, MediaAsset, SectionTag, useReveal } from "@/components/PageLayout";
import { siteContent } from "@/content/siteContent";

export default function About() {
  const missionRef = useReveal();
  const peopleRef = useReveal();
  const valuesRef = useReveal();

  return (
    <PageLayout>
      <section className="page-hero page-hero-soft">
        <div className="container">
          <SectionTag>About Core Immersive</SectionTag>
          <div className="page-hero-grid">
            <div>
              <h1 className="page-title reveal reveal-delay-1">{siteContent.pages.about.title}</h1>
              <p className="page-intro reveal reveal-delay-2">
                A nonprofit dedicated to expanding access to creative technology so more people can create, innovate, and shape the future.
              </p>
            </div>
            <div className="reveal reveal-delay-2">
              <MediaAsset
                media={{
                  kind: "image",
                  src: siteContent.people.founder.image,
                  alt: siteContent.people.founder.name,
                  label: "FOUNDER_STORY",
                  objectPosition: "center top",
                }}
                aspectRatio="5 / 4"
              />
            </div>
          </div>
        </div>
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

      <section className="site-section site-section-ink" ref={peopleRef}>
        <div className="container">
          <div className="feature-grid feature-grid-2">
            <div className="person-card reveal reveal-delay-1">
              <MediaAsset
                media={{
                  kind: "image",
                  src: siteContent.people.founder.image,
                  alt: siteContent.people.founder.name,
                  objectPosition: "center top",
                }}
                aspectRatio="4 / 5"
              />
              <div className="person-card-copy">
                <SectionTag>Founder</SectionTag>
                <h2>{siteContent.people.founder.name}</h2>
                <p className="person-title">{siteContent.people.founder.title}</p>
                {siteContent.people.founder.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="person-card reveal reveal-delay-2">
              <MediaAsset
                media={{
                  kind: "image",
                  src: siteContent.people.mentorSpotlight.image,
                  alt: siteContent.people.mentorSpotlight.name,
                  objectPosition: "center top",
                }}
                aspectRatio="4 / 5"
              />
              <div className="person-card-copy">
                <SectionTag>{siteContent.people.mentorSpotlight.title}</SectionTag>
                <h2>{siteContent.people.mentorSpotlight.name}</h2>
                <p>{siteContent.people.mentorSpotlight.bio}</p>
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

      <section className="site-section site-section-callout">
        <div className="container">
          <div className="cta-band">
            <div className="cta-copy">
              <SectionTag>Join the Movement</SectionTag>
              <h2 className="section-title reveal reveal-delay-1">Help more people create with confidence.</h2>
            </div>
            <div className="cta-actions reveal reveal-delay-2">
              <ActionButton action={{ href: "/get-involved", label: "Get Involved", variant: "primary" }} />
              <ActionButton action={{ href: "/programs", label: "Explore Programs", variant: "ghost" }} />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
