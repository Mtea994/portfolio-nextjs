import React from "react";
import { FOOTER_PAGES, SOCIALS, OTHERS } from "@/app/config";
import Link from "next/link";

function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-2xl px-6 mx-auto md:px-20 bg-background z-50">
      <div className="border-t w-full py-6">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-4 w-fit">
            {FOOTER_PAGES.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-fit">
            {SOCIALS.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-fit">
            <div className="inline-flex items-center rounded-lg border px-3 py-1 text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
              </span>
              <Link
                href={OTHERS[0].href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sm:hidden">Available for hire</span>
              </Link>
              <Link
                href={OTHERS[0].href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="hidden sm:inline font-mono">
                  Available for work!
                </span>
              </Link>
            </div>
          </div>
        </div>
        <p className="pt-8">&copy; {getYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
