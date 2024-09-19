import TourCover from "@/assets/projects/tour_guide/tour_cover.png";
import PersonalCover from "@/assets/projects/personal_site/personal_website.png";

export const projects = {
  travel_guide: {
    id: "project-1",
    title: "Custom Web Experience for Private Tour Guide Services",
    description:
      "Developed a sleek and user-friendly website for a private tour guide company, enhancing their online presence and streamlining booking and tour information for clients.",
    tools: [
      { title: "NextJs", id: "tool-1" },
      { title: "TypeScript", id: "tool-2" },
      { title: "Tailwind", id: "tool-3" },
    ],
    image: TourCover,
    coverAlt: "hero of the tour guide page",
  },
  personal_website: {
    id: "project-2",
    title: "Personal Portfolio Website",
    description:
      "Built a responsive portfolio website using React, Next.js, Tailwind CSS, and TypeScript",
    tools: [
      { title: "NextJs", id: "tool-1" },
      { title: "TypeScript", id: "tool-2" },
      { title: "Tailwind", id: "tool-3" },
    ],
    image: PersonalCover,
    coverAlt: "hero of my personal site",
  },
};
