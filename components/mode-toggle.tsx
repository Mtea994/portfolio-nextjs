"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      aria-label={
        theme === "dark" ? "switch to ligh theme" : "switch to dark theme"
      }
      onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
    >
      {theme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem}" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem}" />
      )}
    </Button>
  );
}

export default ModeToggle;
