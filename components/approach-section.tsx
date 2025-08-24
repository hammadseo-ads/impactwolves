import { Card, CardContent } from "@/components/ui/card"

export function ApproachSection() {
  const steps = [
    {
      number: "1",
      title: "Insightful Audit",
      description:
        "We conduct a comprehensive analysis of your current Amazon presence, identifying key areas for improvement and growth opportunities.",
    },
    {
      number: "2",
      title: "Customized Approach",
      description:
        "Based on our audit findings, we develop a tailored strategy that aligns with your business goals and market positioning.",
    },
    {
      number: "3",
      title: "Strategic Execution",
      description:
        "Our team implements proven tactics and continuously optimizes your campaigns to ensure maximum ROI and sustainable growth.",
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Three-Step Approach To Drive Success On Amazon</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We follow a proven methodology that has helped hundreds of brands achieve remarkable growth on the Amazon
            marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-blue-600 border-blue-500 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
