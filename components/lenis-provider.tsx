"use client";
import { ReactLenis, useLenis } from "lenis/react";
import React from "react";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

function LenisProvider({ children, ...props }: LenisScrollProviderProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root {...props}>
      {children}
    </ReactLenis>
  );
}

export default LenisProvider;
