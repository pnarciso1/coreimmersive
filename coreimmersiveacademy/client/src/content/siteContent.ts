import creativeTechStudentsVideo from "@sitePublic/Images/Videos/CREATIVE_TECH_STUDENTS.mp4";
import creativeChaosVideo from "@sitePublic/Images/Videos/Creative_Chaos.mp4";
import digitalDivideVideo from "@sitePublic/Images/Videos/Digital_Divide.mp4";
import founderVideo from "@sitePublic/Images/Videos/Founder.mp4";
import getInvolvedVideo from "@sitePublic/Images/Videos/getinvolved.mp4";
import partnerImpactVideo from "@sitePublic/Images/Videos/partner_impact.mp4";
import studentJourneyVideo from "@sitePublic/Images/Videos/Student_Journey.mp4";
import jamesPortrait from "@sitePublic/Images/James.jpeg";
import paoloPortrait from "@sitePublic/Images/Paolo.png";

export type MediaKind = "image" | "video";

export interface MediaContent {
  kind: MediaKind;
  src?: string;
  alt: string;
  label?: string;
  poster?: string;
  objectPosition?: string;
}

export interface ActionLink {
  href: string;
  label: string;
  variant: "primary" | "ghost" | "teal";
}

export interface InquiryOptionContent {
  id: "partner" | "support" | "community" | "mentor";
  title: string;
  description: string;
  accent: "gold" | "teal";
  eyebrow: string;
}

export const siteContent = {
  brand: {
    name: "Core Immersive",
    tagline: "Creative Technology for Social Impact",
  },
  navLinks: [
    { label: "Programs", href: "/programs" },
    { label: "Creator Lab", href: "/creator-lab" },
    { label: "Impact", href: "/impact" },
    { label: "Stories", href: "/stories" },
    { label: "About", href: "/about" },
  ],
  footer: {
    programs: [
      { label: "Core Immersive Academy", href: "/programs" },
      { label: "Creator Lab", href: "/creator-lab" },
      { label: "Community Innovation Labs", href: "/programs" },
      { label: "Workshops & Events", href: "/programs" },
    ],
    organization: [
      { label: "Impact & Partners", href: "/impact" },
      { label: "Stories", href: "/stories" },
      { label: "About", href: "/about" },
      { label: "Get Involved", href: "/get-involved" },
    ],
  },
  contact: {
    primaryEmail: "ContactUs@coreimmersive.com",
    secondaryEmail: "paolo@coreimmersive.com",
    phone: "704-277-7730",
  },
  people: {
    founder: {
      name: "Paolo Narciso",
      title: "Founder, Core Immersive",
      image: paoloPortrait,
      linkedin: "https://www.linkedin.com/in/paolonarciso/",
      bio: [
        "Core Immersive was founded by Paolo Narciso, an entrepreneur and educator whose work has focused on innovation, emerging technology, and expanding opportunity through education.",
        "His vision for Core Immersive is simple.",
        "When people are given the right tools and support, they can build remarkable things.",
      ],
      quote: "When people are given the right tools and support, they can build remarkable things.",
    },
    mentorSpotlight: {
      name: "Dr. James McCoy",
      title: "Mentor Spotlight",
      image: jamesPortrait,
      bio: "James brings deep expertise in AI, data, and public-interest technology. His mentorship reflects the bridge Core Immersive is building between lived experience, technical fluency, and the next generation of creators.",
    },
  },
  programs: [
    {
      title: "Core Immersive Academy",
      eyebrow: "Education Program",
      description:
        "A structured experience introducing students to creative technology through project-based learning, storytelling, and accessible mentorship.",
      bullets: [
        "Emerging technology exploration",
        "Mentorship and guided experimentation",
        "Hands-on project creation",
        "Confidence-building creative practice",
      ],
      href: "/programs",
      accent: "gold" as const,
    },
    {
      title: "Creator Lab",
      eyebrow: "Flagship Program",
      description:
        "The signature Core Immersive experience where students create original work using generative AI, immersive media, and digital storytelling tools.",
      bullets: [
        "AI-assisted short films",
        "Interactive media concepts",
        "Creative applications and prototypes",
        "Portfolio-ready project outputs",
      ],
      href: "/creator-lab",
      accent: "teal" as const,
    },
    {
      title: "Community Innovation Labs",
      eyebrow: "Community Program",
      description:
        "Programs designed with schools, nonprofits, healthcare organizations, and local leaders to bring creative technology directly into communities.",
      bullets: [
        "Community-centered delivery",
        "Real-world challenge framing",
        "Flexible program formats",
        "Mission-aligned partnerships",
      ],
      href: "/programs",
      accent: "gold" as const,
    },
    {
      title: "Workshops & Events",
      eyebrow: "Short-Form Experience",
      description:
        "Fast-moving workshops and public events that introduce participants to storytelling, AI tools, and immersive creative practice.",
      bullets: [
        "Single-session workshops",
        "Multi-day intensives",
        "Conference and campus activations",
        "Portable creative tech experiences",
      ],
      href: "/programs",
      accent: "teal" as const,
    },
  ],
  inquiryOptions: [
    {
      id: "partner",
      title: "Partner with Core Immersive",
      description:
        "Bring creative technology programs to your school, university, or organization through a mission-aligned partnership.",
      accent: "gold",
      eyebrow: "Partnership",
    },
    {
      id: "support",
      title: "Support Our Programs",
      description:
        "Help expand access to creative technology through sponsorship, philanthropy, equipment support, or direct contributions.",
      accent: "teal",
      eyebrow: "Support",
    },
    {
      id: "community",
      title: "Bring a Program to Your Community",
      description:
        "Work with us to design a local experience for students, families, patients, artists, or community members.",
      accent: "gold",
      eyebrow: "Community",
    },
    {
      id: "mentor",
      title: "Volunteer or Mentor",
      description:
        "Join a network of practitioners, educators, and builders who want to help the next generation create with confidence.",
      accent: "teal",
      eyebrow: "Mentorship",
    },
  ] satisfies InquiryOptionContent[],
  pages: {
    home: {
      title: "The Future Should Be Built By Everyone",
      hero: {
        eyebrow: "Creative Technology for Social Impact",
        body:
          "Core Immersive is a nonprofit expanding access to creative technology so students, creators, and communities can use tools like artificial intelligence, immersive media, and digital storytelling to solve problems and shape the future.",
        actions: [
          { href: "/programs", label: "Explore Programs", variant: "primary" },
          { href: "/get-involved", label: "Partner With Us", variant: "ghost" },
        ] satisfies ActionLink[],
        media: {
          kind: "video",
          src: creativeTechStudentsVideo,
          alt: "Students working with creative technology tools in a cinematic studio environment.",
          label: "CREATIVE_TECH_STUDENTS",
          objectPosition: "center center",
        } satisfies MediaContent,
      },
      leadIn: [
        "Technology is often experienced as something created somewhere else by someone else.",
        "But when people gain access to powerful creative tools, something remarkable happens.",
        "Students become inventors. Artists become technologists. Communities become problem-solvers.",
        "Core Immersive exists to open that door.",
      ],
      problem: {
        eyebrow: "The Problem",
        title: "The Technology Gap",
        body: [
          "Artificial intelligence, immersive media, and emerging digital tools are reshaping the world.",
          "Yet access to these technologies remains uneven.",
          "Millions of students and communities never receive the opportunity to learn how these tools work or how they can be used creatively.",
          "Without access, participation becomes impossible.",
          "The result is a growing divide between those who create technology and those who simply consume it.",
        ],
        media: {
          kind: "video",
          src: digitalDivideVideo,
          alt: "A visual narrative of the digital divide and unequal technology access.",
          label: "DIGITAL_DIVIDE",
          objectPosition: "center center",
        } satisfies MediaContent,
      },
      opportunity: {
        eyebrow: "The Opportunity",
        title: "Unlocking Creative Agency",
        body: "Technology becomes transformative when people use it to create.",
        moments: [
          "A student generates their first AI-powered film.",
          "A young entrepreneur builds a prototype for a new solution.",
          "A community innovator designs technology that addresses local challenges.",
        ],
      },
      model: {
        eyebrow: "The Core Immersive Model",
        title: "Learn. Build. Launch. Repeat.",
        steps: [
          {
            number: "01",
            title: "Learn",
            description:
              "Participants explore emerging technologies such as artificial intelligence, immersive storytelling, digital media creation, and modern development tools.",
          },
          {
            number: "02",
            title: "Build",
            description:
              "Students and innovators transform ideas into real projects including films, digital experiences, applications, and prototypes.",
          },
          {
            number: "03",
            title: "Launch",
            description:
              "Projects move beyond the classroom and into the world as portfolios, startups, community initiatives, and creative works.",
          },
        ],
        note: "The goal is not simply technical literacy. The goal is creative confidence.",
      },
      impact: {
        eyebrow: "Impact",
        title: "Expanding Opportunity Through Technology",
        points: [
          "Creative confidence",
          "Real project portfolios",
          "New ways to express ideas",
          "The belief that they can build things that matter",
        ],
      },
      join: {
        eyebrow: "Join the Movement",
        title: "Help Build a More Creative Future",
        body: [
          "The next generation of creators is already here.",
          "They simply need the opportunity to begin.",
          "Core Immersive exists to provide that opportunity.",
        ],
        actions: [
          { href: "/get-involved", label: "Support Our Mission", variant: "primary" },
          { href: "/get-involved", label: "Partner With Us", variant: "ghost" },
          { href: "/programs", label: "Explore Programs", variant: "teal" },
        ] satisfies ActionLink[],
      },
    },
    programs: {
      title: "Programs at Core Immersive",
      intro:
        "Core Immersive programs explore emerging technologies through creativity, storytelling, and innovation. Participants do not simply learn about technology. They create with it.",
    },
    creatorLab: {
      title: "Creator Lab",
      subtitle: "Creative Technology for the Next Generation of Innovators",
      hero: {
        eyebrow: "Flagship Program",
        media: {
          kind: "video",
          src: creativeChaosVideo,
          alt: "Students experimenting with layered creative tools and fast-moving visual media.",
          label: "CREATIVE_CHAOS",
          objectPosition: "center center",
        } satisfies MediaContent,
      },
      intro: [
        "Creator Lab is Core Immersive's flagship learning experience where students explore emerging technologies through storytelling, creativity, and innovation.",
        "Participants use tools such as generative AI, immersive media platforms, and digital creation tools to design and produce original projects.",
        "The program emphasizes creative agency. Students are not just learning tools. They are discovering how to use technology to express ideas, communicate experiences, and build solutions.",
      ],
      projects: [
        "AI-assisted short films",
        "Digital storytelling experiences",
        "Interactive media",
        "Creative applications",
        "Technology-driven social impact ideas",
      ],
    },
    impact: {
      title: "Expanding Access to Creative Technology",
      media: {
        kind: "video",
        src: partnerImpactVideo,
        alt: "Partners and communities engaging with creative technology experiences.",
        label: "PARTNER_IMPACT",
        objectPosition: "center center",
      } satisfies MediaContent,
      challenge: [
        "Emerging technologies are shaping the future economy.",
        "Yet many students and communities lack access to the tools and learning experiences needed to participate.",
        "Without intervention, the gap between technology creators and technology consumers will continue to grow.",
      ],
      approach:
        "Core Immersive expands access to emerging technology through immersive, project-based learning. Participants explore tools such as artificial intelligence, immersive media, and digital storytelling while building projects that address real-world challenges.",
      partners: [
        "Schools and universities",
        "Foundations and philanthropic organizations",
        "Healthcare and community organizations",
        "Technology companies",
        "Innovation ecosystems",
      ],
      whySupport: [
        "Bring emerging technology experiences to underserved communities",
        "Support student creativity and entrepreneurship",
        "Enable new solutions to real-world challenges",
      ],
    },
    stories: {
      title: "Every Creator Has a Story",
      journeyTitle: "The Learner's Journey",
      hero: {
        eyebrow: "Student Journey",
        media: {
          kind: "video",
          src: studentJourneyVideo,
          alt: "A student journey montage showing curiosity, experimentation, and creative confidence.",
          label: "STUDENT_JOURNEY",
          objectPosition: "center center",
        } satisfies MediaContent,
      },
      beats: [
        "A student attends their first workshop.",
        "They experiment with an AI tool.",
        "They create their first digital project.",
        "Something changes.",
        "Technology no longer feels distant or inaccessible. It becomes a tool for creativity, a platform for self-expression, and a way to shape what comes next.",
        "A project becomes a portfolio.",
        "A curiosity becomes a career.",
        "A story becomes something that inspires others.",
      ],
    },
    about: {
      title: "About Core Immersive",
      media: {
        kind: "video",
        src: founderVideo,
        alt: "Founder-led creative technology storytelling and community-building in motion.",
        label: "FOUNDER",
        objectPosition: "center center",
      } satisfies MediaContent,
      mission: [
        "Core Immersive is a nonprofit dedicated to expanding access to creative technology.",
        "We believe emerging technologies like artificial intelligence, immersive media, and digital storytelling should be tools that empower people to express ideas and solve problems.",
        "Our programs help students, creators, and communities explore these technologies through hands-on creative experiences.",
      ],
      join: {
        eyebrow: "Join the Movement",
        title: "Help more people create with confidence.",
        body: [
          "Across classrooms, community spaces, and creative labs, we see the same moment again and again.",
          "Someone who once thought technology was out of reach realizes they can use it to build something of their own.",
          "A student creates their first digital story.",
          "An aspiring founder prototypes a new idea.",
          "A community member uses technology to solve a local challenge.",
          "Those moments are where confidence begins.",
          "Core Immersive is building a growing community of educators, creators, partners, and supporters who believe creative technology should be accessible to everyone.",
          "If you believe the future should be shaped by more voices, more ideas, and more creators, there is a place for you in this work.",
        ],
        action: { href: "/get-involved", label: "Get Involved", variant: "primary" } satisfies ActionLink,
      },
      values: [
        {
          title: "Creative Agency",
          description:
            "We believe everyone has the capacity to create. Our role is to provide the tools, support, and opportunity to do so.",
        },
        {
          title: "Equity in Access",
          description:
            "Emerging technology should not be reserved for the privileged few. We work to ensure access reaches those who need it most.",
        },
        {
          title: "Storytelling as Power",
          description:
            "Technology is most transformative when it amplifies human stories. We center narrative in everything we build.",
        },
        {
          title: "Innovation for Impact",
          description:
            "We measure success not by technical achievement, but by the real-world change our participants create.",
        },
      ],
    },
    getInvolved: {
      title: "Join the Creative Technology Movement",
      media: {
        kind: "video",
        src: getInvolvedVideo,
        alt: "Students, mentors, and partners gathering around creative technology opportunities.",
        label: "GET_INVOLVED",
        objectPosition: "center center",
      } satisfies MediaContent,
      intro:
        "There are many ways to support and participate in the Core Immersive mission. Find the path that's right for you.",
      responseTime: "Fill out the form below and we'll be in touch within 2–3 business days.",
    },
  },
} as const;

export type SiteContent = typeof siteContent;
