import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Emanuel López",
  EMAIL: "&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#101;&#109;&#97;&#110;&#117;&#101;&#108;&#46;&#110;&#46;&#108;&#111;&#112;&#101;&#122;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Emanuel López",
  DESCRIPTION: "Hello. My name is Emanuel! I am a software developer based in Bahía Blanca, Argentina. This is my personal site, which contains some links and information on how to find me online.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Work experience",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "Twitter",
    HREF: "https://twitter.com/emanuelnlopez",
  },
  { 
    NAME: "GitHub",
    HREF: "https://github.com/emanuelnlopez"
  },
  { 
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/emanuelnlopez",
  }
];
