'use client'

import { useState } from 'react'
import { 
  Scale, 
  Home, 
  Heart, 
  Building2, 
  Gavel, 
  Briefcase,
  Landmark,
  DollarSign,
  Shield,
  Monitor,
  Users,
  Merge,
  TreePine,
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const practiceAreas = [
  { icon: Scale, name: 'Criminal Litigation', color: 'text-red-400' },
  { icon: Home, name: 'Property Disputes', color: 'text-green-400' },
  { icon: Heart, name: 'Matrimonial Disputes', color: 'text-pink-400' },
  { icon: Building2, name: 'Insolvency & Bankruptcy', color: 'text-blue-400' },
  { icon: Gavel, name: 'Arbitration / ADR', color: 'text-purple-400' },
  { icon: Briefcase, name: 'Corporate & Commercial Matters', color: 'text-amber-400' },
  { icon: Landmark, name: 'Banking Laws & DRT Matters', color: 'text-cyan-400' },
  { icon: DollarSign, name: 'Recovery & Financial Matters', color: 'text-emerald-400' },
  { icon: Shield, name: 'Competition Laws', color: 'text-orange-400' },
  { icon: Monitor, name: 'Information Technology Cyber Cases', color: 'text-indigo-400' },
  { icon: Merge, name: 'Mergers & Acquisitions', color: 'text-violet-400' },
  { icon: TreePine, name: 'Environmental Law & NGT Matters', color: 'text-lime-400' },
  { icon: Users, name: 'Service, Labour & Industrial Laws Cases', color: 'text-rose-400' }
]

const whyChooseGCS = [
  {
    title: 'Full Service Excellence',
    description: 'Comprehensive legal services covering all major practice areas with specialized expertise.',
    icon: CheckCircle
  },
  {
    title: 'International Exposure',
    description: 'Global perspective with international experience handling complex cross-border matters.',
    icon: CheckCircle
  },
  {
    title: 'Proven Track Record',
    description: 'Years of successful case handling with highest standards of service and ethics.',
    icon: CheckCircle
  },
  {
    title: 'Client-Centric Approach',
    description: 'Personalized solutions tailored to meet specific needs of corporations and individuals.',
    icon: CheckCircle
  }
]

export default function PracticeAreasSection() {
  const [hoveredArea, setHoveredArea] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 text-amber-400 mb-6">
            <Scale className="h-4 w-4" />
            <span className="text-sm font-medium">Legal Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Practice
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> Areas</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-6" />
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal services across diverse practice areas, ensuring expert representation 
            for cases of any size and complexity.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-20">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className={`group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-slate-700/40 cursor-pointer ${
                hoveredArea === index ? 'shadow-2xl border-amber-400/30' : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredArea(index)}
              onMouseLeave={() => setHoveredArea(null)}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`p-3 bg-slate-700/50 rounded-lg group-hover:bg-slate-600/50 transition-colors duration-300`}>
                  <area.icon className={`h-6 w-6 ${area.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-300 leading-tight">
                  {area.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose GCS Section */}
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Why Choose
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> GCS Law Firm?</span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6" />
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  GCS Law Firm is a full-service law firm based in India, offering a cutting-edge blend 
                  of capabilities to corporations, individuals, and international entities across the globe.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                {whyChooseGCS.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-2 bg-amber-400/10 rounded-lg border border-amber-400/20 group-hover:bg-amber-400/20 transition-colors duration-300">
                      <feature.icon className="h-5 w-5 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-8 border border-slate-600/50">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 text-center mb-8">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-amber-400">13+</div>
                    <div className="text-slate-300 text-sm">Practice Areas</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-amber-400">100%</div>
                    <div className="text-slate-300 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-amber-400">Pan</div>
                    <div className="text-slate-300 text-sm">India Presence</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-amber-400">Global</div>
                    <div className="text-slate-300 text-sm">Recognition</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="text-center">
                  <blockquote className="text-slate-300 italic text-sm leading-relaxed">
                    "We have built a reputation for high-quality work, positive outlook, and the highest 
                    standards of service and ethics. We have notably become the counsel of choice."
                  </blockquote>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}