import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECTS } from "@/app/config";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import GithubLink from "./github-link";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

function FeaturedProjects() {
  return (
    <div className="flex flex-col w-full p-8 pb-8 sm:p-10 sm:pt-0 self-center">
      <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
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
      <Carousel
        opts={{
          dragFree: true,
        }}
      >
        <CarouselContent>
          {PROJECTS.map((project) => (
            <CarouselItem
              key={project.title}
              className="md:basis-1/2 lg:basis-1/3 "
            >
              <Card className="h-full group" key={project.title}>
                <div className="p-2">
                  <Link href={project.href || "#"}>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        alt="Image"
                        className="group-hover:scale-105 transition-all"
                        width={1280}
                        height={832}
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
                  {/* <CardDescription>{project.description}</CardDescription> */}
                </CardHeader>
                <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
                  {project.tags.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex justify-start relative top-0 left-0 w-full h-full gap-4 p-4 mt-5">
            <CarouselPrevious className="!relative top-auto left-auto !transform-none !-translate-y-0" />
            <CarouselNext className="!relative !-translate-y-0 !-right-0" />
          </div>
          <div>
            <Link
              href={"/projects"}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  className: "mt-6",
                }),
                "rounded-[8px]"
              )}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default FeaturedProjects;
