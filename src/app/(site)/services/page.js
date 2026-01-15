import React from 'react'
import Pricing from '@/components/sections/pricing'
import ServiceGrid from '@/components/sections/serviceGrid'
import SkillsSection from '@/components/sections/skills'
import { getSkills } from '@/utlits/sanity'

const Service = async () => {
    const skills = await getSkills();
    return (
        <>
            <ServiceGrid />
            <SkillsSection skills={skills} />
            {/* <Pricing /> */}
        </>
    )
}

export default Service