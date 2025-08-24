import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 relative overflow-hidden">
      <div className="animated-bg">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Maximize Your Brand Profitability on <span className="gradient-text">Amazon</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your Amazon business with our proven strategies. We help brands achieve sustainable growth
              through data-driven optimization and expert marketplace management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 shadow-lg hover-lift pulse-glow"
              >
                Start Growing Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-300 hover:bg-gray-800 bg-transparent hover-lift shadow-lg"
              >
                View Case Studies
              </Button>
            </div>
          </div>

          <div>
            <Card className="p-6 bg-white/10 backdrop-blur-md border-gray-700 shadow-2xl hover-lift">
              <h3 className="text-2xl font-semibold text-white mb-4">Discover What's Holding Your Amazon Sales Back</h3>
              <div className="min-h-[449px] rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm shadow-inner">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/3bk26dG9UNxdPg1Fzj4A"
                  style={{ width: "100%", height: "449px", border: "none", borderRadius: "4px" }}
                  id="inline-3bk26dG9UNxdPg1Fzj4A"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form for Home Page Impact Wolves"
                  data-height="449"
                  data-layout-iframe-id="inline-3bk26dG9UNxdPg1Fzj4A"
                  data-form-id="3bk26dG9UNxdPg1Fzj4A"
                  title="Form for Home Page Impact Wolves"
                />
              </div>
              <p className="text-sm text-gray-400 mt-3 text-center">30 Minute Call with an Amazon Expert</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
