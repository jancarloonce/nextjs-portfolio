import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  title: string
  image: string
  category: string
}

interface ProjectRowProps {
  title: string
  projects: Project[]
}

const ProjectRow: React.FC<ProjectRowProps> = ({ title, projects }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className="flex-none w-64 hover:scale-105 transition-transform duration-200"
          >
            <div className="relative h-36 mb-2">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded object-cover"
                priority={false}
              />
            </div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.category}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProjectRow

