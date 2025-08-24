import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Target, Users, Award, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Want To Amplify Your <span className="gradient-text">Amazon Store Growth?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Impact Wolves, we specialize in transforming Amazon businesses through data-driven strategies and
              proven methodologies. Our team of Amazon experts has helped over 50 brands achieve sustainable growth and
              maximize their marketplace potential.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 hover-lift p-3 rounded-lg bg-white/50 shadow-sm">
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Revenue Optimization</span>
              </div>

              <div className="flex items-center space-x-3 hover-lift p-3 rounded-lg bg-white/50 shadow-sm">
                <div className="p-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 shadow-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">PPC Campaign Management</span>
              </div>

              <div className="flex items-center space-x-3 hover-lift p-3 rounded-lg bg-white/50 shadow-sm">
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Brand Store Development</span>
              </div>

              <div className="flex items-center space-x-3 hover-lift p-3 rounded-lg bg-white/50 shadow-sm">
                <div className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Listing Optimization</span>
              </div>

              <div className="flex items-center space-x-3 hover-lift p-3 rounded-lg bg-white/50 shadow-sm">
                <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Inventory Management</span>
              </div>

              <div className="flex items-center space-x-3 hover-lift p-3 rounded-lg bg-white/50 shadow-sm">
                <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Performance Analytics</span>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're struggling with low visibility, poor conversion rates, or ineffective advertising, we have
              the expertise to turn your challenges into opportunities for exponential growth.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover-lift pulse-glow"
            >
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2016%2C%202025%2C%2012_01_06%20AM-biG8ubySAZ8gHh9u8dyYeVKk0HXy4M.png"
              alt="Amazon Growth Team"
              className="rounded-lg shadow-2xl hover-lift"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-2xl hover-lift">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Successful Campaigns</div>
            </div>

            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg shadow-xl hover-lift">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-xs">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
