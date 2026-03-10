import { describe, expect, it } from "vitest";

import { siteContent } from "./siteContent";

describe("siteContent", () => {
  it("defines the seven primary pages from the redesign brief", () => {
    expect(siteContent.navLinks.map((link) => link.href)).toEqual([
      "/programs",
      "/creator-lab",
      "/impact",
      "/stories",
      "/about",
    ]);

    expect(siteContent.pages.home.title).toBe("The Future Should Be Built By Everyone");
    expect(siteContent.pages.programs.title).toBe("Programs at Core Immersive");
    expect(siteContent.pages.creatorLab.title).toBe("Creator Lab");
    expect(siteContent.pages.impact.title).toBe("Expanding Access to Creative Technology");
    expect(siteContent.pages.stories.title).toBe("Every Creator Has a Story");
    expect(siteContent.pages.about.title).toBe("About Core Immersive");
    expect(siteContent.pages.getInvolved.title).toBe("Join the Creative Technology Movement");
  });

  it("assigns the provided videos to the sections they were planned for", () => {
    expect(siteContent.pages.home.hero.media.src).toContain("CREATIVE_TECH_STUDENTS.mp4");
    expect(siteContent.pages.home.problem.media.src).toContain("Digital_Divide.mp4");
    expect(siteContent.pages.creatorLab.hero.media.src).toContain("Creative_Chaos.mp4");
    expect(siteContent.pages.impact.media.src).toContain("partner_impact.mp4");
    expect(siteContent.pages.about.media.src).toContain("Founder.mp4");
    expect(siteContent.pages.getInvolved.media.src).toContain("getinvolved.mp4");
    expect(siteContent.pages.stories.hero.media.src).toContain("Student_Journey.mp4");
  });

  it("preserves live contact and founder details from the existing site", () => {
    expect(siteContent.contact.primaryEmail).toBe("ContactUs@coreimmersive.com");
    expect(siteContent.contact.secondaryEmail).toBe("paolo@coreimmersive.com");
    expect(siteContent.contact.phone).toBe("704-277-7730");
    expect(siteContent.people.founder.name).toBe("Paolo Narciso");
    expect(siteContent.people.founder.linkedin).toBe("https://www.linkedin.com/in/paolonarciso/");
    expect(siteContent.people.founder.bio).toEqual([
      "Core Immersive was founded by Paolo Narciso, an entrepreneur and educator whose work has focused on innovation, emerging technology, and expanding opportunity through education.",
      "His vision for Core Immersive is simple.",
      "When people are given the right tools and support, they can build remarkable things.",
    ]);
    expect(siteContent.pages.about.join.title).toBe("Help more people create with confidence.");
    expect(siteContent.pages.about.join.body).toContain(
      "Across classrooms, community spaces, and creative labs, we see the same moment again and again.",
    );
    expect(siteContent.pages.about.join.action).toEqual({
      href: "/get-involved",
      label: "Get Involved",
      variant: "primary",
    });
    expect(siteContent.pages.stories.journeyTitle).toBe("The Learner's Journey");
    expect(siteContent.pages.stories.beats[4]).toBe(
      "Technology no longer feels distant or inaccessible. It becomes a tool for creativity, a platform for self-expression, and a way to shape what comes next.",
    );
  });
});
