"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog40() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Recent</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Latest from our practice
            </h2>
            <p className="md:text-md">
              Practical insights and observations from our work supporting
              families through complex transitions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-center justify-start border border-border-primary">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Coaching
                </p>
                <p className="inline text-sm font-semibold">7 min read</p>
              </div>
              <a className="mb-2" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Preparing for difficult family conversations
                </h2>
              </a>
              <p>
                How to approach sensitive discussions with clarity, compassion,
                and realistic expectations.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </div>
          <div className="flex size-full flex-col items-center justify-start border border-border-primary">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Visitation
                </p>
                <p className="inline text-sm font-semibold">6 min read</p>
              </div>
              <a className="mb-2" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  The first visit after separation
                </h2>
              </a>
              <p>
                What to expect, how to prepare, and why professional support
                makes a difference.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </div>
          <div className="flex size-full flex-col items-center justify-start border border-border-primary">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Legal matters
                </p>
                <p className="inline text-sm font-semibold">8 min read</p>
              </div>
              <a className="mb-2" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Understanding supervised visitation requirements
                </h2>
              </a>
              <p>
                A guide to what courts expect and how professional supervision
                protects all involved.
              </p>
              <Button
                title="Read more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button variant="secondary" className="mt-10 md:mt-14 lg:mt-16">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
