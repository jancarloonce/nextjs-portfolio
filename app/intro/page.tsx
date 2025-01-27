"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./intro.module.css"

export default function IntroPage() {
  const [showContent, setShowContent] = useState(false)
  const [audioPlayed, setAudioPlayed] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setShowContent(true)
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true)
    }, 3000)
    const redirectTimer = setTimeout(() => {
      router.push("/home")
    }, 3500)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(redirectTimer)
    }
  }, [router])

  const playAudio = () => {
    if (!audioPlayed) {
      const audio = new Audio(
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netflix-intro-sound-x2OefXjM6r5wjD5JewUJ2i8HdqiqQv.mp3",
      )
      audio.play()
      setAudioPlayed(true)
    }
  }

  if (!showContent) return null

  return (
    <div className={`${styles.introContainer} ${fadeOut ? styles.fadeOut : ""}`} onClick={playAudio}>
      <div className={styles.txt}>JAN CARLO ONCE</div>
      {!audioPlayed && <div className={styles.playPrompt}>Click to play sound</div>}
    </div>
  )
}

