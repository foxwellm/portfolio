"use client";

import { useState, useEffect, useRef, forwardRef } from "react";

const ChatBox = forwardRef<HTMLDivElement, { isChatOpen: boolean }>(
  ({ isChatOpen }, ref) => {
    const [messages, setMessages] =
      useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const sendMessage = async () => {
      if (!input.trim()) return;
      setIsLoading(true);
      const userMessage = { role: "user", content: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { role: "bot", content: data.reply };
      setIsLoading(false);
      setMessages((prev) => [...prev, botMessage]);
    };

    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
      <div
        ref={ref}
        className={`relative bottom-[1rem] right-[1rem] w-full max-w-[500px] z-50 transition-all duration-300 ease-in-out  
    ${isChatOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-gray-900 rounded-xl shadow-lg flex flex-col border border-gray-300 border-gray-700 overflow-hidden">
          {/* Chat messages */}
          <div className="overflow-y-auto max-h-[300px] p-4 gap-2 flex flex-col">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 max-w-[80%] rounded-lg text-sm text-black ${
                  msg.role === "user"
                    ? "bg-blue-100 self-end text-right"
                    : "bg-gray-100 self-start text-left"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="min-h-[3rem] w-[80%] rounded-lg bg-gray-400 animate-pulse" />
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input bar */}
          <div className="p-3 border-t border-gray-300 dark:border-gray-700 flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded"
              placeholder="Ask Matthew's chatbot something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
);

ChatBox.displayName = "ChatBox"; // Required for React DevTools to show the name

export default ChatBox;
