export function StatsSection() {
  const stats = [
    { number: "15%", label: "Average Revenue Increase", sublabel: "Within 90 Days" },
    { number: "50+", label: "Successful Brands", sublabel: "Scaled to 7-Figures" },
    { number: "5M", label: "Total Revenue Generated", sublabel: "For Our Clients" },
    { number: "30M", label: "Products Sold", sublabel: "Through Our Strategies" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Brand Deserves Proven Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped hundreds of brands achieve remarkable growth on Amazon. Here's what we've accomplished
            together.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
