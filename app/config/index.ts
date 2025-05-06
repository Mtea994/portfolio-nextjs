type Project = {
  title: string;
  description: string;
  href: string;
  github?: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export const NAVIGATION = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
  //contact is included in the navigation by contact-form.tsx
];

export const FOOTER_PAGES = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
];

export const SOCIALS = [
  {
    title: "Github",
    href: "https://github.com/Mtea994",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/mtea994/",
  },
  {
    title: "X",
    href: "https://twitter.com/mtea994",
  },
];

export const OTHERS = [
  {
    title: "Hire me!",
    href: "https://www.upwork.com/freelancers/~016e44591197e109d6",
  },
];

export const TECH_STACK = [
  {
    title: "React",
    href: "https://reactjs.org",
  },
  {
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    title: "JavaScript",
    href: "https://mdn.digital/",
  },
  {
    title: "HTML",
    href: "https://www.mdn.digital/",
  },
  {
    title: "CSS",
    href: "https://www.mdn.digital/",
  },
  {
    title: "Material UI",
    href: "https://tailwindcss.com",
  },
  {
    title: "Sass",
    href: "https://sass-lang.com",
  },
  {
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    title: "Gatsby",
    href: "https://www.prisma.io",
  },
  {
    title: "NextAuth.js",
    href: "https://next-auth.js.org",
  },

  {
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    title: "Figma",
    href: "https://figma.com",
  },
  {
    title: "OOP",
    // href: "https://www.mysql.com",
  },

  {
    title: "antd",
    href: "https://ant.design",
  },
  {
    title: "gsap",
    href: "https://greensock.com/gsap",
  },
  {
    title: "three.js",
    href: "https://threejs.org",
  },
  {
    title: "charts.js",
    href: "https://www.chartjs.org",
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    title: "Framer Motion",
    href: "https://www.framer.com/motion",
  },
  {
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    title: "Wordpress",
    href: "https://wordpress.org",
  },
  {
    title: "shadcn/ui",
    href: "https://ui.shadcn.com",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Next js Dashboard",
    description:
      "A simple dashboard Build with Next.js 15, Tailwind CSS and Next Auth.",
    href: "https://cvzdarma.cz",
    image: "/projects/cvzdarma-project.png",
    tags: ["Next.js 15", "Tailwind CSS", "Neo", "Next Auth", "Server actions"],
    featured: true,
  },
  {
    title: "Game Play store",
    description:
      "A simple game store build with React.js, Tailwind CSS and Firebase.",
    href: "https://list.swajp.me",
    github: "https://github.com/swajp/list-swajp.me",
    image: "/projects/list-project.png",
    tags: [
      "React.js 14",
      "Tailwind CSS",
      "Firebase",
      "Firebase Auth",
      "React Router",
      "React Query",
    ],
    featured: true,
  },
  {
    title: "Mehreen jugni fashion store",
    description:
      "Ecommerce store i build for my friend using wordpress and woocommerce",
    href: "https://mehreenjugni.com",
    // github: "https://github.com/swajp/devkoutek.cz",
    image: "/projects/devkoutek-project.png",
    tags: ["Wordpress", "Woocommerce", "Elementor"],
  },
  {
    title: "Skywayjobs - Job board",
    description:
      "A job board and blog build with Wordpress and woocommerce. I build it for my friend.",
    href: "https://skywayjobs.com",
    // github: "https://github.com/swajp/casecobra",
    image: "/projects/casecobra-project.png",
    tags: ["Wordpress", "Woocommerce", "Elementor"],
  },
  {
    title: "Khalily aesthetics - Appointment booking for a clinic",
    description:
      "A booking system for a clinic build with Wordpress and woocommerce",
    href: "https://khalilyaesthetics.com/",
    image: "/projects/drie-project.png",
    tags: ["Wordpress", "Woocommerce", "Elementor", "crocoblock", "jetplugin"],
  },
  {
    title: "Abasyn international school",
    description: "Landing page for a school ",
    href: "https://aisp.edu.pk",
    image: "/projects/yogaboskovice-project.png",
    tags: ["Wordpress", "Elementor"],
  },
  {
    title: "aitdb - job",
    description: "freelance project for a company",
    href: "aitdb.com",
    github: "https://github.com/swajp/mujqrkod",
    image: "/projects/mujqrkod-project.png",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
  },
];

export const PROJECT_STUDY = {
  title: "uzx-elektro / uzx-security",
  description:
    "A complete redesign of the company's website. Design was created in Figma. The website is built with Next.js and Tailwind CSS. For components, I used shadcn/ui. The company is focused on Loxone technology and JABLOTRON security.",
  href: "/uzx",
  image: "/projects/uzx-mix.png",
  tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
};

export const TV_MOMENT = {
  title: "BlockSafe - A startup Based on a project from the university",
  description:
    "Me and my friends created blockchain based project for authenticating documents on bitcoin blockchain for our final year project during our bachelors in Computer systems engineering. later on it was selected for incubation at durshal incubation center, it was among only five startups selected for incbation.",
  href: "https://durshal.kpitb.gov.pk/startup/blocksafepk",
  image: "/projects/chytry-zahon.png",
  tags: ["blockchain", "bitcoin", "web3", "MERN Stack"],
};
