const About = () => {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            I'm a passionate Full Stack Developer and UI/UX Designer with experience in creating beautiful, functional,
            and user-centered digital experiences. With a background in both design and development, I bring a unique
            perspective to every project.
          </p>
          <p>
            When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source
            projects, or enjoying a good cup of coffee while sketching new ideas.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <ul className="grid grid-cols-2 gap-2">
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">JavaScript</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">TypeScript</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">React</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Next.js</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Node.js</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Express</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">MongoDB</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">SQL</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">HTML/CSS</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Tailwind CSS</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Figma</li>
            <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Adobe XD</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About

