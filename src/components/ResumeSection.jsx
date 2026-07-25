import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, CheckCircle2, Copy, Check } from 'lucide-react';















export const ResumeSection = ({
  name,
  location,
  phone,
  email,
  linkedin,
  github,
  summary,
  college,
  degree,
  graduationYear,
  cgpa
}) => {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const exactResumeText = `Bhabina Babu
Bengaluru, Karnataka
+91 7411448452 | bhabinababu@gmail.com | linkedin.com/in/bhabina-babu | github.com/Bhabina2005

Professional Summary
Information Science and Engineering undergraduate currently pursuing the 7th semester at Gopalan College of Engineering and Management with a CGPA of 8.64. Passionate about software development and problem-solving, with hands-on experience developing academic projects and web applications. Seeking a Software Engineering Internship to apply my technical skills, gain industry experience, and contribute to innovative software solutions.

Education
Gopalan College of Engineering and Management Bengaluru, Karnataka
Bachelor of Engineering (Information Science and Engineering) Expected Graduation: 2027
CGPA: 8.64/10

Projects
VTU Academic Result Analytics and Performance Prediction System (Ongoing)
Python — Flask — SQLite — HTML — CSS — JavaScript
• Developed a web application to analyze VTU students’ academic performance.
• Implemented SGPA calculation, rank analysis, subject-wise reports, and performance analytics.

PDF Toolkit
HTML — CSS — JavaScript
• Developed a responsive web application to merge and split PDF files.
• Designed an intuitive interface using HTML, CSS, and JavaScript.
• Implemented a user-friendly interface for efficient PDF document management.

Student ID Card Generator
HTML — CSS — JavaScript
• Built a web application to generate printable student ID cards dynamically.
• Implemented customizable templates and dynamic form inputs.
• Enabled real-time preview and printable ID card generation.

Technical Skills
Programming Languages: Python, JavaScript
Frameworks: Flask
Web Technologies: HTML5, CSS3, Bootstrap, Tailwind CSS
Databases: SQLite, MySQL
Developer Tools: Git, GitHub, VS Code, Postman
Cloud: AWS (EC2)

Certifications
• Introduction to Amazon EC2
• HTML, CSS, and JavaScript for Web Developers

Languages
• English
• Kannada
• Malayalam`;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      const element = document.createElement("a");
      const file = new Blob([exactResumeText], { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = `Bhabina_Babu_Resume.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setDownloading(false);
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(exactResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
            
            <FileText className="w-3.5 h-3.5" />
            <span>Resume Document</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            
            Resume Document
          </motion.h2>
        </div>

        {/* Resume Preview Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Header Action Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{name} — Resume</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{college} • CGPA: {cgpa}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Text' : 'Copy Resume Text'}</span>
              </button>

              <button
                onClick={handleDownload}
                id="resume-download-btn"
                disabled={downloading}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 transition-all focus:outline-none">
                
                <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                <span>{downloading ? 'Downloading...' : 'Download Resume'}</span>
              </button>
            </div>
          </div>

          {/* Clean Document View */}
          <div className="pt-6 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap bg-slate-50/80 dark:bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-x-auto">
            {exactResumeText}
          </div>

        </motion.div>

      </div>
    </section>);

};
