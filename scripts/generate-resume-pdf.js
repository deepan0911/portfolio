import { jsPDF } from "jspdf"

// Generate PDF resume
function generateResumePDF() {
  const doc = new jsPDF()

  // Set font
  doc.setFont("helvetica")

  // Header
  doc.setFontSize(24)
  doc.setFont("helvetica", "bold")
  doc.text("DEEPAN N", 105, 20, { align: "center" })

  doc.setFontSize(14)
  doc.setFont("helvetica", "normal")
  doc.text("Aspiring Software Developer", 105, 30, { align: "center" })

  // Contact Info
  doc.setFontSize(10)
  doc.text("+91 9360648801", 20, 45)
  doc.text("deepann2004@gmail.com", 70, 45)
  doc.text("www.linkedin.com/in/deepan0911", 130, 45)
  doc.text("Coimbatore, India", 105, 52, { align: "center" })

  // Profile Summary
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("PROFILE SUMMARY", 20, 65)

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  const profileText = `Passionate Full-Stack Developer with expertise in React, Node.js, Express, MongoDB, and Java. 
Experienced in managing databases, authentication, and working with cloud services like AWS and Firebase. 
Strong problem-solving skills, writes clean and efficient code, and thrives in agile teams. Currently 
pursuing a Bachelor's in Computer Science and eager to learn, grow, and contribute to innovative projects.`

  const splitProfile = doc.splitTextToSize(profileText, 170)
  doc.text(splitProfile, 20, 75)

  // Education
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("EDUCATION", 20, 105)

  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Bachelor of Engineering - Computer Science and Engineering", 20, 115)
  doc.setFont("helvetica", "normal")
  doc.text("Sri Shakthi Institute of Engineering and Technology", 20, 122)
  doc.text("10/2022 - 10/2026 | Coimbatore, India | CGPA: 7.7", 20, 129)

  doc.setFont("helvetica", "bold")
  doc.text("Higher Secondary Education", 20, 140)
  doc.setFont("helvetica", "normal")
  doc.text("Hindusthan Matriculation and Higher Secondary School", 20, 147)
  doc.text("2021-2022 | Coimbatore, India | Percentage: 89%", 20, 154)

  doc.setFont("helvetica", "bold")
  doc.text("SSLC", 20, 165)
  doc.setFont("helvetica", "normal")
  doc.text("Hindusthan Matriculation and Higher Secondary School", 20, 172)
  doc.text("2019-2020 | Coimbatore, India | Percentage: 89%", 20, 179)

  // Skills
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("SKILLS", 20, 195)

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  const skillsText = `Java, JDBC, HTML, CSS, JavaScript, React.js, SQL(MySQL), NoSQL (MongoDB, Firebase), 
Git & GitHub, Cloud Computing (AWS)`
  const splitSkills = doc.splitTextToSize(skillsText, 170)
  doc.text(splitSkills, 20, 205)

  // Areas of Interest
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("AREAS OF INTEREST", 20, 225)

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("• Software Developer", 20, 235)
  doc.text("• Full-Stack Developer", 20, 242)
  doc.text("• Mobile App Developer", 20, 249)
  doc.text("• Cloud Engineer", 20, 256)

  // Add new page
  doc.addPage()

  // Projects
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("PROJECTS", 20, 20)

  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("1. Automated Cafe Management and Billing System", 20, 35)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Developed a cafe system for menu, orders, and billing using Java and MySQL.", 20, 42)

  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("2. Online Bus Booking Platform", 20, 55)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Built a Flutter & Firebase bus booking app with real-time database, secure login, and payments.", 20, 62)

  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("3. Bike Service and Repair Scheduling Platform", 20, 75)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Developed a bike service platform using HTML, CSS, JS, PHP, MySQL with admin/customer features.", 20, 82)

  // Courses
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("COURSES", 20, 105)

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Full Stack Web Development - Unstop", 20, 115)
  doc.text("Cloud Computing - NPTEL", 20, 122)
  doc.text("MongoDB Essential - LinkedIn Learning", 20, 129)

  // Key Achievements
  doc.setFontSize(14)
  doc.setFont("helvetica", "bold")
  doc.text("KEY ACHIEVEMENTS", 20, 150)

  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Cloud Computing Training", 20, 165)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Successfully completed a one-month hands-on training in Cloud Computing by Rampex Technology", 20, 172)

  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("Research Publication", 20, 185)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  const publicationText = `Published "3D-FPS Game Development" in the International Journal of All Research 
Education and Scientific Methods.`
  const splitPublication = doc.splitTextToSize(publicationText, 170)
  doc.text(splitPublication, 20, 192)

  // Save the PDF
  doc.save("Deepan_N_Resume.pdf")
}

// Call the function to generate PDF
generateResumePDF()
