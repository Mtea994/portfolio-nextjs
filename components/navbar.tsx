"use client";

import React from "react";
import Link from "next/link";
import { Menu, Square } from "lucide-react";
import { NAVIGATION } from "@/app/config";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";
import { ContactForm } from "./contact-form";
import ModeToggle from "./mode-toggle";
import MyCommandDialog from "./my-command";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function NavBar() {
  const pathname = usePathname();
  return (
    <header className="h-16 w-full max-w-2xl mx-auto flex items-center gap-4 px-6 md:px-20 bg-background sticky top-0 z-50 ">
      <nav className="hidden flex-col md:flex md:flex-row md:items-center md:justify-between w-full h-full border-b">
        <TooltipProvider>
          <Tooltip>
            <TooltipContent className="z-90">
              <p>Imtinan Khurshid</p>
            </TooltipContent>
            <TooltipTrigger>
              <Link href="/" className="flex items-center gap-2 font-semibold">
                {/* <Square className="size-5 fill-foreground" /> */}
                <p className="font-bold py-1 px-2 border-2 border-black rounded-[6px] bg-white dark:bg-black dark:border-white">
                  IK
                </p>
                <p>Mtea994</p>
              </Link>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
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
              className="text-muted-foreground hover:text-foreground cursor:pointer"
            >
              Contact
            </p>
          </ContactForm>
          <div className="flex gap-1">
            <ModeToggle />
            <MyCommandDialog />
          </div>
        </div>
      </nav>
      <Sheet>
        <div className="w-full flex md:hidden justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            {/* <Square className="size-5 fill-foreground" /> */}
            <p className="font-bold py-1 px-2 border-2 border-black rounded-[6px] bg-white dark:bg-black dark:border-white">
              IK
            </p>
            <p>Mtea994</p>
          </Link>
          <div>
            <ModeToggle />
            <MyCommandDialog />
            <SheetTrigger className="ml-2" asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Navigation Menu</span>
              </Button>
            </SheetTrigger>
          </div>
        </div>
        <SheetContent side="right" className="p-6">
          <nav className="grid gap-6 text-lg font-medium">
            {NAVIGATION.map((item) => (
              <SheetClose asChild key={item.href}>
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
              </SheetClose>
            ))}
            <ContactForm>
              <p
                role="button"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </p>
            </ContactForm>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default NavBar;
