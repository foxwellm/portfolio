import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-evenly bg-gray-950 h-36 border-t border-white/10 text-gray-400 text-sm">
      <div className="flex gap-12">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-sky-400 transition"
        >
          <Image
            src="/github-mark-white.png"
            alt="GitHub"
            width={28}
            height={28}
          />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-sky-400 transition"
        >
          <Image src="/InBug-White.png" alt="LinkedIn" width={28} height={28} />
          <span>LinkedIn</span>
        </a>
      </div>

      <p className="text-center mt-4">
        &copy; {new Date().getFullYear()} Matthew Foxwell. All rights reserved.
      </p>
    </footer>
  );
}
