import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

function About() {
  return (
    <main
      className={cn(
        "flex flex-col w-full mx-auto max-w-2xl justify-center sm:items-start p-4 pb-20 sm:p-20",
        "sm:pt-4"
      )}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full space-y-3 py-4 sm:px-8">
          <div>
            <h2 className="text-4xl font-bold">About</h2>
            <p className="text-muted-foreground mt-1 mb-4">
              Some information about me.
            </p>
          </div>
          <p>
            My name is Imtinan Khurshid, I&apos;m a Full Stack Developer with
            over 5 years of hands-on experience designing and building scalable
            web applications using React.js and Next.js. From early projects
            converting Figma designs into responsive pages to leading the
            architecture of full‑scale SaaS dashboards, I&apos;ve honed a deep
            expertise in modern JavaScript, TypeScript, and server‑side
            rendering patterns. My focus is always on clean, maintainable code
            that stands up under heavy user traffic and evolving product
            requirements..
          </p>
          <p>
            My technical toolbox centers on React&apos;s component‑driven model
            and Next.js&apos;s hybrid rendering (SSR/SSG), complemented by
            robust state management with Redux (Saga/Toolkit/Thunk) and React
            Context API. I leverage Tailwind CSS and modular SCSS architectures
            to ensure consistency, while optimizing load performance through
            code‑splitting, lazy loading, and image tuning. Whether implementing
            GraphQL schemas or integrating REST APIs, I deliver data‑driven
            interfaces that feel immediate and seamless..
          </p>
          <p>
            Collaboration fuels my best work. I thrive in Agile teams—running
            stand‑ups, sprint planning, peer code reviews, and pair programming
            sessions—and I’ve mentored junior engineers on best practices in
            component design and test automation. I partner closely with product
            managers, UX designers, and backend engineers to translate specs
            into elegant solutions, balancing rapid iteration with architectural
            integrity.
          </p>

          <p>
            Beyond code, I&apos;m passionate about lifelong learning and the
            ever‑evolving frontend landscape and explore emerging patterns like
            React Server Components and AI‑driven interfaces. I&apos;m eager to
            bring this blend of technical excellence, leadership, and curiosity
            teams building the next generation of web experiences.
          </p>
          <p>
            you can check some of the work i have done in free time for my
            friends and Family{" "}
            <Link
              href="/projects"
              className="underline underline-offset-2 text-sm italic text-blue-500 cursor:pointer"
            >
              here
            </Link>{" "}
            or{" "}
            <Link
              href="/Senior-frontend-dev.pdf"
              target="_blank"
              className="underline underline-offset-2 text-sm italic text-blue-500 cursor:pointer"
            >
              Download my resume
            </Link>
            {"  "}
            to see my professional experience.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="p-4 border w-fit rounded-lg bg-gradient-to-b from-primary/10 from-60%">
            <Image
              src="/me.jpg"
              className="rounded-lg"
              width={2625}
              height={3500}
              alt="Miroslav Stejskal"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
