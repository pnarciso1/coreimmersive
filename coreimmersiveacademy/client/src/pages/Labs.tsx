import PageLayout, { ActionButton, SectionTag, useReveal } from "@/components/PageLayout";
import { siteContent } from "@/content/siteContent";
import { ArrowRight } from "lucide-react";

function LabsEmailFallback() {
  return (
    <div className="labs-email-fallback">
      <span>If your email app doesn't open automatically, email us directly:</span>
      <a href={`mailto:${siteContent.contact.primaryEmail}`}>{siteContent.contact.primaryEmail}</a>
    </div>
  );
}

export default function Labs() {
  const heroRef = useReveal();
  const purposeRef = useReveal();
  const buildRef = useReveal();
  const aiRef = useReveal();
  const advisoryRef = useReveal();
  const statsRef = useReveal();
  const supportRef = useReveal();
  const ctaRef = useReveal();

  const labs = siteContent.pages.labs;

  return (
    <PageLayout>
      <section className="labs-office-hours">
        <div className="container">
          <div className="labs-office-hours-band reveal visible">
            <span>{labs.officeHours.copy}</span>
            <a href={labs.officeHours.href} className="inline-link">
              {labs.officeHours.label} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="page-hero page-hero-soft page-hero-compact" ref={heroRef}>
        <div className="container page-hero-floating page-hero-copy-centered">
          <SectionTag>{labs.eyebrow}</SectionTag>
          <h1 className="page-title reveal reveal-delay-1">{labs.title}</h1>
          <p className="page-subtitle reveal reveal-delay-2">{labs.subtitle}</p>
          <p className="page-intro reveal reveal-delay-3">{labs.intro}</p>
          <div className="reveal reveal-delay-4">
            <ActionButton action={labs.primaryAction} />
          </div>
          <div className="reveal reveal-delay-4">
            <LabsEmailFallback />
          </div>
        </div>
      </section>

      <section className="site-section site-section-deep" ref={purposeRef}>
        <div className="container">
          <div className="section-center">
            <SectionTag>{labs.purpose.title}</SectionTag>
            <h2 className="section-title reveal reveal-delay-1">{labs.purpose.statement}</h2>
          </div>

          <div className="feature-grid feature-grid-3">
            {labs.purpose.pillars.map((pillar, index) => (
              <div key={pillar.title} className={`feature-card reveal reveal-delay-${(index % 4) + 1}`}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {labs.sections.map((section, index) => {
        const sectionRef = index === 0 ? buildRef : index === 1 ? aiRef : advisoryRef;
        const gridClassName = section.offerings.length === 4 ? "feature-grid-2" : "feature-grid-3";

        return (
          <section
            key={section.number}
            className={index % 2 === 1 ? "site-section site-section-ink" : "site-section site-section-soft"}
            ref={sectionRef}
          >
            <div className="container">
              <div className="section-intro">
                <SectionTag>
                  {section.number} · {section.title}
                </SectionTag>
                <p className="page-intro reveal reveal-delay-1">{section.intro}</p>
              </div>

              <div className={`feature-grid ${gridClassName}`}>
                {section.offerings.map((offering, offeringIndex) => (
                  <div key={offering.title} className={`feature-card reveal reveal-delay-${(offeringIndex % 4) + 1}`}>
                    <h3>{offering.title}</h3>
                    <p>{offering.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="site-section site-section-deep" ref={statsRef}>
        <div className="container">
          <div className="section-center">
            <SectionTag>By the Numbers</SectionTag>
            <h2 className="section-title reveal reveal-delay-1">
              Work shaped through long-term partnerships and practical outcomes.
            </h2>
          </div>

          <div className="stat-ribbon labs-stat-ribbon">
            {labs.stats.map((stat, index) => (
              <div key={stat.label} className={`stat-pill reveal reveal-delay-${(index % 4) + 1}`}>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-copy">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section-callout" ref={supportRef}>
        <div className="container">
          <div className="cta-band">
            <div className="cta-copy">
              <SectionTag>{labs.academySupport.title}</SectionTag>
              <h2 className="section-title reveal reveal-delay-1">Every Labs engagement invests back into creative learning.</h2>
              <p className="reveal reveal-delay-2">{labs.academySupport.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-ink" ref={ctaRef}>
        <div className="container">
          <div className="cta-band">
            <div className="cta-copy">
              <SectionTag>Start Here</SectionTag>
              <h2 className="section-title reveal reveal-delay-1">{labs.closing.title}</h2>
              <p className="reveal reveal-delay-2">{labs.closing.body}</p>
            </div>
            <div className="cta-actions reveal reveal-delay-3">
              <ActionButton action={labs.closing.action} />
              <LabsEmailFallback />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
