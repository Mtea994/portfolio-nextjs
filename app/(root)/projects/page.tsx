import ProjectStudy from "@/components/project-study";
import Projects from "@/components/projects";
import { cn } from "@/lib/utils";
import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Projects",
// };

function ProjectsPage() {
  return (
    <main
      className={cn(
        "flex flex-col w-full mx-auto max-w-2xl justify-center sm:items-start p-8 pb-20 sm:p-20",
        "sm:pt-4"
      )}
    >
      <ProjectStudy />
      <Projects />
    </main>
  );
}

export default ProjectsPage;
