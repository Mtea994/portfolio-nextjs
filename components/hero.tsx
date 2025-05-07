import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import ModelViewer from "./model-viewer";
import { ContactForm } from "./contact-form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";
const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

function Hero() {
  return (
    <div className="flex flex-col self-center text-center justify-center mx-auto items-center w-full  p-8 pb-20 sm:pt-0 ">
      <ModelViewer />
      <ContactForm>
        <div className="inline-flex items-center w-[200px] rounded-lg border px-3 py-1 text-sm font-medium mb-4">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
          </span>
          <span className="sm:hidden">Available for hire</span>
          <span className="hidden sm:inline font-mono">
            Available for work!
          </span>
        </div>
      </ContactForm>
      <h1
        className={cn(
          "max-w-4xl text-4xl font-extrabold md:text-5xl lg:text-6xl",
          font.className
        )}
      >
        Hi i&apos;am a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-300">
          Full Stack
        </span>{" "}
        developer creating modern web apps.
      </h1>
      <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
        A full stack developer based in Pakistan. I&apos;m passionate about
        building modern web applications using Next.js, React, and Tailwind CSS.
      </p>
      <Link
        href="/Senior-frontend-dev.pdf"
        target="_blank"
        className="mt-8 bg-gradient-to-r from-rose-700 to-rose-500 font-semibold font-mono px-4 py-2 rounded-full flex items-center justify-center gap-1.5 text-white"
      >
        <DownloadIcon className="size-5" />
        Download Resume
      </Link>
    </div>
  );
}

export default Hero;
