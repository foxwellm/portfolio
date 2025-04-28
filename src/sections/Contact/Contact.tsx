import { MessageForm } from "./components";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex lg:min-h-[calc(100vh-4rem-9rem)] pt-16 pb-32 pt-32 md:pb-64 lg:py-0 items-center justify-center scroll-mt-16 bg-gray-950 text-white px-6"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-sky-400">Contact Me</h2>
        <p className="text-gray-300 mb-4">
          Feel free to reach out about opportunities, collaborations, or just to
          say hi!
        </p>
        <p className="text-sm text-gray-400 mb-4">
          All fields are required <span className="text-red-500">*</span>
        </p>

        <MessageForm />
      </div>
    </section>
  );
}
