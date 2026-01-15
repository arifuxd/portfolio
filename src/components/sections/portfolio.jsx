"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";
import Image from "next/image";
import { urlFor } from "@/utlits/sanity";

const animations = ["slideIn", "fadeIn", "scaleUp"];

const getRandomAnimation = () => {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

const Portfolio = ({ className, projects = [], categories = [] }) => {
  const [category, setCategory] = useState("All");
  const [animationClass, setAnimationClass] = useState("");

  const handleCategoryClick = (item) => {
    setCategory(item);
    const randomAnimation = getRandomAnimation();
    setAnimationClass(randomAnimation);
  };

  // Extract category titles for filtering
  const allCategories = ["All", ...categories.map(c => c.title)];

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <section id="portfolio" className={`projects-area ${className}`}>
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <h2>Works & Projects</h2>
                  <p>
                    Explore my design projects, each crafted with passion and
                    attention to detail.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
          <SlideUp>
            <ul className="project-filter filter-btns-one justify-content-left pb-15">
              {allCategories.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(item)}
                  className={item === category ? "current" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </SlideUp>
          <div className="row project-masonry-active overflow-hidden">
            {filteredProjects.map((project) => (
              <Card
                key={project._id}
                id={project.slug}
                category={project.category}
                src={urlFor(project.coverImage).url()}
                title={project.title}
                animationClass={animationClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const Card = ({ category, title, src, animationClass, id }) => {
  return (
    <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
      <SlideUp delay={0}>
        <div className="project-item style-two">
          <div className="project-image">
            <Image
              width={383}
              height={249}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px 10px 0px 0px",
              }}
              src={src}
              alt={title}
            />
            <Link href={`/projects/${id}`} className="details-btn">
              <RiArrowRightUpLine />{" "}
            </Link>
          </div>
          <div className="project-content">
            <span className="sub-title">{category}</span>
            <h3>{title}</h3>
          </div>
        </div>
      </SlideUp>
    </div>
  );
};
