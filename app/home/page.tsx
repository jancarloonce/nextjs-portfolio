import Hero from "../components/Hero"
import ProjectRow from "../components/ProjectRow"
import { Suspense } from "react"
import Loading from "../components/Loading"

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
  {
    title: "Mobile Development",
    projects: [
      {
        id: "5",
        title: "Fitness Tracker App",
        image: "https://picsum.photos/seed/fitness/400/300",
        category: "React Native",
      },
      { id: "6", title: "Recipe Finder", image: "https://picsum.photos/seed/recipe/400/300", category: "Flutter" },
      {
        id: "7",
        title: "Travel Planner",
        image: "https://picsum.photos/seed/travel/400/300",
        category: "React Native",
      },
      {
        id: "8",
        title: "Language Learning Game",
        image: "https://picsum.photos/seed/language/400/300",
        category: "Unity",
      },
    ],
  },
  {
    title: "UI/UX Design",
    projects: [
      {
        id: "9",
        title: "Banking App Redesign",
        image: "https://picsum.photos/seed/banking/400/300",
        category: "Mobile UI",
      },
      {
        id: "10",
        title: "E-learning Platform",
        image: "https://picsum.photos/seed/elearning/400/300",
        category: "Web UI",
      },
      {
        id: "11",
        title: "Smart Home Interface",
        image: "https://picsum.photos/seed/smarthome/400/300",
        category: "IoT UI",
      },
      {
        id: "12",
        title: "Food Delivery App",
        image: "https://picsum.photos/seed/fooddelivery/400/300",
        category: "Mobile UI",
      },
    ],
  },
]

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8">
          {projectsData.map((row, index) => (
            <ProjectRow key={index} title={row.title} projects={row.projects} />
          ))}
        </div>
      </main>
    </Suspense>
  )
}

