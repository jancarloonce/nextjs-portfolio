import { redirect } from "next/navigation"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ProjectRow from "../components/ProjectRow"

const projectsData = [
  {
    title: "Web Development",
    projects: [
      {
        id: "1",
        title: "E-commerce Platform",
        image: "https://picsum.photos/seed/ecommerce/400/300",
        category: "Full Stack",
      },
      {
        id: "2",
        title: "Social Media Dashboard",
        image: "https://picsum.photos/seed/dashboard/400/300",
        category: "Frontend",
      },
      {
        id: "3",
        title: "Task Management App",
        image: "https://picsum.photos/seed/taskapp/400/300",
        category: "Full Stack",
      },
      {
        id: "4",
        title: "Portfolio Website",
        image: "https://picsum.photos/seed/portfolio/400/300",
        category: "Frontend",
      },
    ],
  },
  // ... (include other project categories)
]

export default function DeveloperPage() {
  return (
    <>
      <Header selectedProfile="Developer" />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8">
          {projectsData.map((row, index) => (
            <ProjectRow key={index} title={row.title} projects={row.projects} />
          ))}
        </div>
      </main>
    </>
  )
}

