import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Emanuel López",
  EMAIL: "emanuel.n.lopez@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
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
  DESCRIPTION: "A collection of my projects, with links to repositories.",
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
