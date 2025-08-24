import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="/placeholder-803q6.png"
            alt="Amazon Expert"
            className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white"
          />
        </div>

        <h2 className="text-4xl font-bold text-white mb-4">Talk To Our Amazon PPC Expert Abdullah</h2>
        <h3 className="text-2xl font-semibold text-blue-100 mb-6">Expert Abdullah Awaits</h3>

        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Ready to transform your Amazon business? Schedule a free consultation with our Amazon PPC expert and discover
          how we can help you achieve remarkable growth.
        </p>

        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
          Schedule Free Consultation
        </Button>

        <p className="text-sm text-blue-200 mt-4">No commitment required • 30-minute strategy session</p>
      </div>
    </section>
  )
}
