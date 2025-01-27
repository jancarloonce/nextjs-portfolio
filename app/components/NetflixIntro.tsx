"use client"

import type React from "react"
import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

const NetflixIntro: React.FC = () => {
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    setShowIntro(true)
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!showIntro) return null

  return (
    <Container>
      <netflixintro>
        <Helper1>
          <EffectBrush />
          <EffectLumieres />
        </Helper1>
        <Helper2>
          <EffectBrush />
        </Helper2>
        <Helper3>
          <EffectBrush />
        </Helper3>
        <Helper4>
          <EffectBrush />
        </Helper4>
      </netflixintro>
    </Container>
  )
}

const zoomIn = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(15); }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  overflow: hidden;
`

const netflixintro = styled.div`
  display: block;
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  animation-name: ${zoomIn};
  animation-delay: 0.5s;
  animation-duration: 3.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  background-size: 4000px;
  background-position: -1950px 0;

  &::before {
    content: "";
    position: absolute;
    display: block;
    background-color: #000000;
    width: 150%;
    height: 30%;
    left: -25%;
    bottom: -27%;
    border-radius: 50%;
    z-index: 5;
    transform-origin: left center;
    background-size: 4000px;
    background-position: -1950px 0;
  }
`

const Helper = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Helper1 = styled(Helper)`
  left: 22.4%;
  width: 19.5%;
  height: 100%;
  transform: rotate(180deg);
  animation: fading-lumieres-box 2s ease-in-out 0.6s forwards;
`

const Helper2 = styled(Helper)`
  left: 57.8%;
  width: 19.5%;
  height: 100%;
  transform: rotate(180deg);
`

const Helper3 = styled(Helper)`
  left: 40.5%;
  width: 19%;
  height: 150%;
  transform-origin: center center;
  transform: rotate(-19.5deg);
  box-shadow: 0px 0px 35px -12px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`

const Helper4 = styled(Helper)`
  left: 38%;
  width: 19.5%;
  height: 100%;
  transform: rotate(180deg);
`

const brushMoving = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`

const EffectBrush = styled.div`
  position: absolute;
  width: 100%;
  height: 300%;
  top: 0;
  overflow: hidden;
  animation: ${brushMoving} 2.5s ease-in-out forwards;

  &::before {
    display: block;
    content: "";
    position: absolute;
    background-color: #e40913;
    width: 100%;
    height: 70%;
    box-shadow: 0px 0px 29px 24px #e40913;
  }
`

const showingLumieres = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const lumieresMovingRight = keyframes`
  0% { transform: translate(0); }
  40% { transform: translate(-10px) scaleX(1); }
  50% { transform: translate(-60px); }
  100% { transform: translate(-120px) scaleX(3); }
`

const lumieresMovingLeft = keyframes`
  0% { transform: translate(0); }
  40% { transform: translate(10px) scaleX(1); }
  50% { transform: translate(60px); }
  100% { transform: translate(120px) scaleX(3); }
`

const EffectLumieres = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${showingLumieres} 2s ease-in-out 1.6s forwards;

  ${[...Array(28)]
    .map(
      (_, i) => `
    .lamp-${i + 1} {
      position: absolute;
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 2 + 1}%;
      height: 100%;
      background-color: ${["#ff0100", "#ffde01", "#ff00cc", "#04fd8f", "#ff0100", "#ff9600", "#0084ff", "#f84006", "#ffc601", "#ff4800", "#fd0100", "#01ffff", "#ffc601", "#ffc601", "#0078fe", "#0080ff", "#ffae01", "#ff00bf", "#a601f4", "#f30b34", "#ff00bf", "#04fd8f", "#01ffff", "#a201ff", "#ec0014", "#0078fe", "#ff0036", "#06f98c"][i % 28]};
      box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
      animation: ${i % 2 === 0 ? lumieresMovingRight : lumieresMovingLeft} 5s ease-in-out infinite;

      &::before {
        content: " ";
        position: absolute;
        left: ${Math.random() * 100}%;
        width: 100%;
        height: 100%;
        background: inherit;
        box-shadow: inherit;
      }
    }
  `,
    )
    .join("")}
`

export default NetflixIntro

