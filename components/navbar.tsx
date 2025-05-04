"use client";

import React from "react";
import Link from "next/link";
import { Square } from "lucide-react";
import { NAVIGATION } from "@/app/config";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";
import { ContactForm } from "./contact-form";
function NavBar() {
  const pathname = usePathname();
  return (
    <header className="h-16 w-full w-max-screen-xl mx-auto flex items-center gap-4 px-6 md:px-20 bg-background sticky top-0 z-50">
      <nav className="hidden flex-col md:flex md:flex-row md:items-center md:justify-between w-full h-full border-b">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Square className="size-5 fill-foreground" />
          <p>Mtea994</p>
        </Link>
        <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
          {NAVIGATION.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={cn(
                "hover:text-foreground",
                pathname == item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
          <ContactForm>
            <p
              role="button"
              className="text-muted-foreground hover:text-foreground"
            >
              Contact
            </p>
          </ContactForm>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
