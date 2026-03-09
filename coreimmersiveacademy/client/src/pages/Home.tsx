import PageLayout, { ActionButton, MediaAsset, SectionTag, useReveal } from "@/components/PageLayout";
import { siteContent } from "@/content/siteContent";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const heroRef = useReveal();
  const storyLeadRef = useReveal();
  const problemRef = useReveal();
  const opportunityRef = useReveal();
  const modelRef = useReveal();
  const programsRef = useReveal();
  const impactRef = useReveal();
  const joinRef = useReveal();
  const hero = siteContent.pages.home.hero;

  return (
    <PageLayout>
      <section className="hero-banner" ref={heroRef} data-reveal-root="hero">
        <MediaAsset media={hero.media} height="100%" className="hero-media" priority />
        <div className="hero-gradient" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-kicker reveal">{hero.eyebrow}</div>
            <h1 className="hero-title reveal reveal-delay-1">{siteContent.pages.home.title}</h1>
            <p className="hero-body reveal reveal-delay-2">{hero.body}</p>
            <div className="hero-actions reveal reveal-delay-3">
              {hero.actions.map((action) => (
                <ActionButton key={action.label} action={action} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-deep" ref={storyLeadRef} data-reveal-root="story-lead">
        <div className="container">
          <div className="story-lead">
            {siteContent.pages.home.leadIn.map((paragraph, index) => (
              <p key={paragraph} className={`story-lead-line reveal reveal-delay-${Math.min(index + 1, 4)}`}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="stat-ribbon reveal reveal-delay-4">
            <div className="stat-pill">
              <span className="stat-number">AI</span>
              <span className="stat-copy">Emerging tools become creative instruments.</span>
            </div>
            <div className="stat-pill">
              <span className="stat-number">Story</span>
              <span className="stat-copy">Narrative becomes the bridge to innovation.</span>
            </div>
            <div className="stat-pill">
              <span className="stat-number">Impact</span>
              <span className="stat-copy">Projects move from experimentation into the world.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-soft" ref={problemRef}>
        <div className="container">
          <div className="section-grid">
            <div>
              <SectionTag>{siteContent.pages.home.problem.eyebrow}</SectionTag>
              <span className="divider reveal reveal-delay-1" />
              <h2 className="section-title reveal reveal-delay-1">{siteContent.pages.home.problem.title}</h2>
              <div className="prose-stack">
                {siteContent.pages.home.problem.body.map((text, index) => (
                  <p key={text} className={`reveal reveal-delay-${Math.min(index + 2, 4)}`}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <MediaAsset media={siteContent.pages.home.problem.media} aspectRatio="4 / 5" />
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-deep" ref={opportunityRef}>
        <div className="container">
          <div className="section-grid section-grid-reverse">
            <div className="reveal">
              <div className="callout-panel">
                <SectionTag>{siteContent.pages.home.opportunity.eyebrow}</SectionTag>
                <h2 className="section-title reveal reveal-delay-1">{siteContent.pages.home.opportunity.title}</h2>
                <p className="reveal reveal-delay-2">{siteContent.pages.home.opportunity.body}</p>
                <div className="moment-list">
                  {siteContent.pages.home.opportunity.moments.map((moment, index) => (
                    <div key={moment} className={`moment-item reveal reveal-delay-${Math.min(index + 2, 4)}`}>
                      {moment}
                    </div>
                  ))}
                </div>
                <p className="highlight-line reveal reveal-delay-4">
                  The difference between consumer and creator is often just one opportunity.
                </p>
              </div>
            </div>
            <div className="mosaic-panel reveal reveal-delay-2">
              <div className="mosaic-block">
                <span className="mosaic-kicker">Workshop</span>
                <h3>AI Creation</h3>
              </div>
              <div className="mosaic-block">
                <span className="mosaic-kicker">Prototype</span>
                <h3>Digital Storytelling</h3>
              </div>
              <div className="mosaic-block mosaic-block-wide">
                <span className="mosaic-kicker">Community</span>
                <h3>Creative solutions for local challenges</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-ink" ref={modelRef}>
        <div className="container">
          <div className="section-center">
            <SectionTag>{siteContent.pages.home.model.eyebrow}</SectionTag>
            <h2 className="section-title reveal reveal-delay-1">{siteContent.pages.home.model.title}</h2>
          </div>

          <div className="feature-grid feature-grid-3">
            {siteContent.pages.home.model.steps.map((step, index) => (
              <div key={step.title} className={`feature-card reveal reveal-delay-${index + 1}`}>
                <div className="feature-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className="quote-block reveal reveal-delay-4">
            <p>{siteContent.pages.home.model.note}</p>
          </div>
        </div>
      </section>

      <section className="site-section site-section-deep" ref={programsRef}>
        <div className="container">
          <div className="section-intro">
            <SectionTag>Programs</SectionTag>
            <h2 className="section-title reveal reveal-delay-1">Creative Technology Programs</h2>
            <p className="reveal reveal-delay-2">
              Core Immersive programs help participants move from curiosity to creation. Programs emphasize hands-on exploration, storytelling, and real-world innovation.
            </p>
          </div>

          <div className="feature-grid feature-grid-2">
            {siteContent.programs.map((program, index) => (
              <Link key={program.title} href={program.href}>
                <div className={`feature-card feature-card-link reveal reveal-delay-${(index % 4) + 1}`}>
                  <span className={`accent-pill accent-pill-${program.accent}`}>{program.eyebrow}</span>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div className="inline-link">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section-ink" ref={impactRef}>
        <div className="container">
          <div className="section-grid">
            <div>
              <SectionTag>{siteContent.pages.home.impact.eyebrow}</SectionTag>
              <span className="divider reveal reveal-delay-1" />
              <h2 className="section-title reveal reveal-delay-1">{siteContent.pages.home.impact.title}</h2>
              <p className="reveal reveal-delay-2">
                Core Immersive works with schools, universities, community organizations, and mission-driven institutions to bring emerging technology experiences to new audiences.
              </p>
              <div className="bullet-list">
                {siteContent.pages.home.impact.points.map((point, index) => (
                  <div key={point} className={`bullet-item reveal reveal-delay-${Math.min(index + 2, 4)}`}>
                    {point}
                  </div>
                ))}
              </div>
              <Link href="/impact">
                <span className="btn-teal reveal reveal-delay-4">
                  See Our Impact <ArrowRight size={14} />
                </span>
              </Link>
            </div>
            <div className="impact-panel reveal reveal-delay-2">
              <div className="impact-matrix">
                <div className="impact-cell">
                  <span>Schools</span>
                  <strong>Programs with local context</strong>
                </div>
                <div className="impact-cell">
                  <span>Creators</span>
                  <strong>Portfolios and creative confidence</strong>
                </div>
                <div className="impact-cell impact-cell-wide">
                  <span>Communities</span>
                  <strong>Technology as a tool for expression, entrepreneurship, and social impact.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section-callout" ref={joinRef}>
        <div className="container">
          <div className="cta-band">
            <div className="cta-copy">
              <SectionTag>{siteContent.pages.home.join.eyebrow}</SectionTag>
              <h2 className="section-title reveal reveal-delay-1">{siteContent.pages.home.join.title}</h2>
              <div className="prose-stack">
                {siteContent.pages.home.join.body.map((line, index) => (
                  <p key={line} className={`reveal reveal-delay-${Math.min(index + 2, 4)}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="cta-actions reveal reveal-delay-4">
              {siteContent.pages.home.join.actions.map((action) => (
                <ActionButton key={action.label} action={action} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
