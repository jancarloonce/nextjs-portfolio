// This ensures the page uses the (main) layout
"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styles from "./profiles.module.css"

export default function ProfilesPage() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const router = useRouter()

  const handleProfileSelect = (profile: string) => {
    setSelectedProfile(profile)
    // Redirect to the intro page with the selected profile
    setTimeout(() => {
      router.push(`/intro?profile=${profile.toLowerCase()}`)
    }, 400)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl md:text-4xl text-gray-200 mb-12">Who&apos;s Looking?</h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <button
          onClick={() => handleProfileSelect("Developer")}
          className={`${styles.profileButton} ${selectedProfile === "Developer" ? styles.selected : ""}`}
        >
          <div className={styles.profileWrapper}>
            <Image
              src="/developer.jpg"
              alt="Developer Profile"
              width={200}
              height={200}
              className={styles.profileImage}
              priority
            />
          </div>
          <span className="mt-4 text-gray-300 text-lg">Developer</span>
        </button>

        <button
          onClick={() => handleProfileSelect("Recruiter")}
          className={`${styles.profileButton} ${selectedProfile === "Recruiter" ? styles.selected : ""}`}
        >
          <div className={styles.profileWrapper}>
            <Image
              src="/recruiter.jpg"
              alt="Recruiter Profile"
              width={200}
              height={200}
              className={styles.profileImage}
              priority
            />
          </div>
          <span className="mt-4 text-gray-300 text-lg">Recruiter</span>
        </button>
      </div>
    </div>
  )
}

