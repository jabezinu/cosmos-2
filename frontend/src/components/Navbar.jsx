import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', href: '#about', icon: '✦' },
    { name: 'Menu', href: '#menu', icon: '◊' },
    { name: 'Contact Us', href: '#contact', icon: '✧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Cosmic background effect */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-indigo-950/20 via-purple-950/10 to-transparent pointer-events-none z-40"></div>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Cosmic Brand */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative">
                <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 hover:from-cyan-200 hover:via-purple-200 hover:to-pink-200 transition-all duration-500 transform group-hover:scale-105">
                  Cosmos
                </h1>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"></div>
                <Sparkles className="absolute -top-1 -right-2 w-5 h-5 text-cyan-300 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group relative px-6 py-3 text-white/90 hover:text-white font-semibold transition-all duration-300 overflow-hidden rounded-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span className="text-cyan-300 group-hover:text-white transition-colors duration-300">{link.icon}</span>
                      <span>{link.name}</span>
                    </span>
                    
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 rounded-full"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-cyan-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 blur-md transition-all duration-500 rounded-full"></div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-500 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative p-3 text-white/90 hover:text-white transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-sm"></div>
                <div className="relative z-10">
                  {isMenuOpen ? (
                    <X className="w-7 h-7 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Menu className="w-7 h-7 transform rotate-0 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-80 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}>
          <div className="px-6 py-6 bg-black/90 backdrop-blur-xl border-t border-white/10">
            <div className="space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center space-x-4 px-4 py-3 text-white/90 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:via-purple-500/10 hover:to-pink-500/10"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-2xl text-cyan-300 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
                    {link.icon}
                  </span>
                  <span className="text-lg">{link.name}</span>
                  <div className="flex-1"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Animated particles background effect */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <div className="absolute top-10 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-32 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-16 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </>
  );
};

export default Navbar;