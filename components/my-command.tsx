import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Code, Command, Github, Link, Linkedin } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

function MyCommandDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant={"ghost"}
        aria-label="open command dialog"
        size={"icon"}
        onClick={() => setOpen((open) => !open)}
      >
        <Command className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or Search" />
        <CommandList>
          <CommandEmpty>No Results Found</CommandEmpty>
          <CommandGroup heading="General">
            <CommandItem onSelect={handleCopyLink}>
              <Link className="mr-2 h-4 w-4" />
              <span>Copy Link</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                window.open(
                  "https://github.com/Mtea994/portfolio-nextjs",
                  "_blank"
                )
              }
            >
              <Code className="mr-2 h-4 w-4" />
              <span>Source Code</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="social">
            <CommandItem
              onSelect={() =>
                window.open("https://github.com/Mtea994/", "_blank")
              }
            >
              <Github className="mr-2 h-4 w-4" />
              <span>Github</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                window.open("https://linkedin.com/in/Mtea994/", "_blank")
              }
            >
              <Linkedin className="mr-2 h-4 w-4" />
              <span>Linkedin</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default MyCommandDialog;
