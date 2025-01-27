import Link from "next/link"
import Image from "next/image"
import { Play, Info } from "lucide-react"

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-16 xl:px-24 max-w-screen-xl">
        <div className="flex flex-col items-start space-y-4 md:ml-12">
          <Image
            src="/images/profile-pic.jpg"
            alt="Jan Carlo Once"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Jan Carlo Once</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white opacity-90">
            Software Engineer | Fullstack Developer | AI/ML Consultant | Cloud Practitioner
          </p>
          <div className="max-h-48 md:max-h-60 overflow-y-auto pr-4 text-white text-sm sm:text-base md:text-lg opacity-80 custom-scrollbar">
            <p>
              I'm a seasoned Software Engineer with passion for crafting inventive and scalable solutions that cater to
              the diverse needs of clients and industries. With a rich background in cloud computing, machine learning,
              data engineering, and web development, I bring a wealth of expertise to every project I undertake. From
              designing robust data pipelines to developing cutting-edge machine learning models and building
              user-friendly web applications, I thrive on tackling complex challenges and delivering impactful
              solutions. Let's connect and explore how my skills and experience can contribute to your organization's
              success.
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link
              href="/resume.pdf"
              className="bg-white text-black hover:bg-opacity-80 font-bold py-2 px-6 rounded flex items-center transition-colors"
            >
              <Play className="mr-2 text-black fill-current" size={20} />
              Resume
            </Link>
            <Link
              href="https://www.linkedin.com/in/jancarloonce/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-500 bg-opacity-50 text-white hover:bg-opacity-70 font-bold py-2 px-6 rounded flex items-center transition-colors"
            >
              <Info className="mr-2" size={20} />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

