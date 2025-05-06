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

function FeaturedProjects() {
  return (
    <div className="flex flex-col w-full p-8 pb-8 sm:p-10 sm:pt-0 self-center">
      <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"></div> */}
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
                <div className="p-4">
                  <Link href={project.href}>
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
                      <Link href={project.href}>{project.title}</Link>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-start mt-4 p-5">
          <CarouselPrevious className="static relative top-auto left-auto transform-none m-0" />
          <CarouselNext className="static relative top-auto left-auto transform-none" />
        </div>
      </Carousel>
    </div>
  );
}

export default FeaturedProjects;
