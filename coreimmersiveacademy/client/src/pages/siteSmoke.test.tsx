import { renderToStaticMarkup } from "react-dom/server";
import { beforeAll, describe, expect, it, vi } from "vitest";

import About from "./About";
import CreatorLab from "./CreatorLab";
import GetInvolved from "./GetInvolved";
import Home from "./Home";
import Impact from "./Impact";
import Programs from "./Programs";
import Stories from "./Stories";

describe("site pages", () => {
  beforeAll(() => {
    vi.stubGlobal("location", new URL("https://coreimmersive.test/"));
  });

  it("render the approved redesign page titles", () => {
    const pages = [
      renderToStaticMarkup(<Home />),
      renderToStaticMarkup(<Programs />),
      renderToStaticMarkup(<CreatorLab />),
      renderToStaticMarkup(<Impact />),
      renderToStaticMarkup(<Stories />),
      renderToStaticMarkup(<About />),
      renderToStaticMarkup(<GetInvolved />),
    ].join("\n");

    expect(pages).toContain("The Future Should Be Built By Everyone");
    expect(pages).toContain("Programs at Core Immersive");
    expect(pages).toContain("Creator Lab");
    expect(pages).toContain("Expanding Access to Creative Technology");
    expect(pages).toContain("Every Creator Has a Story");
    expect(pages).toContain("About Core Immersive");
    expect(pages).toContain("Join the Creative Technology Movement");
  });

  it("renders the provided video assets into the redesigned pages", () => {
    expect(renderToStaticMarkup(<Home />)).toContain("CREATIVE_TECH_STUDENTS.mp4");
    expect(renderToStaticMarkup(<CreatorLab />)).toContain("Creative_Chaos.mp4");
    expect(renderToStaticMarkup(<Impact />)).toContain("partner_impact.mp4");
    expect(renderToStaticMarkup(<About />)).toContain("Founder.mp4");
    expect(renderToStaticMarkup(<GetInvolved />)).toContain("getinvolved.mp4");
    expect(renderToStaticMarkup(<Stories />)).toContain("Student_Journey.mp4");
  });

  it("marks the home hero and supporting copy as reveal roots so first-screen content is not hidden", () => {
    const home = renderToStaticMarkup(<Home />);

    expect(home).toContain('data-reveal-root="hero"');
    expect(home).toContain('data-reveal-root="story-lead"');
  });

  it("renders creator lab with a dedicated full-width media band", () => {
    const creatorLab = renderToStaticMarkup(<CreatorLab />);

    expect(creatorLab).toContain('data-creator-media="band"');
  });

  it("renders stories with a dedicated full-width media band", () => {
    const stories = renderToStaticMarkup(<Stories />);

    expect(stories).toContain('data-stories-media="band"');
  });

  it("renders the stories learner journey heading and removes the orphaned what changes panel", () => {
    const stories = renderToStaticMarkup(<Stories />);

    expect(stories).toContain("The Learner&#x27;s Journey");
    expect(stories).toContain(
      "Technology no longer feels distant or inaccessible. It becomes a tool for creativity, a platform for self-expression, and a way to shape what comes next.",
    );
    expect(stories).not.toContain("What Changes");
    expect(stories).not.toContain("story-card");
  });

  it("centers hero copy consistently on creator lab, stories, and impact", () => {
    expect(renderToStaticMarkup(<CreatorLab />)).toContain("page-hero-copy-centered");
    expect(renderToStaticMarkup(<Stories />)).toContain("page-hero-copy-centered");
    expect(renderToStaticMarkup(<Impact />)).toContain("page-hero-copy-centered");
  });

  it("uses the shared compact hero spacing on creator lab, stories, and impact", () => {
    expect(renderToStaticMarkup(<CreatorLab />)).toContain("page-hero-compact");
    expect(renderToStaticMarkup(<CreatorLab />)).toContain("page-media-band-compact");
    expect(renderToStaticMarkup(<Stories />)).toContain("page-hero-compact");
    expect(renderToStaticMarkup(<Stories />)).toContain("page-media-band-compact");
    expect(renderToStaticMarkup(<Impact />)).toContain("page-hero-compact");
    expect(renderToStaticMarkup(<Impact />)).toContain("page-media-band-compact");
  });

  it("routes the specified program learn more actions to prefilled email drafts", () => {
    const programs = renderToStaticMarkup(<Programs />);

    expect(programs).toContain(
      "mailto:paolo@coreimmersive.com?subject=Interested%20in%20Learning%20More%20About%20Core%20Immersive%20Academy",
    );
    expect(programs).toContain(
      "mailto:paolo@coreimmersive.com?subject=Interested%20in%20Learning%20More%20About%20Community%20Innovation%20Labs",
    );
    expect(programs).toContain(
      "mailto:paolo@coreimmersive.com?subject=Interested%20in%20Learning%20More%20About%20Workshops%20%26%20Events",
    );
    expect(programs).toContain('href="/creator-lab"');
  });

  it("renders get involved with a dedicated full-width media band and no mentor note", () => {
    const getInvolved = renderToStaticMarkup(<GetInvolved />);

    expect(getInvolved).toContain('data-get-involved-media="band"');
    expect(getInvolved).toContain("page-hero-copy-centered");
    expect(getInvolved).toContain("page-hero-compact");
    expect(getInvolved).toContain("page-media-band-compact");
    expect(getInvolved).not.toContain("Dr. James McCoy");
    expect(getInvolved).not.toContain("mentor-note");
  });

  it("renders about with a full-width media band and founder-only profile", () => {
    const about = renderToStaticMarkup(<About />);

    expect(about).toContain('data-about-media="band"');
    expect(about).toContain("about-founder-layout");
    expect(about).toContain("https://www.linkedin.com/in/paolonarciso/");
    expect(about).not.toContain("James.jpeg");
  });

  it("renders the about join section with visible copy and a single get involved action", () => {
    const about = renderToStaticMarkup(<About />);

    expect(about).toContain('data-reveal-root="about-join"');
    expect(about).toContain("about-join-band");
    expect(about).toContain("Across classrooms, community spaces, and creative labs, we see the same moment again and again.");
    expect(about).toContain("If you believe the future should be shaped by more voices, more ideas, and more creators, there is a place for you in this work.");
    expect(about).toContain("Get Involved");
    expect(about).not.toContain("Explore Programs");
    expect(about.indexOf("If you believe the future should be shaped by more voices, more ideas, and more creators, there is a place for you in this work.")).toBeLessThan(
      about.indexOf("about-join-actions"),
    );
  });
});
