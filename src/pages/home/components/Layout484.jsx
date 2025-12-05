"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout484() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container max-w-xl">
        <p className="mb-3 font-semibold md:mb-4">Difference</p>
        <p className="text-5xl font-bold md:text-7xl lg:text-8xl">
          How we work differently. Our methods rest on listening first, then
          acting with intention.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          <Button title="Discover" variant="secondary">
            Discover
          </Button>
          <Button
            title="Learn"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Learn
          </Button>
        </div>
      </div>
    </section>
  );
}
