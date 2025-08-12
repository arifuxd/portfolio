import React from 'react'
import Pricing from '@/components/sections/pricing'
import ServiceGrid from '@/components/sections/serviceGrid'
import SkillsSection from '@/components/sections/skills'

const Service = () => {
    return (
        <>
            <ServiceGrid />
            <SkillsSection />
            <Pricing />
        </>
    )
}

export default Service