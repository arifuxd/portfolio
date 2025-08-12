import React from 'react'
import Hero from '../components/sections/hero'
import Portfolio from '../components/sections/portfolio'
import SkillsSection from '@/components/sections/skills'

const Home = () => {
    return (
        <>
            <Hero />
            <SkillsSection />
            <Portfolio/>
        </>
    )
}

export default Home