import { Button } from "@/components/ui/button"
import { Github, Zap, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            <Zap className="w-24 h-24 text-white mr-8" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-8xl md:text-[10rem] font-black text-white tracking-tight">Pulse</h1>
        </div>

        <div className="mb-16 space-y-6">
          <p className="text-2xl md:text-3xl text-white font-light leading-tight">The future of counting</p>
          <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            SwiftUI counter app powered by The Composable Architecture with haptic feedback that feels like magic
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 text-base font-medium rounded-full transition-all duration-300"
            asChild
          >
            <a href="https://github.com/yourusername/pulse" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View Code
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border border-white/30 text-white/80 hover:bg-white/5 px-8 py-4 text-base font-medium rounded-full transition-all duration-300 bg-transparent"
          >
            Download
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-12 max-w-sm mx-auto">
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-1">100%</div>
            <div className="text-xs text-white/40 font-light uppercase tracking-wider">SwiftUI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-1">TCA</div>
            <div className="text-xs text-white/40 font-light uppercase tracking-wider">Architecture</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-1">3D</div>
            <div className="text-xs text-white/40 font-light uppercase tracking-wider">Haptics</div>
          </div>
        </div>
      </div>
    </section>
  )
}
