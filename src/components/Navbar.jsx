import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
{ name: 'Home', href: '#home' },
{ name: 'About', href: '#about' },
{ name: 'Education', href: '#education' },
{ name: 'Skills', href: '#skills' },
{ name: 'Projects', href: '#projects' },
{ name: 'Certifications', href: '#certifications' },
{ name: 'Languages', href: '#languages' },
{ name: 'Resume', href: '#resume' },
{ name: 'Contact', href: '#contact' }];


export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ?
      'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800/70 shadow-sm' :
      'bg-transparent py-2'}`
      }>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center space-x-2.5 focus:outline-none"
            id="nav-logo">
            
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 p-[2px] shadow-md group-hover:shadow-blue-500/25 transition-all duration-300">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-lg">
                BB
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white tracking-tight text-base sm:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Bhabina Babu
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/60 dark:bg-slate-800/60 p-1.5 rounded-full backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive ?
                  'text-blue-600 dark:text-white font-semibold' :
                  'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`
                  }>
                  
                  {isActive &&
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }} />

                  }
                  <span className="relative z-10">{link.name}</span>
                </a>);

            })}
          </nav>

          {/* Controls: Theme & Resume */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-colors shadow-sm focus:outline-none">
              
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ?
                <Sun className="w-4 h-4 text-amber-400" /> :

                <Moon className="w-4 h-4 text-slate-700" />
                }
              </AnimatePresence>
            </button>

            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, '#resume')}
              id="nav-resume-cta"
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 transition-all focus:outline-none">
              
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              id="mobile-theme-toggle"
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Open menu"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none">
              
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-1.5 shadow-2xl">
          
            {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                isActive ?
                'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold' :
                'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'}`
                }>
                
                  <span>{link.name}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />}
                </a>);

          })}
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>);

};
