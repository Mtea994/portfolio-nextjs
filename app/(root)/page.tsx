import AboutMe from "@/components/about-me";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import ProjectStudy from "@/components/project-study";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <main
      className={cn(
        "flex flex-col w-full mx-auto max-w-2xl justify-center sm:items-start p-4 pb-20 sm:p-20",
        "sm:pt-4"
      )}
    >
      <Hero />
      <ProjectStudy />
      <FeaturedProjects />
      <AboutMe />
      {/* <h1 className="font-black text-9xl self-center"> Imtinan khurshid</h1> */}
      {/* <h1 className="font-black text-9xl"> Imtinan khurshid</h1> */}
    </main>
  );
}
