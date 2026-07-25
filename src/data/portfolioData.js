
import profileImg from '../assets/images/profile_bhabina_babu_1784952225293.jpg';
import vtuDashboardImg from '../assets/images/dashboard.jpeg';
import vtuAnalysisImg from '../assets/images/New Analysis.jpeg';
import vtuRankingsImg from '../assets/images/Rankings.jpeg';
import vtuReportsImg from '../assets/images/Reports.jpeg';
import vtuLoginImg from '../assets/images/login.jpeg';

import pdfToolkitHomeImg from '../assets/images/Home Page.png';
import pdfToolkitMergeImg from '../assets/images/PDF Merge Tool.png';
import pdfToolkitSplitImg from '../assets/images/PDF Split Tool.png';

import idCardGenThumbImg from '../assets/images/id.jpeg';
import idCardGenDetailImg from '../assets/images/id card.jpeg';

export const portfolioData = {
  name: "Bhabina Babu",
  location: "Bengaluru, Karnataka",
  phone: "+91 7411448452",
  email: "bhabinababu@gmail.com",
  linkedin: "https://linkedin.com/in/bhabina-babu",
  github: "https://github.com/Bhabina2005",

  summary: "Information Science and Engineering undergraduate currently pursuing the 7th semester at Gopalan College of Engineering and Management with a CGPA of 8.64. Passionate about software development and problem-solving, with hands-on experience developing academic projects and web applications. Seeking a Software Engineering Internship to apply my technical skills, gain industry experience, and contribute to innovative software solutions.",

  college: "Gopalan College of Engineering and Management",
  degree: "Bachelor of Engineering (Information Science and Engineering)",
  graduationYear: "2027",
  cgpa: "8.64/10",
  profileImage: profileImg,

  contact: {
    location: "Bengaluru, Karnataka",
    email: "bhabinababu@gmail.com",
    phone: "+91 7411448452",
    linkedin: "https://linkedin.com/in/bhabina-babu",
    github: "https://github.com/Bhabina2005"
  },

  education: [
  {
    id: "edu-1",
    institution: "Gopalan College of Engineering and Management",
    location: "Bengaluru, Karnataka",
    degree: "Bachelor of Engineering (Information Science and Engineering)",
    expectedGraduation: "Expected Graduation: 2027",
    cgpa: "CGPA: 8.64/10"
  }],


  skillCategories: [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript"]
  },
  {
    title: "Frameworks",
    skills: ["Flask"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Databases",
    skills: ["SQLite", "MySQL"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  },
  {
    title: "Cloud",
    skills: ["AWS (EC2)"]
  }],


  projects: [
  {
    id: "vtu-analytics",
    title: "VTU Academic Result Analytics and Performance Prediction System (Ongoing)",
    techStack: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    bullets: [
    "Developed a web application to analyze VTU students’ academic performance.",
    "Implemented SGPA calculation, rank analysis, subject-wise reports, and performance analytics."],

    image: vtuDashboardImg,
    gallery: [vtuDashboardImg, vtuAnalysisImg, vtuRankingsImg, vtuReportsImg, vtuLoginImg],
    githubRepo: "https://github.com/Bhabina2005/VTU-Academic-Analytics"
  },
  {
    id: "pdf-toolkit",
    title: "PDF Toolkit",
    techStack: ["HTML", "CSS", "JavaScript"],
    bullets: [
    "Developed a responsive web application to merge and split PDF files.",
    "Designed an intuitive interface using HTML, CSS, and JavaScript.",
    "Implemented a user-friendly interface for efficient PDF document management."],

    image: pdfToolkitHomeImg,
    gallery: [pdfToolkitHomeImg, pdfToolkitMergeImg, pdfToolkitSplitImg],
    liveDemo: "https://bhabina2005.github.io/pdf-toolkit/",
    githubRepo: "https://github.com/Bhabina2005/pdf-toolkit"
  },
  {
    id: "student-id-generator",
    title: "Student ID Card Generator",
    techStack: ["HTML", "CSS", "JavaScript"],
    bullets: [
    "Built a web application to generate printable student ID cards dynamically.",
    "Implemented customizable templates and dynamic form inputs.",
    "Enabled real-time preview and printable ID card generation."],

    image: idCardGenThumbImg,
    gallery: [idCardGenThumbImg, idCardGenDetailImg],
    liveDemo: "https://bhabina2005.github.io/MultiStudent-ID-Card-Portal/",
    githubRepo: "https://github.com/Bhabina2005/MultiStudent-ID-Card-Portal"
  }],


  certifications: [
  {
    id: "cert-1",
    title: "Introduction to Amazon EC2"
  },
  {
    id: "cert-2",
    title: "HTML, CSS, and JavaScript for Web Developers"
  }],


  languages: [
  "English",
  "Kannada",
  "Malayalam"]

};
