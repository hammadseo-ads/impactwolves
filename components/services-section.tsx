import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, TrendingUp, Target } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      title: "PPC Audit",
      description:
        "Comprehensive analysis of your current advertising campaigns to identify optimization opportunities and reduce wasted spend.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Research and Ranking",
      description:
        "In-depth keyword research and ranking strategies to improve your product visibility and organic search performance.",
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "PPC Management",
      description:
        "Full-service Amazon PPC management including campaign setup, optimization, and ongoing performance monitoring.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer At Impact Wolves</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of Amazon optimization services designed to maximize your brand's potential and
            drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
