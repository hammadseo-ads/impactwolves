"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  TrendingUp,
  Target,
  BarChart3,
  Search,
  Eye,
  DollarSign,
  Settings,
  Upload,
  Clock,
} from "lucide-react"
import { LazyAuditTool } from "@/components/lazy-audit-tool"
import { OptimizedYouTubeVideo } from "@/components/optimized-youtube-video"

export default function HomePage() {
  const scrollToAuditTool = () => {
    const auditSection = document.querySelector("#audit-tool-section")
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                    Eliminate Wasted Ad Spend &
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Boost Your Amazon Sales
                  </span>
                  <br />
                  <span className="text-white">– Instantly</span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Upload two Amazon reports and get a FREE comprehensive PPC audit in seconds. Discover what's hurting
                  your performance, where you can scale, and exactly how to improve your campaigns.
                </p>

                <p className="text-sm text-blue-200/80">
                  🔒 Your data is processed securely and never stored - complete privacy guaranteed
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">$100M+</div>
                    <div className="text-sm text-blue-200">Amazon Sales Analyzed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-blue-200">Successful Audits</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">Amazon</div>
                    <div className="text-sm text-blue-200">Ads Verified Partner</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span>Free • No Login Required • Instant Results</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span>Data-Backed Insights • Actionable Recommendations</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span>Built by Experts Who've Managed $100M+ in Amazon Spend</span>
                </div>
              </div>

              <Button
                onClick={scrollToAuditTool}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-xl drop-shadow-lg"
              >
                Start Your Free Audit
              </Button>
            </div>

            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 shadow-2xl drop-shadow-2xl">
                <OptimizedYouTubeVideo
                  videoId="-f7INljZLdU"
                  title="How to Download Essential Audit Files from Seller Central"
                  className="w-full"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Is Your Amazon Advertising Falling Short?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Managing Amazon PPC can feel like flying blind. Are you facing any of these challenges?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Wasted Ad Spend</h3>
              <p className="text-gray-600">
                Spending money on ads that don't convert, but not sure where the waste is happening?
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Unstructured Campaigns</h3>
              <p className="text-gray-600">
                Unsure if your campaigns follow Amazon's best practices and structured for success?
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Missing Opportunities</h3>
              <p className="text-gray-600">Struggling to scale your sales despite increasing advertising spend?</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Lack of Direction</h3>
              <p className="text-gray-600">Lost in spreadsheets of data without any clear action plan?</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              That's exactly why we built the Impact Wolves Audit Tool. In minutes, it gives you a bird's-eye view of
              your PPC account – showing what's working, what isn't, and how to fix it.{" "}
              <strong>No more guesswork, no more generic advice.</strong> Get data-backed, actionable insights tailored
              to your store.
            </p>
            <div className="mt-8">
              <Button
                onClick={scrollToAuditTool}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-xl drop-shadow-lg"
              >
                Get Your Bird's-Eye View Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Analysis (What's Included)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your PPC audit covers everything you need to optimize performance and maximize ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-blue-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keyword & Search Term Analysis</h3>
              <p className="text-gray-600">
                Identify which keywords are draining your budget with no returns. Get a list of negative keywords to add
                immediately and stop wasting money on clicks that don't convert.
              </p>
            </Card>

            <Card className="bg-white border border-blue-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Top vs. Bottom Performers</h3>
              <p className="text-gray-600">
                See which products and campaigns are driving sales and which are bleeding spend. Pinpoint your star
                products and underachievers eating up ad dollars.
              </p>
            </Card>

            <Card className="bg-white border border-blue-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Structure Check</h3>
              <p className="text-gray-600">
                Find out if your campaigns follow Amazon's best practices. Identify structural issues limiting your
                growth and get recommendations for optimization.
              </p>
            </Card>

            <Card className="bg-white border border-blue-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Placement Performance</h3>
              <p className="text-gray-600">
                Discover where your ads perform best. See which placements you should double down on and which need
                optimization to maximize ROI.
              </p>
            </Card>

            <Card className="bg-white border border-blue-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ad Spend Distribution</h3>
              <p className="text-gray-600">
                Get a clear view of budget allocation across match types and campaigns. Discover imbalances and get
                recommendations for optimal spend distribution.
              </p>
            </Card>

            <Card className="bg-white border border-blue-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Total Sales Impact</h3>
              <p className="text-gray-600">
                Uniquely combines ad data with total sales data. See the full context of how ad performance impacts your
                overall business profitability.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={scrollToAuditTool}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 text-base sm:text-lg font-semibold shadow-xl drop-shadow-lg w-full sm:w-auto"
            >
              Get Your Comprehensive Analysis Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Personalized Recommendations</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Data is cool, but what do you do with it? Our tool provides a custom action plan for your account.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              No more wondering "now what?" when you see an audit.
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Found high-cost, low-conversion keywords?</strong> You'll get a list of suggested negative
                    keywords to add immediately.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>One product eating spend with no sales?</strong> The report will tell you to pause or fix
                    it, and suggest reallocating budget to top performers.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Low click-through on Product Pages?</strong> You'll see tips to improve listings or shift
                    spend to Top of Search.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>TACoS too high?</strong> Get guidance on balancing ad spend with total sales – whether to
                    raise prices, improve listings, or cut unprofitable ads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-2xl inline-block">
            <p className="text-lg font-semibold">
              💡 Execute the recommended steps, and you could see a 30-40% boost in sales within a month.
            </p>
          </div>

          <div className="mt-8">
            <Button
              onClick={scrollToAuditTool}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 text-base sm:text-lg font-semibold shadow-xl drop-shadow-lg w-full sm:w-auto"
            >
              Get My Personalized Action Plan
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Simple 3-step process to get your comprehensive audit
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">1. Upload Your Data</h3>
                <p className="text-gray-600">
                  Upload two files: your Amazon Advertising report and Business Report. No login or signup needed – your
                  data is secure and never stored.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">2. Automated Audit in Seconds</h3>
                <p className="text-gray-600">
                  Hit "Analyze" and watch the magic happen. Our tool applies the same frameworks our experts use on
                  $100M+ of Amazon spend.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">3. Get Results & Take Action</h3>
                <p className="text-gray-600">
                  Dive into your interactive audit dashboard. Download a full PDF report and start applying the fixes to
                  improve your account health!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <p className="text-lg text-gray-700">
              👋 <strong>User-Friendly:</strong> You don't need to be a data expert. If you can download a report from
              Amazon and upload it here, you can get your audit – it's that easy.
            </p>
          </div>

          <div className="mt-8">
            <Button
              onClick={scrollToAuditTool}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 text-base sm:text-lg font-semibold shadow-xl drop-shadow-lg w-full sm:w-auto"
            >
              Start the 3-Step Process Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Built by Amazon Experts Who Truly Care</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Impact Wolves isn't just random software – it's a team of Amazon PPC experts led by Abdullah Awais,
                  who has helped brands generate millions on Amazon.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Our Philosophy is Simple: Give Value First</h3>
                  <p className="text-gray-600">
                    We're handing you all the data and recommendations upfront – no strings attached. When you see the
                    impact of a truly detailed audit, you'll understand the difference expert guidance makes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="space-y-2 p-4 sm:p-2">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">Transparency</div>
                    <div className="text-sm text-gray-600">No hidden agenda</div>
                  </div>
                  <div className="space-y-2 p-4 sm:p-2">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">Expertise</div>
                    <div className="text-sm text-gray-600">$100M+ managed</div>
                  </div>
                  <div className="space-y-2 p-4 sm:p-2">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">Results</div>
                    <div className="text-sm text-gray-600">Proven success</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2016%2C%202025%2C%2012_01_06%20AM-qEp4a3SW7xofwbscNhgRjeSJDMhff7.png"
                alt="Abdullah Awais - Amazon Advertising Expert"
                className="rounded-lg shadow-2xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our audit tool</p>
          </div>

          <div className="space-y-8">
            <Card className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What data do I need to use this audit tool?</h3>
              <p className="text-gray-600">
                You'll need two Amazon reports: a search term or campaign report from your advertising console, and a
                business report for overall sales. We provide instructions and sample files!
              </p>
            </Card>

            <Card className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Is my data secure?</h3>
              <p className="text-gray-600">
                Absolutely. Your uploaded files are processed securely and not stored. We respect your privacy and only
                you see the results.
              </p>
            </Card>

            <Card className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How is this audit free? What's the catch?</h3>
              <p className="text-gray-600">
                No catch. 👍 It's free because we're confident you'll see the value in our expertise. Some sellers who
                run the audit realize they'd like professional help – and they contact us. But if not, no pressure!
              </p>
            </Card>

            <Card className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">I'm not tech-savvy – can I still use this?</h3>
              <p className="text-gray-600">
                Yes! If you can download a report and drag-and-drop a file, you can use the audit tool. It's built for
                all sellers, not just data experts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-3xl mx-auto text-center space-y-8 px-6">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Ready to Transform Your Amazon PPC Performance?</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Don't let hidden mistakes or missed opportunities hold you back. Take 2 minutes to upload your data and
              get your free audit now – your future self will thank you.
            </p>
          </div>

          <Button
            onClick={scrollToAuditTool}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 sm:px-8 sm:py-5 lg:px-12 lg:py-6 text-lg sm:text-xl font-semibold shadow-xl drop-shadow-lg w-full sm:w-auto"
          >
            🔥 Start Your Free Audit
          </Button>

          <p className="text-blue-200">No credit card • No signup • Just instant insights</p>
        </div>
      </section>

      <section id="audit-tool-section" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Amazon Ads Performance Audit Tool</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Get your comprehensive Amazon advertising audit report in minutes. Simply upload your data and receive
            detailed insights and actionable recommendations.
          </p>

          <LazyAuditTool />
        </div>
      </section>

      <Footer />
    </div>
  )
}
