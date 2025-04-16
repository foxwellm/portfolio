import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-4rem)] scroll-mt-16 bg-blue-900 text-white flex flex-col md:flex-row px-4 py-4"
    >
      {/* Contact Info */}
      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6 text-sky-400">Contact Me</h2>
        <p className="mb-4 text-md">
          Feel free to reach out or take a look at my resume.
        </p>
        <a
          href="mailto:foxwellmw@gmail.com"
          className="text-sky-300 hover:underline mb-2"
        >
          foxwellmw@gmail.com
        </a>
      </div>

      {/* Resume */}
      <div className="w-full md:w-3/5 flex items-center justify-center">
        <Image
          src="/MatthewFoxwell 2025.jpg"
          alt="Resume"
          width={520}
          height={320}
          className="rounded-2xl object-cover backface-hidden"
        />
      </div>
    </section>
  );
}
