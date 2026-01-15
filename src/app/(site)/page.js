import React from 'react'
import Hero from '@/components/sections/hero'
import Portfolio from '@/components/sections/portfolio'
import SkillsSection from '@/components/sections/skills'

import { getProjects, getSkills, getCategories } from '@/utlits/sanity';

const Home = async () => {
    const projects = await getProjects();
    const skills = await getSkills();
    const categories = await getCategories();
    return (
        <>
            <Hero />
            <SkillsSection skills={skills} />
            <Portfolio projects={projects} categories={categories} />
        </>
    )
}

export default Home