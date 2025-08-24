export function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Results Of Amazon Growth</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients. See how our strategies have transformed Amazon businesses across various
            industries.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">70% Growth from Jan to May</h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Month</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Revenue</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Growth</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900">Orders</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">January</td>
                  <td className="py-3 px-4 text-right text-gray-700">$45,230</td>
                  <td className="py-3 px-4 text-right text-gray-700">-</td>
                  <td className="py-3 px-4 text-right text-gray-700">1,205</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">February</td>
                  <td className="py-3 px-4 text-right text-gray-700">$52,180</td>
                  <td className="py-3 px-4 text-right text-green-600">+15.4%</td>
                  <td className="py-3 px-4 text-right text-gray-700">1,389</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">March</td>
                  <td className="py-3 px-4 text-right text-gray-700">$61,450</td>
                  <td className="py-3 px-4 text-right text-green-600">+17.8%</td>
                  <td className="py-3 px-4 text-right text-gray-700">1,634</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">April</td>
                  <td className="py-3 px-4 text-right text-gray-700">$68,920</td>
                  <td className="py-3 px-4 text-right text-green-600">+12.2%</td>
                  <td className="py-3 px-4 text-right text-gray-700">1,831</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-900">May</td>
                  <td className="py-3 px-4 text-right font-semibold text-gray-900">$76,890</td>
                  <td className="py-3 px-4 text-right font-semibold text-green-600">+11.6%</td>
                  <td className="py-3 px-4 text-right font-semibold text-gray-900">2,047</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
