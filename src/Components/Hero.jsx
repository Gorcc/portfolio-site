import React from 'react'
import "../Styles/Hero.scss"
import HeroImg from "../Assets/hero-img.png"
import Svg from "../Assets/waving-hand-medium-skin-tone-svgrepo-com.svg"

const Hero = () => {
  return (
    <div className='hero-container'>
        <img src={HeroImg} alt="Image" />
        <h1>Hey, I'm Deniz Görkem </h1>
        <h2>Software Developer</h2>
        <a href="#about">About Me ↓</a>
    </div>
  )
}

export default Hero