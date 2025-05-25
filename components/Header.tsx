'use client'

import { Scale, Download, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="GCS Law Firm" 
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  // Fallback to text if image not found
                  e.currentTarget.style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
                }}
              />
              <div className="hidden">
                <div className="flex items-center space-x-2 text-amber-400">
                  <Scale className="h-8 w-8" />
                  <span className="text-xl font-bold">GCS Law</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Brochure Section */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="https://www.gcsl.in/wp-content/uploads/2020/01/GROW-ON-CONSULTANCY-SERVICES-23-dec.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-1 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <Download className="h-4 w-4 text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                Download Brochure
              </span>
            </Link>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-slate-300">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>+91-124-4201010</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>info@gcsl.in</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <Link
                href="https://www.facebook.com/yatish.goel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-700/50 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-4 w-4 text-slate-300 hover:text-white" />
              </Link>
              <Link
                href="https://x.com/i/flow/login?redirect_after_login=%2Fyatishgoel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-700/50 hover:bg-sky-500 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-4 w-4 text-slate-300 hover:text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/gcsl-law-firm/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-700/50 hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-4 w-4 text-slate-300 hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
              <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
                <div className="w-full h-0.5 bg-slate-300"></div>
                <div className="w-full h-0.5 bg-slate-300"></div>
                <div className="w-full h-0.5 bg-slate-300"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}