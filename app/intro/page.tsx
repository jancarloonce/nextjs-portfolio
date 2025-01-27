"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./intro.module.css"

export default function IntroPage() {
  const [showContent, setShowContent] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setShowContent(true)
    const timer = setTimeout(() => {
      router.push("/home")
    }, 4000) // Redirect after 4 seconds

    return () => clearTimeout(timer)
  }, [router])

  if (!showContent) return null

  return (
    <div className={styles.introContainer}>
      <div className={styles.txt}>JAN CARLO ONCE</div>
    </div>
  )
}

