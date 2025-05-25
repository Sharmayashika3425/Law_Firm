'use client'

import { useState, useEffect } from 'react'
import { 
  Award, 
  Trophy, 
  Star, 
  Globe, 
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  Sparkles,
  Medal,
  Building2,
  Target
} from 'lucide-react'

export default function AchievementSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('achievement-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const additionalAchievements = [
    {
      icon: Building2,
      title: "25+ Years of Excellence",
      description: "Serving clients with unwavering dedication since 1998",
      color: "blue"
    },
    {
      icon: Users,
      title: "1000+ Satisfied Clients",
      description: "Successfully resolved complex legal matters worldwide",
      color: "green"
    },
    {
      icon: Target,
      title: "99.2% Success Rate",
      description: "Consistently delivering favorable outcomes for our clients",
      color: "purple"
    }
  ]

  return (
    <section id="achievement-section" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Ccircle cx='9' cy='9' r='1'/%3E%3Ccircle cx='19' cy='9' r='1'/%3E%3Ccircle cx='29' cy='9' r='1'/%3E%3Ccircle cx='39' cy='9' r='1'/%3E%3Ccircle cx='49' cy='9' r='1'/%3E%3Ccircle cx='9' cy='19' r='1'/%3E%3Ccircle cx='19' cy='19' r='1'/%3E%3Ccircle cx='29' cy='19' r='1'/%3E%3Ccircle cx='39' cy='19' r='1'/%3E%3Ccircle cx='49' cy='19' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 text-amber-400 mb-6">
            <Trophy className="h-4 w-4" />
            <span className="text-sm font-medium">International Recognition</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> Achievements</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6" />
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Recognition of our unwavering commitment to excellence and quality in legal consultancy services.
          </p>
        </div>

        {/* Main Achievement Card */}
        <div className={`relative mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative p-8 lg:p-12">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-full blur-3xl" />
              
              <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                {/* Award Visual */}
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl p-8 border border-amber-400/30">
                    {/* Main Award Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div className="p-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-2xl">
                          <Award className="h-16 w-16 text-slate-900" />
                        </div>
                        {/* Decorative Stars */}
                        <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full animate-pulse">
                          <Star className="h-4 w-4 text-slate-900" />
                        </div>
                        <div className="absolute -bottom-2 -left-2 p-2 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full animate-pulse delay-500">
                          <Sparkles className="h-4 w-4 text-slate-900" />
                        </div>
                      </div>
                    </div>

                    {/* Award Details */}
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                        Century International Gold Quality Era Award
                      </h3>
                      
                      <div className="flex items-center justify-center space-x-6 text-sm text-slate-300">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-amber-400" />
                          <span>May 2003</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-amber-400" />
                          <span>Geneva, Switzerland</span>
                        </div>
                      </div>

                      {/* Award Certificate Image */}
                      <div className="mt-6 flex justify-center">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-sm group-hover:blur-none transition-all duration-300"></div>
                          <div className="relative bg-slate-800/60 backdrop-blur-sm border border-amber-400/30 rounded-lg p-3 hover:border-amber-400/50 transition-all duration-300">
                            <img 
                              src="/ac.png" 
                              alt="Century International Gold Quality Era Award Certificate" 
                              className="w-32 h-auto rounded-md opacity-90 hover:opacity-100 transition-opacity duration-300 filter brightness-110 contrast-125"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-md pointer-events-none"></div>
                          </div>
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            <div className="bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-full px-2 py-1">
                              <span className="text-xs text-amber-400 font-medium">Original Certificate</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 p-3 bg-slate-700/80 backdrop-blur-sm rounded-lg border border-slate-600/50">
                    <Globe className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 p-3 bg-slate-700/80 backdrop-blur-sm rounded-lg border border-slate-600/50">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                </div>

                {/* Award Description */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h4 className="text-3xl font-bold text-white">
                      International Recognition for
                      <span className="text-amber-400"> Excellence</span>
                    </h4>
                    
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                      <p>
                        Over the years, owing to our commitment to provide the best legal remedies and solutions 
                        to our clients, <strong className="text-white">GCS has gained international repute</strong> in 
                        the field of legal consultancy services.
                      </p>
                      
                      <p>
                        <strong className="text-amber-400">GCS was awarded the Century International Gold Quality Era Award</strong> by 
                        Mr. Jose E. Prieto, Executive President of BID (Business Initiative Directions), presented 
                        in May 2003 in Geneva, Switzerland.
                      </p>
                      
                      <p>
                        This prestigious award recognizes our <strong className="text-white">outstanding commitment to quality and excellence</strong> in 
                        legal services. The award was received by Mr. Manish Goel and Mr. Yogesh Chandra Goel, 
                        founding partners of GCS, representing our firm's dedication to maintaining the highest 
                        standards of professional service.
                      </p>
                      
                      <p>
                        The award ceremony, held in the heart of Switzerland's diplomatic capital, brought together 
                        leading organizations from around the world, making this recognition even more significant 
                        for our continued growth and international presence.
                      </p>
                    </div>
                  </div>

                  {/* Award Highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/40 border border-slate-700/30 rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Medal className="h-5 w-5 text-amber-400" />
                        <span className="text-sm font-semibold text-amber-400">Gold Standard</span>
                      </div>
                      <p className="text-xs text-slate-400">Highest level of quality recognition</p>
                    </div>
                    
                    <div className="bg-slate-800/40 border border-slate-700/30 rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Globe className="h-5 w-5 text-blue-400" />
                        <span className="text-sm font-semibold text-blue-400">International</span>
                      </div>
                      <p className="text-xs text-slate-400">Global recognition and presence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Achievements Grid */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {additionalAchievements.map((achievement, index) => {
            const Icon = achievement.icon
            const colorClasses = {
              blue: 'from-blue-400 to-blue-600 border-blue-400/30',
              green: 'from-green-400 to-green-600 border-green-400/30',
              purple: 'from-purple-400 to-purple-600 border-purple-400/30'
            }
            
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colorClasses[achievement.color]} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-slate-900" />
                </div>
                
                <h5 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {achievement.title}
                </h5>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {achievement.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400/10 to-amber-600/10 border border-amber-400/20 rounded-full px-6 py-3 text-amber-400">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Continuing our legacy of excellence since 1998</span>
            <Sparkles className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  )
}
