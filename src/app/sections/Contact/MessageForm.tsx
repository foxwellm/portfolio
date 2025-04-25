const email = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;

export default function MessageForm() {
  return (
    <form
      action={`https://formsubmit.co/${email}`}
      method="POST"
      target="_blank"
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <textarea
        name="message"
        rows={5}
        placeholder="Your Message"
        required
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
      ></textarea>

      <button
        type="submit"
        className="flex bg-sky-600 hover:bg-sky-500 items-center justify-center gap-4 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Send Message
      </button>
    </form>
  );
}
