import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-evenly py-4 bg-gray-950 h-36 border-t border-white/10 text-gray-400 text-sm">
      <div className="flex gap-12">
        <a
          href="https://github.com/foxwellm/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-sky-400 transition"
        >
          <Image
            src="/footer/github-mark-white.png"
            alt="GitHub"
            width={28}
            height={28}
          />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/foxwellmw"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-sky-400 transition"
        >
          <Image
            src="/footer/InBug-White.png"
            alt="LinkedIn"
            width={28}
            height={28}
          />
          <span>LinkedIn</span>
        </a>
      </div>
      <a
        href="https://www.flaticon.com/free-icons/chatbot"
        title="chatbot icons"
        className="mt-4"
      >
        Chatbot icons created by littleicon - Flaticon
      </a>

      <p className="text-center mt-4">
        &copy; {new Date().getFullYear()} Matthew Foxwell. All rights reserved.
      </p>
    </footer>
  );
}
