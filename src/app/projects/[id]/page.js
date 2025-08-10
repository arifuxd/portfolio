'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { projectsData } from '@/utlits/fackData/projectData'
import { notFound } from 'next/navigation'
import { RiZoomInLine } from '@remixicon/react'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const SingleProject = ({ params }) => {
    const project = projectsData.find(p => p.id.toString() === params.id)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)
    
    if (!project) {
        notFound()
    }

    const openLightbox = (index) => {
        setLightboxIndex(index)
        setLightboxOpen(true)
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
       <div className="single-project-image container">
  <div className="image-wrapper">
    <Image
      src={project.coverImage}
      alt={project.title}
      fill
      style={{ objectFit: "cover", borderRadius: "20px" }}
    />
  </div>
</div>


            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4" >
                        <div className="single-project-page-left wow fadeInUp delay-0-2s " >
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
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div 
                                className={`single-image wow fadeInUp delay-0-${(index + 1) * 2}s gallery-item`}
                                onClick={() => openLightbox(index)}
                            >
                                <div className="gallery-image-wrapper">
                                    <Image 
                                        width={633} 
                                        height={679} 
                                        sizes='100%' 
                                        src={image} 
                                        alt={`gallery-${index + 1}`} 
                                    />
                                    <div className="gallery-overlay">
                                        <RiZoomInLine size={40} color="white" />
                                    </div>
                                </div>
                                <style jsx global>{`
                                    .gallery-item {
                                        cursor: pointer;
                                        margin-bottom: 30px;
                                    }
                                    .gallery-image-wrapper {
                                        position: relative;
                                        overflow: hidden;
                                        border-radius: 20px;
                                    }
                                    .gallery-image-wrapper img {
                                        width: 100%;
                                        height: auto;
                                        display: block;
                                        transition: transform 0.3s ease-in-out;
                                    }
                                    .gallery-overlay {
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        right: 0;
                                        bottom: 0;
                                        background: rgba(0, 0, 0, 0);
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        opacity: 0;
                                        transition: all 0.3s ease-in-out;
                                    }
                                    .gallery-image-wrapper:hover img {
                                        transform: scale(1.05);
                                    }
                                    .gallery-image-wrapper:hover .gallery-overlay {
                                        background: rgba(0, 0, 0, 0.6);
                                        opacity: 1;
                                    }
                                `}</style>
                            </div>
                        </div>
                    ))}
                    <Lightbox
                        open={lightboxOpen}
                        close={() => setLightboxOpen(false)}
                        index={lightboxIndex}
                        slides={project.gallery.map(src => ({ src }))}
                    />
                </div>
            </div>
        </div>
    )
}

export default SingleProject
