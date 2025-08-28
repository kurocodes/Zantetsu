export default function Newsletter() {
  return (
    <section className="px-6 py-16 bg-bgDark text-bgLight text-center">
      <h2 className="text-4xl font-subheading font-bold mb-6">
        Join Our Newsletter
      </h2>
      <p className="mb-6 text-gray-300">
        Be the first to hear about new drops, exclusive deals, and special
        offers!
      </p>
      <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-xl flex-1 bg-bgMuted focus:outline-none"
        />
        <button
          type="submit"
          className="bg-highlight hover:bg-accentGold hover:text-bgDark text-bgLight px-6 py-3 rounded-xl font-semibold transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
