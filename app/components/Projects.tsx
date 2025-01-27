import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description: "A responsive task management application built with Next.js and TypeScript",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/yourusername/task-management-app",
  },
  {
    title: "Portfolio Website",
    description: "A sleek, responsive portfolio website showcasing my projects and skills",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/yourusername/portfolio-website",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

