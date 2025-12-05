"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header111() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container flex max-h-[60rem] min-h-svh">
        <div className="py-16 md:py-24 lg:py-28">
          <div className="relative z-10 grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div className="flex flex-col">
              <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                Healing begins with connection and care
              </h1>
            </div>
            <div className="mx-[7.5%] flex flex-col justify-end">
              <p className="text-text-alternative md:text-md">
                We guide families through difficult transitions with compassion
                and expertise. Our approach honors what matters most—the bonds
                that sustain us.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Learn more">Learn more</Button>
                <Button title="Button" variant="secondary-alt">
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
