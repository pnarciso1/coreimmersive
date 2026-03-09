import PageLayout, { MediaAsset, SectionTag, useReveal } from "@/components/PageLayout";
import { siteContent } from "@/content/siteContent";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Programs() {
  const heroRef = useReveal();
  const programsRef = useReveal();

  return (
    <PageLayout>
      <section className="page-hero page-hero-soft" ref={heroRef}>
        <div className="container">
          <SectionTag>Programs</SectionTag>
          <div className="page-hero-grid">
            <div>
              <h1 className="page-title reveal reveal-delay-1">{siteContent.pages.programs.title}</h1>
              <p className="page-intro reveal reveal-delay-2">{siteContent.pages.programs.intro}</p>
            </div>
            <div className="reveal reveal-delay-2">
              <MediaAsset media={siteContent.pages.home.hero.media} aspectRatio="5 / 4" />
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-deep" ref={programsRef}>
        <div className="container">
          <div className="feature-grid feature-grid-2">
            {siteContent.programs.map((program, index) => (
              <div key={program.title} className={`program-slab reveal reveal-delay-${(index % 4) + 1}`}>
                <div className="program-slab-header">
                  <span className={`accent-pill accent-pill-${program.accent}`}>{program.eyebrow}</span>
                  <h2>{program.title}</h2>
                </div>
                <p>{program.description}</p>
                <div className="bullet-list bullet-list-tight">
                  {program.bullets.map((bullet) => (
                    <div key={bullet} className="bullet-item">
                      {bullet}
                    </div>
                  ))}
                </div>
                <Link href={program.href}>
                  <span className="inline-link">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
