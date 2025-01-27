"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import styles from "./intro.module.css"

export default function IntroPage() {
  const [showContent, setShowContent] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const profile = searchParams.get("profile")

  useEffect(() => {
    setShowContent(true)
    const audio = new Audio(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netflix-intro-sound-x2OefXjM6r5wjD5JewUJ2i8HdqiqQv.mp3",
    )
    audio.play()

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true)
    }, 3000)

    const redirectTimer = setTimeout(() => {
      router.push(`/home?profile=${profile}`)
    }, 3500)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(redirectTimer)
      audio.pause()
    }
  }, [router, profile])

  if (!showContent) return null

  return (
    <div className={`${styles.introContainer} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.txt}>JAN CARLO ONCE</div>
    </div>
  )
}

