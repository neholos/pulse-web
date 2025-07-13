import { Card, CardContent } from "@/components/ui/card"
import { Palette, Smartphone, Brain, RotateCcw } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Minimal Design",
    description: "Clean interface with fluid animations that respond to every touch",
  },
  {
    icon: Smartphone,
    title: "Haptic Magic",
    description: "Feel every interaction with precision-crafted tactile feedback",
  },
  {
    icon: Brain,
    title: "TCA Powered",
    description: "Built with The Composable Architecture for bulletproof reliability",
  },
  {
    icon: RotateCcw,
    title: "Buttery Smooth",
    description: "60fps animations that make every interaction feel premium",
  },
]

export default function Features() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">Features</h2>
          <p className="text-base text-white/50 max-w-xl mx-auto font-light">
            Every detail crafted for the perfect counting experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-lg font-medium mb-3 text-white">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
