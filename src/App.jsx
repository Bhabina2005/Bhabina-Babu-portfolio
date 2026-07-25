import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundElements } from './components/BackgroundElements';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-300 font-sans antialiased relative">
        {/* Floating Background Effects */}
        <BackgroundElements />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 space-y-4">
          <Hero
            name={portfolioData.name}
            college={portfolioData.college}
            degree={portfolioData.degree}
            cgpa={portfolioData.cgpa}
            graduationYear={portfolioData.graduationYear}
            summary={portfolioData.summary}
            profileImage={portfolioData.profileImage}
            location={portfolioData.location}
            email={portfolioData.email}
            phone={portfolioData.phone}
            linkedin={portfolioData.linkedin}
            github={portfolioData.github} />
          

          <About
            summary={portfolioData.summary}
            college={portfolioData.college}
            degree={portfolioData.degree}
            cgpa={portfolioData.cgpa}
            graduationYear={portfolioData.graduationYear}
            location={portfolioData.location} />
          

          <Education educationList={portfolioData.education} />

          <Skills categories={portfolioData.skillCategories} />

          <Projects projects={portfolioData.projects} />

          <Certifications certifications={portfolioData.certifications} />

          <Languages languages={portfolioData.languages} />

          <ResumeSection
            name={portfolioData.name}
            location={portfolioData.location}
            phone={portfolioData.phone}
            email={portfolioData.email}
            linkedin={portfolioData.linkedin}
            github={portfolioData.github}
            summary={portfolioData.summary}
            college={portfolioData.college}
            degree={portfolioData.degree}
            graduationYear={portfolioData.graduationYear}
            cgpa={portfolioData.cgpa} />
          

          <Contact contact={portfolioData.contact} />
        </main>

        {/* Footer */}
        <Footer name={portfolioData.name} contact={portfolioData.contact} />
      </div>
    </ThemeProvider>);

}
