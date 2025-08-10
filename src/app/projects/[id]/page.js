import Image from 'next/image'
import React from 'react'
import { projectsData } from '@/utlits/fackData/projectData'
import { notFound } from 'next/navigation'

const SingleProject = ({ params }) => {
    const project = projectsData.find(p => p.id.toString() === params.id)
    
    if (!project) {
        notFound()
    }

    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>{project.category} - {project.client}</p>
                        <h1>{project.title}</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={project.coverImage} alt={project.title} />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>{project.year}</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>{project.client}</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>{project.services}</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>{project.category}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Description</h2>
                            {project.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    {project.gallery.map((image, index) => (
                        <div key={index} className="col-lg-6">
                            <div className={`single-image wow fadeInUp delay-0-${(index + 1) * 2}s`}>
                                <Image 
                                    width={633} 
                                    height={679} 
                                    sizes='100%' 
                                    style={{width:"100%", height:"auto"}} 
                                    src={image} 
                                    alt={`gallery-${index + 1}`} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SingleProject
