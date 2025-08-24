import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "BIOVANTIC PHARMA",
      subtitle: "Pharmaceutical Company",
      description: "Biovantic Pharma 97% Sales Increase with 234% Lower TACOS in 3 Months",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8LW0OjDNMbT3XOIOLi9oXVxkEaX8jZ.png",
      color: "bg-blue-600",
    },
    {
      title: "TRUCK GEAR WAREHOUSE",
      subtitle: "Expert in Auto Accessories",
      description: "Truck Gear Warehouse Amazon PPC Drives Sales from $0 to $300K in 6 Months",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gch2l2uaN52JWWTq2bYviPTxrEQAUp.png",
      color: "bg-blue-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Case Studies Reflect Our Path To Success</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive deep into real success stories and see exactly how we've helped brands achieve remarkable growth on
            Amazon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`${study.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-sm opacity-90">{study.subtitle}</p>
              </div>
              <CardContent className="p-6">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 leading-relaxed">{study.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  )
}
