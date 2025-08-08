export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Why Pay $400+ for Garage Repairs?
        </h1>
        <p className="text-xl text-yellow-400 font-semibold mb-2">
          Get Full Coverage for $179/year.
        </p>
        <p className="text-sm text-gray-300 mb-6">
          Your subscription includes expert maintenance, automated reminders, and peace of mind — all for one protective price.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:opacity-90 transition">
            Start My Membership
          </button>
          <button className="px-6 py-3 border border-white text-white font-medium rounded-xl hover:bg-white hover:text-black transition">
            Walk Me Through It
          </button>
        </div>
      </div>
    </section>
  )
}
