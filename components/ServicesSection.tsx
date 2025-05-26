'use client'

import { useState } from 'react'
import { 
  Scale, 
  Home, 
  Heart, 
  Building2, 
  ArrowRight, 
  CheckCircle,
  Users,
  Globe
} from 'lucide-react'

const services = [
  {
    icon: Scale,
    title: 'Criminal Matters',
    description: 'The firm has extensive experience in representing clients\' criminal matters at pan India level across different courts with proven track record of successful case handling.',
    color: 'from-red-500 to-red-600',
    bgColor: 'red-500/10',
    borderColor: 'red-500/20'
  },
  {
    icon: Home,
    title: 'Property Disputes',
    description: 'Disputes may arise regarding the possession of property when it is claimed that the property is not possessed. We handle complex property litigation with expertise.',
    color: 'from-green-500 to-green-600',
    bgColor: 'green-500/10',
    borderColor: 'green-500/20'
  },
  {
    icon: Heart,
    title: 'Matrimonial Cases',
    description: 'Matrimonial disputes involve emotions, feelings and ego. We deal with matrimonial disputes with sensitivity, providing guidance and advice with compassion.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'pink-500/10',
    borderColor: 'pink-500/20'
  },
  {
    icon: Building2,
    title: 'Insolvency Matter',
    description: 'We assist corporate entities, entrepreneurs, banks, financial institutions, bondholders, other lenders and stakeholders in complex insolvency proceedings.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'blue-500/10',
    borderColor: 'blue-500/20'
  }
]

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 text-amber-400 mb-6">
            <Users className="h-4 w-4" />
            <span className="text-sm font-medium">Our Legal Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Legal
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6" />
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We provide expert legal representation across diverse practice areas, ensuring personalized solutions 
            for individuals, corporations, and international entities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:bg-slate-700/40 cursor-pointer ${
                hoveredCard === index ? 'shadow-2xl' : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                boxShadow: hoveredCard === index ? `0 25px 50px -12px rgba(245, 158, 11, 0.15)` : undefined
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative mb-6 p-4 bg-${service.bgColor} border border-${service.borderColor} rounded-xl w-fit`}>
                <service.icon className={`h-8 w-8 text-slate-300 group-hover:text-white transition-colors duration-300`} />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed text-sm group-hover:text-slate-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Read More Link */}
                <div className="pt-4">
                  <button className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/20 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA - Responsive Version */}
<div className="text-center mt-16 px-4">
  <div className="max-w-lg mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8">
    {/* Content Container - Stacks on mobile, horizontal on larger screens */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
      
      {/* Left Content */}
      <div className="flex items-center justify-center sm:justify-start space-x-4 flex-shrink-0">
        <div className="p-3 bg-amber-400/10 rounded-full">
          <CheckCircle className="h-6 w-6 text-amber-400" />
        </div>
        <div className="text-center sm:text-left">
          <div className="text-white font-semibold">Great Legal Consultation</div>
          <div className="text-slate-300 text-sm">Get expert advice for your case</div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25 w-full sm:w-auto whitespace-nowrap">
        Schedule Consultation
      </button>
      
    </div>
  </div>
</div>
    </section>
  )
}