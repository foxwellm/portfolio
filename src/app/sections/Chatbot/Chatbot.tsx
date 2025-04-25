"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ChatBox from "./ChatBox";

export default function Chatbot() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isChatOpen &&
        !chatRef.current?.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isChatOpen]);

  return (
    <div className="fixed bottom-0 right-0 z-[999]">
      <button
        ref={buttonRef}
        onClick={() => setIsChatOpen((prevIsChatOpen) => !prevIsChatOpen)}
        className="w-[4rem] h-[4rem] z-50 absolute right-[1rem] -top-[5rem]"
      >
        <Image
          src="/robot.png"
          alt="Chatbot Portrait"
          width={500}
          height={500}
          className="object-contain hover:scale-115 transition-transform"
        />
      </button>
      <ChatBox ref={chatRef} isChatOpen={isChatOpen} />
    </div>
  );
}
