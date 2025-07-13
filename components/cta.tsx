import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Download, Play } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
          <CardContent className="p-16 text-center relative">
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <Play className="w-10 h-10 mr-4 text-white/80" />
                <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Ready to Launch?</h2>
              </div>
              <p className="text-base mb-16 max-w-lg mx-auto font-light text-white/60">
                Join developers who've experienced the smoothest counter app ever built
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-lg font-light mb-2 text-white">01</div>
                  <div className="font-light text-white/70 text-sm">Clone repository</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-lg font-light mb-2 text-white">02</div>
                  <div className="font-light text-white/70 text-sm">Open in Xcode</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-lg font-light mb-2 text-white">03</div>
                  <div className="font-light text-white/70 text-sm">Build & run</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 font-medium rounded-full transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/yourusername/pulse" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    Star on GitHub
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white/30 text-white/80 hover:bg-white/5 px-8 py-4 font-medium rounded-full transition-all duration-300 bg-transparent"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download ZIP
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
