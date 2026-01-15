import React from 'react';
import { notFound } from 'next/navigation';
import { getProject } from '@/utlits/sanity';
import ProjectDetails from '@/components/sections/ProjectDetails';

const SingleProject = async ({ params }) => {
    const project = await getProject(params.slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetails project={project} />;
}

export default SingleProject;

export async function generateMetadata({ params }) {
    const project = await getProject(params.slug);
    if (!project) return { title: 'Not Found' };
    return {
        title: `${project.title} - Portfolio`,
        description: project.category
    };
}
