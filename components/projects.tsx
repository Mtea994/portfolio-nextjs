import React from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { PROJECTS } from "@/app/config";
import GithubLink from "./github-link";

function Projects() {
  return (
    <div className="flex flex-col gap-0 justify-center w-full max-w-2xl mx-auto p-8 pb-20 sm:p-10 sm:pt-0">
      <h2 className="text-4xl font-bold">Projects</h2>
      <p className="text-muted-foreground mt-1 mb-4">
        Here are some of my projects i have done in free time or for my friends
        and family. <br />
        to see my professional experience{" "}
        <Link
          href="/Senior-frontend-dev.pdf"
          target="_blank"
          className="underline underline-offset-2 text-sm italic text-blue-500 cursor:pointer"
        >
          Download my resume
        </Link>
        {"  "}.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <Card className="h-full group" key={project.title}>
            <div className="p-4">
              <Link href={project.href || "#"}>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    alt="Image"
                    className="group-hover:scale-105 transition-all"
                    width={
                      project.image?.toString().includes("full-stack")
                        ? 3200
                        : 1280
                    }
                    height={
                      project.image?.toString().includes("full-stack")
                        ? 2400
                        : 832
                    }
                    quality={100}
                    src={project.image}
                  />
                </div>
              </Link>
            </div>
            <CardHeader className="pt-0 pb-3">
              <CardTitle>
                <div className="flex gap-2 items-center">
                  <Link href={project.href || "#"}>{project.title}</Link>
                  {project.github && <GithubLink link={project.github} />}
                </div>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              {project.tags.map((tag) => (
                <Badge variant="secondary" key={tag}>
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
