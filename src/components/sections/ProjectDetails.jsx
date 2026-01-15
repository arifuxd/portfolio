"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiZoomInLine, RiPlayCircleLine } from "@remixicon/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import VimeoModal from "@/components/ui/VimeoModal";
import { urlFor } from "@/utlits/sanity";
import { PortableText } from "@portabletext/react";

const ProjectDetails = ({ project }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [vimeoModalOpen, setVimeoModalOpen] = useState(false);
    const [currentVimeoId, setCurrentVimeoId] = useState(null);

    const openLightbox = (index) => {
        const item = project.gallery[index];
        if (item._type === "vimeo") {
            setCurrentVimeoId(item.id);
            setVimeoModalOpen(true);
        } else {
            setLightboxIndex(index);
            setLightboxOpen(true);
        }
    };

    const coverImageSrc = project.coverImage ? urlFor(project.coverImage).width(1200).url() : '';

    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>
                            {project.category} - {project.client}
                        </p>
                        <h1>{project.title}</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image container">
                <div className="image-wrapper">
                    {coverImageSrc && (
                        <Image
                            src={coverImageSrc}
                            alt={project.title}
                            fill
                            style={{ objectFit: "cover", borderRadius: "20px" }}
                        />
                    )}
                </div>
            </div>

            <div className="container pt-30 project-info">
                <div className="row project-info-row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s h-100">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>{project.year}</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>{project.client}</h3>
                            </div>
                            <div className="single-info">
                                <p>Software</p>
                                {Array.isArray(project.software) ? (
                                    project.software.map((sw, index) => (
                                        <h3 key={index}>{sw}</h3>
                                    ))
                                ) : (
                                    <h3>{project.software}</h3>
                                )}
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
                            {project.description && (
                                <div className="portable-text">
                                    <PortableText value={project.description} />
                                </div>
                            )}
                        </div>
                    </div>
                    <style jsx global>{`
            @media (min-width: 992px) {
              .project-info-row {
                display: flex;
                flex-wrap: wrap;
              }
              .project-info-row > div {
                display: flex;
                flex-direction: column;
              }
              .project-info-row .single-project-page-left,
              .project-info-row .single-project-page-right {
                height: 100%;
                flex: 1;
              }
              .h-100 {
                height: 100%;
              }
            }
          `}</style>
                </div>
                <div className="row pt-30">
                    {project.gallery && project.gallery.map((item, index) => {
                        const isVideo = item._type === "vimeo";
                        // For vimeo, item.thumbnail is an image object, so we need urlFor
                        // For image, item.src is already the URL string from my sanity.js helper?
                        // Wait, getProject helper: 
                        // _type == "image" => "src": asset->url
                        // _type == "vimeo" => "thumbnail": thumbnail

                        // Check getProject implementation:
                        // _type == "vimeo" => "thumbnail": thumbnail (which is an image object)

                        let thumbnailSrc = "";
                        if (isVideo) {
                            thumbnailSrc = item.thumbnail ? urlFor(item.thumbnail).width(633).height(679).url() : "";
                        } else {
                            // Safe check for item.src or if item itself is image object from sanity without src expansion
                            thumbnailSrc = item.src || "";
                        }

                        if (!thumbnailSrc) return null;

                        return (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                <div
                                    className={`single-image wow fadeInUp delay-0-${(index + 1) * 2
                                        }s gallery-item`}
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="gallery-image-wrapper">
                                        {isVideo ? (
                                            <>
                                                <div className="thumbnail-container">
                                                    <Image
                                                        width={633}
                                                        height={679}
                                                        sizes="100%"
                                                        src={thumbnailSrc}
                                                        alt={`gallery-${index + 1}`}
                                                        className="thumbnail-image"
                                                    />
                                                    <div className="video-preview">
                                                        <iframe
                                                            src={`https://player.vimeo.com/video/${item.id}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                                                            width="100%"
                                                            height="100%"
                                                            frameBorder="0"
                                                            allow="autoplay; picture-in-picture"
                                                            style={{
                                                                position: "absolute",
                                                                top: 0,
                                                                left: 0,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <Image
                                                width={633}
                                                height={679}
                                                sizes="100%"
                                                src={thumbnailSrc}
                                                alt={`gallery-${index + 1}`}
                                            />
                                        )}
                                        <div className="gallery-overlay">
                                            {isVideo ? (
                                                <RiPlayCircleLine size={40} color="white" />
                                            ) : (
                                                <RiZoomInLine size={40} color="white" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <Lightbox
                        open={lightboxOpen}
                        close={() => setLightboxOpen(false)}
                        index={lightboxIndex}
                        slides={project.gallery
                            .filter((item) => item._type !== "vimeo") // Filter out vimeo for lightbox? Or keep it?
                            // The original code filtered out vimeo from slides because it used Lightbox for images only?
                            // Original: filter(item => !(typeof item === 'object' && item.type === mediaTypes.VIMEO))
                            // .map... if VIMEO... wait, original code HAD Video plugin support.
                            // Original code:
                            /*
                              slides={project.gallery
                                  .filter(item => !(typeof item === 'object' && item.type === mediaTypes.VIMEO))
                                  .map(item => {
                                      if (typeof item === 'object' && item.type === mediaTypes.VIDEO) {
                                          ...
                                      }
                                      return { src: item };
                                  })}
                            */
                            // It seems it filtered out VIMEO but handled VIDEO.
                            // My schema supports VIMEO and IMAGE.
                            // So I should probably filter out VIMEO from the lightbox slides if `yet-another-react-lightbox` vimeo plugin is not used, or if custom modal is used.
                            // Original used `VimeoModal` for vimeo items.
                            // So yes, filter out vimeo.
                            .filter((item) => item._type !== "vimeo")
                            .map((item) => {
                                return { src: item.src };
                            })}
                        carousel={{
                            padding: 0,
                            spacing: 0,
                        }}
                        controller={{ closeOnBackdropClick: true }}
                        plugins={[Video]}
                    />
                    <VimeoModal
                        isOpen={vimeoModalOpen}
                        onClose={() => setVimeoModalOpen(false)}
                        videoId={currentVimeoId}
                    />
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
            .thumbnail-container {
              position: relative;
              width: 100%;
              height: 100%;
              overflow: hidden;
            }
            .thumbnail-image {
              z-index: 2;
              position: relative;
              transition: opacity 0.3s ease-in-out;
              opacity: 1;
            }
            .video-preview {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
              z-index: 1;
              transform: scale(1.2); /* Slightly zoom the video preview */
            }
            /* Video hover effects */
            /* Video hover effects only for desktop */
            @media (min-width: 1024px) {
              .gallery-image-wrapper:has(.video-preview):hover .thumbnail-image {
                opacity: 0;
              }
              .gallery-image-wrapper:has(.video-preview):hover .video-preview {
                opacity: 1;
              }
            }
            /* Ensure video preview stays hidden on mobile/tablet */
            @media (max-width: 1023px) {
              .video-preview {
                display: none;
              }
              .thumbnail-image {
                opacity: 1 !important;
              }
            }
            .gallery-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 1;
              transition: all 0.3s ease-in-out;
              z-index: 3;
            }
            /* Default overlay for non-video items */
            .gallery-image-wrapper:not(:has(.video-preview))
              .gallery-overlay {
              background: rgba(0, 0, 0, 0);
              opacity: 0;
            }
            /* Hover state for non-video items */
            .gallery-image-wrapper:not(:has(.video-preview)):hover
              .gallery-overlay {
              background: rgba(0, 0, 0, 0.6);
              opacity: 1;
            }
            /* Hover state for video items */
            .gallery-image-wrapper:has(.video-preview):hover .gallery-overlay {
              opacity: 0;
            }
          `}</style>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
