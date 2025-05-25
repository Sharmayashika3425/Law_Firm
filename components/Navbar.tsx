'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

const menuItems = [
  { name: 'Home', href: '#' },
  {
    name: 'About Us',
    href: '#',
    submenu: [
      { name: 'Who We Are?', href: '#' },
      { name: 'Mission and Values', href: '#' },
      { name: 'Infrastructure', href: '#' },
      { name: 'Courts and Clients', href: '#' }
    ]
  },
  {
    name: 'Practice Areas',
    href: '#',
    submenu: [
      { name: 'Specialized Services', href: '#' },
      { name: 'Other Services', href: '#' }
    ]
  },
  {
    name: 'International Associations',
    href: '#',
    submenu: [
      { name: 'Century International Gold Quality Era Award', href: '#' },
      { name: 'International Co-operation Agreements', href: '#' }
    ]
  },
  { name: 'Legal Education', href: '#' },
  {
    name: 'Media Coverage',
    href: '#',
    submenu: [
      { name: 'TV Channels Coverage', href: '#' },
      { name: 'Print Media Coverage', href: '#' },
      { name: 'Magazines', href: '#' }
    ]
  },
  { name: 'News', href: '#' },
  { name: 'Contact Us', href: '#' }
]

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <nav className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-600/30 sticky top-[73px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <ul className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-1 px-4 py-4 text-slate-200 hover:text-amber-400 transition-all duration-300 hover:bg-slate-700/50 rounded-lg"
                >
                  <span className="font-medium">{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      activeMenu === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className={`absolute top-full left-0 min-w-64 bg-slate-800/95 backdrop-blur-sm border border-slate-600/50 rounded-lg shadow-xl transition-all duration-300 origin-top z-50 ${
                    activeMenu === item.name 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}>
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center space-x-2 px-4 py-3 text-slate-300 hover:text-amber-400 hover:bg-slate-700/50 transition-all duration-200"
                        >
                          <ChevronRight className="h-3 w-3" />
                          <span>{subItem.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="lg:hidden w-full">
            <select className="w-full bg-slate-700 text-slate-200 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400">
              <option>Select Menu</option>
              {menuItems.map((item) => (
                <optgroup key={item.name} label={item.name}>
                  {item.submenu ? (
                    item.submenu.map((subItem) => (
                      <option key={subItem.name} value={subItem.href}>
                        {subItem.name}
                      </option>
                    ))
                  ) : (
                    <option value={item.href}>{item.name}</option>
                  )}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}
