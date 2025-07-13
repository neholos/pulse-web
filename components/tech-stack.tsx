import { Card, CardContent } from "@/components/ui/card"
import { Code, Layers, Zap } from "lucide-react"

const techStack = [
  {
    name: "SwiftUI",
    description: "Declarative UI framework that brings ideas to life instantly",
    icon: Code,
    stats: "Native",
  },
  {
    name: "TCA",
    description: "Composable Architecture for predictable, testable app logic",
    icon: Layers,
    stats: "Reliable",
  },
  {
    name: "Haptics",
    description: "UIKit's advanced haptic engine for immersive feedback",
    icon: Zap,
    stats: "Tactile",
  },
]

export default function TechStack() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white tracking-tight">Tech Stack</h2>
          <p className="text-base text-white/50 max-w-xl mx-auto font-light">
            Built with cutting-edge iOS technologies for maximum performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-10 text-center relative">
                <div className="absolute top-4 right-4 text-xs font-light text-white/60 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  {tech.stats}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mx-auto mb-8 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-white/80" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">{tech.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
