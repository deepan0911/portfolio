"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Cloud,
  Smartphone,
  BookOpen,
  ChevronDown,
  ArrowUp,
  Download,
  Github,
  ExternalLink,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "certifications", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/resume/RESUME_1PG.pdf" // This is the correct path for web apps
    link.download = "Deepan_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ]

  const skills = [
    { name: "Java", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "HTML/CSS", category: "Web" },
    { name: "React.js", category: "Web" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
  ]

  const projects = [
    {
      title: "Automated Cafe Management System",
      description:
        "Comprehensive cafe management solution with menu management, order processing, and automated billing system built with Java and MySQL.",
      tech: ["Java", "MySQL", "JDBC"],
      features: ["Menu Management", "Order Processing", "Billing System", "Inventory Tracking"],
      github: "https://github.com/deepan0911/CafeManagementSystem",
      demo: null,
    },
    {
      title: "Online Bus Booking Platform",
      description:
        "Full-featured bus booking application with real-time seat availability, secure payment integration, and user management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth", "Payment Gateway"],
      features: ["Real-time Booking", "Secure Payments", "User Authentication", "Route Management"],
      github: "https://github.com/deepan0911/BusBee",
      demo: "https://bus-bee.vercel.app/",
    },
    {
      title: "Bike Repair Service Scheduling Platform",
      description:
        "Developed a full-stack bike service booking system with responsive user and admin panels, real-time service tracking, mechanized invoicing, email notifications, and repair proof management.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      features: ["Real-time Service Tracking", "Mechanized Invoicing", "Email Notifications", "Repair Proof Management", "Admin Panel", "User Panel"],
      github: "https://github.com/deepan0911/BikeServiceBooking-Mern",
      demo: "https://bike-service-booking-mern.vercel.app/",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Engineering - Computer Science",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      period: "2022 - 2026",
      location: "Coimbatore, India",
      grade: "CGPA: 7.9",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Hindusthan Matriculation and Higher Secondary School",
      period: "2021 - 2022",
      location: "Coimbatore, India",
      grade: "Percentage: 89.16%",
    },
    {
      degree: "SSLC",
      institution: "Hindusthan Matriculation and Higher Secondary School",
      period: "2019 - 2020",
      location: "Coimbatore, India",
      grade: "Percentage: 89.20%",
    },
  ]

  const achievements = [
    {
      title: "Cloud Computing Training",
      description: "Successfully completed one-month hands-on training in Cloud Computing",
      organization: "Rampex Technology",
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      title: "Research Publication",
      description: 'Published "3D-FPS Game Development" in International Journal',
      organization: "International Journal of All Research Education and Scientific Methods",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ]

  const courses = [
    { name: "Full Stack Web Development", provider: "Unstop" },
    { name: "Cloud Computing", provider: "NPTEL" },
    { name: "MongoDB Essential", provider: "LinkedIn Learning" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-900"
            >
              DEEPAN N
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Resume Download Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={downloadResume}
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={downloadResume}
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Full-Stack
              <span className="text-blue-600"> Developer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Passionate developer with expertise in React, Node.js, and cloud technologies. Building innovative
              solutions with clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={downloadResume}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1">
                <div className="w-full h-full rounded-full bg-white p-4">
                  <img src="/images/profile.jpg" alt="Deepan N" className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-full p-4">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-600 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    I'm a passionate Full-Stack Developer currently pursuing my Bachelor's in Computer Science. With
                    expertise in modern web technologies like React, Node.js, and cloud services, I love creating
                    innovative solutions that make a difference.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    My journey in software development has been driven by curiosity and a desire to solve real-world
                    problems through technology. I thrive in collaborative environments and am always eager to learn new
                    technologies and best practices.
                  </p>
                  <div className="flex items-center gap-4 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>Coimbatore, India</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="bg-blue-50 border-blue-200 text-center p-6">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-gray-900 font-semibold mb-2">Software Developer</h3>
                <p className="text-gray-600 text-sm">Building robust applications</p>
              </Card>
              <Card className="bg-indigo-50 border-indigo-200 text-center p-6">
                <Database className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-gray-900 font-semibold mb-2">Full-Stack Developer</h3>
                <p className="text-gray-600 text-sm">End-to-end solutions</p>
              </Card>
              <Card className="bg-purple-50 border-purple-200 text-center p-6">
                <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-gray-900 font-semibold mb-2">Mobile Developer</h3>
                <p className="text-gray-600 text-sm">Cross-platform apps</p>
              </Card>
              <Card className="bg-green-50 border-green-200 text-center p-6">
                <Code className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-gray-900 font-semibold mb-2">Frontend Developer</h3>
                <p className="text-gray-600 text-sm">Interactive web experiences</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-900 font-semibold">{skill.name}</h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {skill.category}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A showcase of my technical expertise through real-world applications, demonstrating proficiency in
              full-stack development, database management, and modern web technologies.
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Project Image/Visual */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-gray-400 text-sm font-mono">
                          {project.title.toLowerCase().replace(/\s+/g, "-")}.dev
                        </div>
                      </div>

                      {/* Code Preview */}
                      <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
                        <div className="text-green-400 mb-2">// {project.title}</div>
                        <div className="text-blue-400">const project = {`{`}</div>
                        <div className="text-white ml-4">
                          name: <span className="text-yellow-300">"{project.title}"</span>,
                        </div>
                        <div className="text-white ml-4">
                          tech:{" "}
                          <span className="text-purple-400">
                            [
                            {project.tech
                              .slice(0, 3)
                              .map((t) => `"${t}"`)
                              .join(", ")}
                            ]
                          </span>
                          ,
                        </div>
                        <div className="text-white ml-4">
                          status: <span className="text-green-300">"completed"</span>
                        </div>
                        <div className="text-blue-400">{`}`}</div>
                      </div>

                      {/* Tech Stack Icons */}
                      <div className="flex justify-center space-x-4 mt-6">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <div
                            key={tech}
                            className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {tech.charAt(0).toUpperCase()}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="space-y-6">
                    {/* Project Number */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="h-px bg-gray-300 flex-1"></div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">{project.title}</h3>

                    {/* Project Description */}
                    <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>

                    {/* Key Features */}
                    <div className="space-y-3">
                      <h4 className="text-gray-900 font-semibold text-lg">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="space-y-3">
                      <h4 className="text-gray-900 font-semibold text-lg">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4 pt-4">
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      {project.demo && (
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{project.tech.length}</div>
                        <div className="text-gray-500 text-sm">Technologies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{project.features.length}</div>
                        <div className="text-gray-500 text-sm">Features</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{project.demo ? "Live" : "Code"}</div>
                        <div className="text-gray-500 text-sm">Status</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                These projects represent just a glimpse of my capabilities. I'm always working on new ideas and would
                love to discuss how I can contribute to your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  onClick={() => window.open("https://github.com/deepan0911", "_blank")}
                >
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-gray-900 font-bold text-lg mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                    <div className="flex justify-between items-center text-gray-600 text-sm mb-2">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{edu.grade}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Certifications & Courses</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-50 border-gray-200 p-6 hover:shadow-lg transition-shadow h-full">
                    <div className="text-center">
                      <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-gray-900 font-semibold mb-3">{course.name}</h3>
                      <Badge variant="outline" className="border-blue-600 text-blue-600">
                        {course.provider}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Key Achievements</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 rounded-full p-3 text-white">{achievement.icon}</div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-xl mb-2">{achievement.title}</h3>
                        <p className="text-gray-700 mb-3">{achievement.description}</p>
                        <Badge className="bg-blue-100 text-blue-800">{achievement.organization}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 text-center p-8 hover:shadow-lg transition-all duration-300">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-gray-900 font-semibold mb-2">Phone</h3>
                <p className="text-gray-700">+91 9360648801</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 text-center p-8 hover:shadow-lg transition-all duration-300">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-gray-900 font-semibold mb-2">Email</h3>
                <p className="text-gray-700">deepann2004@gmail.com</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className="bg-white border-gray-200 text-center p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => window.open("https://www.linkedin.com/in/deepann2004/", "_blank")}
              >
                <Linkedin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-gray-900 font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-700">deepann2004</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card
                className="bg-white border-gray-200 text-center p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => window.open("https://github.com/deepan0911", "_blank")}
              >
                <Github className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-gray-900 font-semibold mb-2">GitHub</h3>
                <p className="text-gray-700">deepan0911</p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white mr-4"
              onClick={() => window.open("mailto:deepann2004@gmail.com", "_blank")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={downloadResume}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">© 2024 Deepan N. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 z-50"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
