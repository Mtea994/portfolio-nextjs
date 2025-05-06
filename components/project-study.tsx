import React from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { PROJECT_STUDY, TV_MOMENT } from "@/app/config";

function ProjectStudy() {
  const project = PROJECT_STUDY;
  const tv = TV_MOMENT;
  return (
    <div className="flex flex-col self-center w-full p-8 pb-20 sm:p-10 sm:pt-0">
      <h2 className="text-4xl font-bold">Project study</h2>
      <p className="text-muted-foreground mt-1 mb-4">
        A deep dive into a recent project.
      </p>
      <div className="flex gap-8 flex-col">
        <Link href={project.href}>
          <Card className="h-full group flex flex-col lg:flex-row justify-between">
            <div className="p-4 w-full">
              <div className="overflow-hidden rounded-lg">
                <Image
                  priority
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src={project.image}
                />
              </div>
            </div>
            <div className="lg:p-4 w-full lg:border-l lg:flex items-end">
              <div>
                <CardHeader className="pt-0 pb-3">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
                  {project.tags.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </div>
            </div>
          </Card>
        </Link>
        <Link href={tv.href}>
          <Card className="h-full group flex flex-col-reverse lg:flex-row justify-between">
            <div className="lg:p-4 w-full lg:border-r lg:flex items-end">
              <div>
                <CardHeader className="pt-0 pb-3">
                  <CardTitle>{tv.title}</CardTitle>
                  <CardDescription>{tv.description}</CardDescription>
                </CardHeader>
                <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
                  {tv.tags.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </div>
            </div>
            <div className="p-4 w-full">
              <div className="overflow-hidden rounded-lg">
                <Image
                  priority
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src={tv.image}
                />
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default ProjectStudy;
