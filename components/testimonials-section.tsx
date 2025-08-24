import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Wellness Brand Owner",
      content:
        "Impact Wolves transformed our Amazon presence completely. Within 3 months, we saw a 45% increase in sales and our products started ranking on the first page for our target keywords.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      company: "Electronics Retailer",
      content:
        "The PPC management service is outstanding. They reduced our advertising costs by 30% while increasing our conversion rate. The ROI improvement has been incredible.",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      company: "Home & Garden Brand",
      content:
        "Professional, knowledgeable, and results-driven. The team at Impact Wolves helped us scale from $50K to $200K monthly revenue in just 6 months. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hear It From Our Clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with Impact Wolves.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
