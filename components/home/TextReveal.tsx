"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export default function TextReveal() {
  return (
    <div className="flex items-center max-w-screen-lg mx-auto justify-center my-5 rounded-2xl w-full">
      <TextRevealCard
      className="w-full"
        text="You know the business"
        revealText="I know the chemistry "
      >
        {/* <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription> */}
      </TextRevealCard>
    </div>
  );
}
