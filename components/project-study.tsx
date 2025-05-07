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
import { CFPFELLOWSHIP, STARTUP } from "@/app/config";

function ProjectStudy() {
  const cfpFellow = CFPFELLOWSHIP;
  const startup = STARTUP;
  return (
    <div className="flex flex-col self-center w-full sm:pb-20 pt-10 sm:p-10 sm:pt-0">
      <h2 className="text-4xl font-bold">Featured Online</h2>
      <p className="text-muted-foreground mt-1 mb-4">
        I have been featured online in the following projects.
      </p>
      <div className="flex gap-8 flex-col">
        <Link href={cfpFellow.href}>
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
                  src={cfpFellow.image}
                />
              </div>
            </div>
            <div className="lg:p-4 w-full lg:border-l lg:flex items-end">
              <div>
                <CardHeader className="pt-0 pb-3">
                  <CardTitle>{cfpFellow.title}</CardTitle>
                  <CardDescription>{cfpFellow.description}</CardDescription>
                </CardHeader>
                <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
                  {cfpFellow.tags.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </div>
            </div>
          </Card>
        </Link>
        <Link href={startup.href}>
          <Card className="h-full group flex flex-col-reverse lg:flex-row justify-between">
            <div className="lg:p-4 w-full lg:border-r lg:flex items-end">
              <div>
                <CardHeader className="pt-0 pb-3">
                  <CardTitle>{startup.title}</CardTitle>
                  <CardDescription>{startup.description}</CardDescription>
                </CardHeader>
                <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
                  {startup.tags.map((tag) => (
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
                  src={startup.image}
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
