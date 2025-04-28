"use client";

import { useState } from "react";

export default function MessageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (isSuccess) {
      setIsSuccess(false);
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        disabled={isLoading}
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500"
      />

      <input
        type="email"
        name="email"
        disabled={isLoading}
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email"
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500"
      />

      <textarea
        name="message"
        disabled={isLoading}
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Message"
        rows={4}
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500"
      />

      <button
        type="submit"
        disabled={isLoading}
        className={`text-white py-3 rounded-lg transition 
          ${isLoading ? "bg-blue-400" : isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {isLoading ? "Sending..." : isSuccess ? "Message Sent" : "Send Message"}
      </button>
    </form>
  );
}
