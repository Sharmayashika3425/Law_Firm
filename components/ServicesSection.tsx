'use client';

import { useState } from 'react';
import {
  Scale,
  Home,
  Heart,
  Building2,
  ArrowRight,
  CheckCircle,
  Users,
  Globe
} from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: 'Criminal Matters',
    description:
      "We have extensive experience representing clients in criminal matters across India, with a proven track record of successful case handling.",
    color: 'from-red-400 to-red-500',
    bgColor: 'red-100',
    borderColor: 'red-200'
  },
  {
    icon: Home,
    title: 'Property Disputes',
    description:
      'Handling complex property litigation with expertise, ensuring rightful possession and resolution of disputes.',
    color: 'from-green-400 to-green-500',
    bgColor: 'green-100',
    borderColor: 'green-200'
  },
  {
    icon: Heart,
    title: 'Matrimonial Cases',
    description:
      'Providing compassionate guidance and advice in matrimonial disputes, addressing emotions and sensitivities involved.',
    color: 'from-pink-400 to-pink-500',
    bgColor: 'pink-100',
    borderColor: 'pink-200'
  },
  {
    icon: Building2,
    title: 'Insolvency Matters',
    description:
      'Assisting corporate entities and stakeholders in complex insolvency proceedings with strategic solutions.',
    color: 'from-blue-400 to-blue-500',
    bgColor: 'blue-100',
    borderColor: 'blue-200'
  }
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-2 text-amber-600 mb-4">
            <Users className="h-4 w-4" />
            <span className="text-sm font-medium">Our Legal Services</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Legal
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {' '}
              Solutions
            </span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mb-4" />

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide expert legal representation across diverse practice areas, ensuring personalized solutions for individuals, corporations, and international entities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md cursor-pointer ${
                hoveredCard === index ? 'shadow-lg' : 'shadow-sm'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                boxShadow:
                  hoveredCard === index
                    ? '0 10px 20px -5px rgba(0, 0, 0, 0.1)'
                    : undefined
              }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`relative mb-4 p-3 bg-${service.bgColor} border border-${service.borderColor} rounded-lg w-fit`}
              >
                <service.icon className="h-6 w-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Read More Link */}
                <div className="pt-2">
                  <button className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-500 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-300/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 px-4">
          <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-xl p-6 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
              {/* Left Content */}
              <div className="flex items-center justify-center sm:justify-start space-x-4 flex-shrink-0">
                <div className="p-3 bg-amber-100 rounded-full">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-gray-800 font-semibold">Great Legal Consultation</div>
                  <div className="text-gray-600 text-sm">Get expert advice for your case</div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-amber-400/25 w-full sm:w-auto whitespace-nowrap">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
