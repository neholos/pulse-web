import { Heart, Github, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-24 px-4 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-base flex items-center justify-center mb-12 font-light text-white/70">
            Crafted with <Heart className="w-4 h-4 text-pink-500 mx-2" /> using SwiftUI, TCA, and haptic magic
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <a
              href="https://github.com/yourusername/pulse"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <Github className="w-4 h-4 text-white/80" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <Twitter className="w-4 h-4 text-white/80" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-white/80" />
            </a>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-light mb-12 text-center text-white">Haptic Feedback System</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
              <div className="text-2xl mb-3">➕</div>
              <div className="text-white font-medium text-sm mb-1">Increment</div>
              <div className="text-white/50 font-light text-xs">Success Haptic</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
              <div className="text-2xl mb-3">➖</div>
              <div className="text-white font-medium text-sm mb-1">Decrement</div>
              <div className="text-white/50 font-light text-xs">Warning Haptic</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
              <div className="text-2xl mb-3">🔁</div>
              <div className="text-white font-medium text-sm mb-1">Reset</div>
              <div className="text-white/50 font-light text-xs">Error Haptic</div>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-white/40 font-light text-sm">MIT License • Open Source • Made for iOS Developers</p>
        </div>
      </div>
    </footer>
  )
}
