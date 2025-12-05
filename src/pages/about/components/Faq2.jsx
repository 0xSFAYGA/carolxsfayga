"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Ready to begin
          </h2>
          <p className="md:text-md">
            Take the first step toward restoring meaningful family bonds today.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What happens first?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We begin with a confidential conversation about your situation.
              You will speak with someone who understands the stakes and will not
              judge the path that brought you here. This intake sets the
              foundation for everything that follows.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How long does this take?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              There is no fixed timeline. Some families move quickly once they
              find their footing. Others need more time to rebuild what was
              broken. We work at the pace that serves your family best, not a
              calendar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Will courts accept this?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our documentation meets legal standards and holds up under
              scrutiny. Judges recognize the value of professional facilitation
              and the evidence we create. Your case will have the foundation it
              needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if things go wrong?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We have seen families navigate conflict and come out stronger. Our
              facilitators know how to de-escalate tension and redirect
              conversations toward what matters. We do not abandon you when
              things get difficult.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can you help us?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If your family needs supervised visitation, coaching, or
              documentation, we can help. Call us and tell us what you are
              facing. We will be honest about what we can do and what comes next.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Ready to move forward?
          </h4>
          <p className="md:text-md">Book your intake with Solace today</p>
          <div className="mt-6 md:mt-8">
            <Button title="Book intake" variant="secondary">
              Book intake
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
