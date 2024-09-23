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
    overview:
      "I developed a responsive and user-friendly website for a private tour guide company to boost their online presence and provide clients with an intuitive way to book personalized tours. The website showcases essential tour information along with visually appealing images of destinations, creating an inviting experience for users. Central to the functionality is an email-based booking system, allowing users to reach out directly for inquiries or bookings.\n\nThe site is designed with a responsive layout, ensuring smooth browsing across both desktop and mobile devices. The navigation is straightforward and accessible, making it easy for potential customers to explore the available tour options and find relevant details. Instead of relying on an automated booking system, a custom email form was implemented to facilitate direct communication. This form collects necessary information such as preferred tour dates, group size, and any specific requests, enabling a more personalized approach to bookings.\n\nThe website was built using modern technologies like Next.js for server-side rendering and optimized performance, ensuring fast load times and SEO-friendly content. React was utilized to build the dynamic user interface, creating smooth, interactive experiences through modular components. Additionally, TypeScript was integrated to improve code quality and maintainability, providing static typing to catch errors during development.",
  },
  personal_website: {
    id: "project-2",
    title: "Personal Website",
    description:
      "Built a responsive portfolio website using React, Next.js, Tailwind CSS, and TypeScript",
    tools: [
      { title: "NextJs", id: "tool-1" },
      { title: "TypeScript", id: "tool-2" },
      { title: "Tailwind", id: "tool-3" },
    ],
    image: PersonalCover,
    coverAlt: "hero of my personal site",
    overview:
      "I designed and developed a responsive portfolio website using Next.js, TypeScript, and React. The site was built with a minimalist design, focusing on delivering a seamless user experience across all devices.\n\nLeveraging Next.js for server-side rendering and optimized performance, the site ensures fast load times and is highly SEO-friendly. The modular, component-based architecture of React powers the interactive features, offering smooth navigation and a dynamic feel. By using TypeScript, I ensured better code maintainability and reduced the likelihood of errors during development, making the codebase reliable.",
  },
};
