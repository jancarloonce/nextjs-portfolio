import Link from "next/link"
import Image from "next/image"
import { Play, AlertCircle } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative h-screen">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-16 xl:px-24 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start space-y-4 md:ml-12">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic.jpg-lpey6X2ljrpV2Ip9WS63VWU9Jj2aFD.jpeg"
              alt="Jan Carlo Once"
              fill
              className="rounded-full object-cover shadow-lg"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Jan Carlo Once</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white opacity-90">
            Software Engineer | Fullstack Developer | AI/ML Consultant | Cloud Practitioner
          </p>
          <div className="max-h-48 md:max-h-60 overflow-y-auto pr-4 text-white text-sm sm:text-base md:text-lg opacity-80 custom-scrollbar">
            <p>
              I'm a seasoned Software Engineer with a passion for crafting inventive and scalable solutions that cater
              to the diverse needs of clients and industries. With a rich background in cloud computing, machine
              learning, data engineering, and web development, I bring a wealth of expertise to every project I
              undertake. From designing robust data pipelines to developing cutting-edge machine learning models and
              building user-friendly web applications, I thrive on tackling complex challenges and delivering impactful
              solutions. Let's connect and explore how my skills and experience can contribute to your organization's
              success.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              Resume
            </Link>
            <Link
              href="https://www.linkedin.com/in/jancarlo-once/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
            >
              <AlertCircle className="w-5 h-5 mr-2" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

