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
            {OTHERS.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <p className="pt-8">&copy; {getYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
