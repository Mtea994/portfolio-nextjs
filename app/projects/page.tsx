import ProjectStudy from "@/components/project-study";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

function ProjectsPage() {
  return (
    <>
      <ProjectStudy />
      <ProjectsPage />
    </>
  );
}

export default ProjectsPage;
