"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselPreviousClass = (index) => {
    return `z-30 size-12 ${index === 1 ? "hidden" : ""}`;
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    const updateIndex = () => {
      setCurrentIndex(api.selectedScrollSnap() + 1);
    };

    // Defer the initial index update
    setTimeout(updateIndex, 0);

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap() + 1);
    });

    return () => {
      // Cleanup function if needed
    };
  }, [api]);

  return {
    api,
    setApi,
    carouselPreviousClass,
    currentIndex,
  };
};

export function Timeline16() {
  const useActive = useCarousel();
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How we move from intake to resolution
            </h2>
            <p className="md:text-md">
              Each case follows a structured path designed to build trust and
              create lasting change. We work at your pace while maintaining the
              professional standards your family deserves.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Begin" variant="secondary">
                Begin
              </Button>
              <Button
                title="Learn more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <Carousel
          setApi={useActive.setApi}
          className="relative h-full overflow-hidden"
        >
          <div className="absolute left-0 top-1.5 z-20 h-1 w-16 bg-gradient-to-r from-background-primary to-transparent" />
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col md:mb-0 md:w-auto">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-8 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">Intake</h3>
                  <p>
                    We listen to your story and understand what brought you here
                    today.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col md:mb-0 md:w-auto">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-8 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Planning
                  </h3>
                  <p>
                    Together we design a visitation schedule that works for
                    everyone involved.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col md:mb-0 md:w-auto">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-8 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Facilitation
                  </h3>
                  <p>
                    Our team manages visits with professionalism and care from
                    start to finish.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col md:mb-0 md:w-auto">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-8 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Monitoring
                  </h3>
                  <p>
                    We track progress and adjust our approach based on what we
                    observe.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col md:mb-0 md:w-auto">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-8 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Documentation
                  </h3>
                  <p>
                    Detailed records are prepared for your attorney or the court
                    as needed.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col md:mb-0 md:w-auto">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-[3px] w-full bg-neutral-black" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-neutral-black" />
                </div>
                <div className="px-8 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Closure
                  </h3>
                  <p>
                    We help transition families toward independence or ongoing
                    support as appropriate.
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className={useActive.carouselPreviousClass(useActive.currentIndex)}
          />
          <CarouselNext className="size-12" />
          <div className="absolute right-0 top-1.5 z-20 h-1 w-16 bg-gradient-to-l from-background-primary to-transparent" />
        </Carousel>
      </div>
    </section>
  );
}
