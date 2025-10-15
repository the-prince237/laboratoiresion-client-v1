"use client"

import React, { useState, useEffect } from 'react';

export const Contacts = () => {
  const [, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      gradient: 'from-blue-600 to-blue-400',
      shadowColor: 'rgba(59, 130, 246, 0.5)',
      link: '#',
      description: 'Professional Network'
    },
    {
      name: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      gradient: 'from-slate-800 to-slate-600',
      shadowColor: 'rgba(51, 65, 85, 0.5)',
      link: '#',
      description: 'Social Updates'
    },
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
        </svg>
      ),
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      shadowColor: 'rgba(219, 39, 119, 0.5)',
      link: '#',
      description: 'Visual Stories'
    },
    {
      name: 'YouTube',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      gradient: 'from-red-600 to-red-400',
      shadowColor: 'rgba(239, 68, 68, 0.5)',
      link: '#',
      description: 'Video Content'
    }
  ];

  return (
    <div className="min-h-screen py-25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative w-full">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prenez Contact
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent">
              Contactez Nous
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Rejoignez notre communauté de partenaires et de patients reconnaissants, et restez connectés à toutes nous mises à jour.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
          {socialPlatforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.link}
              className={`group relative transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-slate-600/50">
                {/* Hover Gradient Effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${platform.shadowColor}, transparent 70%)`,
                    filter: 'blur(40px)'
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${platform.gradient} text-white transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    {platform.icon}
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-white font-semibold text-lg mb-1 transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-gray-500 text-sm transition-colors duration-300 group-hover:text-gray-400">
                    {platform.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="mt-4 flex items-center text-gray-600 group-hover:text-white transition-all duration-300">
                    <span className="text-sm font-medium group-hover:translate-x-0 transition-all duration-300">
                      Connect
                    </span>
                    <svg 
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            <span className="relative z-10">Explore All Platforms</span>
            <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            
            {/* Button Shimmer */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </button>
        </div>
      </div>

      {/* Mouse Follow Light */}
      <div 
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-[100px] transition-all duration-200 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)',
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />
    </div>
  );
};