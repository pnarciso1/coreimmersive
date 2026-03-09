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
});
