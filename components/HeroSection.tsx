'use client'

import { useEffect, useState } from 'react'
import { Scale, Users, Globe, Award, ArrowRight, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    { icon: Scale, text: 'Full Service Law Firm' },
    { icon: Globe, text: 'International Expertise' },
    { icon: Users, text: 'Expert Legal Team' },
    { icon: Award, text: 'Proven Track Record' }
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{
      backgroundImage: 'url(/b.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Background overlay for translucency */}
      <div className="absolute inset-0 bg-slate-950/90" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 text-amber-400">
              <Scale className="h-4 w-4" />
              <span className="text-sm font-medium">Premier Legal Services</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  GCS Law Firm
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                <strong className="text-amber-400">Grow-On Consultancy Services (GCS)</strong> is a 
                distinguished full-service law firm headquartered in Gurgaon, India.
              </p>
              <p>
                We deliver cutting-edge legal solutions to corporations, individuals, and international 
                entities worldwide, combining unmatched expertise with international exposure.
              </p>
              <p>
                Led by <span className="text-white font-medium">Advocate Yatish Kumar Goel</span>, our 
                specialized team excels in Criminal Law, Property Matters, Family Law, and Corporate affairs.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 transition-all duration-500 hover:bg-slate-700/30 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <feature.icon className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25">
                <span>Get Legal Consultation</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center space-x-2 border border-slate-600 hover:border-amber-400 text-slate-300 hover:text-amber-400 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50">
                <span>Our Services</span>
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Main Visual */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent rounded-2xl" />
                
                {/* Justice Scale Icon */}
                <div className="relative flex justify-center mb-8">
                  <div className="p-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg">
                    <Scale className="h-16 w-16 text-slate-900" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-amber-400">15+</div>
                    <div className="text-slate-300 text-sm">Years Experience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-amber-400">500+</div>
                    <div className="text-slate-300 text-sm">Cases Won</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-amber-400">98%</div>
                    <div className="text-slate-300 text-sm">Success Rate</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-amber-400">24/7</div>
                    <div className="text-slate-300 text-sm">Legal Support</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg p-3 shadow-lg animate-bounce">
                <CheckCircle className="h-6 w-6 text-slate-900" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-slate-700 rounded-lg p-3 border border-slate-600 shadow-lg">
                <Globe className="h-6 w-6 text-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}
