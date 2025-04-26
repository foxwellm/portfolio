"use client";

import { useEffect, useState } from "react";
import { initialBotMessage } from "./constants";

export default function InitialGreeting() {
  const [greetingOpacity, setGreetingOpacity] = useState(false);

  useEffect(() => {
    // NOTE: When page refreshes, it immediately starts scrolling to last scrollY
    // This if block catches it to make sure the greeting doesn't show
    if (window.scrollY > 0) {
      return;
    }

    setGreetingOpacity(true);

    const onScroll = () => {
      if (window.scrollY > 100) {
        setGreetingOpacity(false);
        window.removeEventListener("scroll", onScroll);
      }
    };

    const handleClick = () => {
      setGreetingOpacity(false);
    };

    window.addEventListener("scroll", onScroll);
    document.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      className={`absolute right-[6rem] -top-[6rem] p-3 w-64 
    rounded-lg text-sm text-black bg-gray-200 self-start text-left 
    transition-opacity duration-500 cursor-default
    ${greetingOpacity ? "opacity-100" : "opacity-0"}`}
    >
      {initialBotMessage}
    </div>
  );
}
