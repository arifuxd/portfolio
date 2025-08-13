"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  RiBrushAiLine,
  RiMovieLine,
  RiPaintBrushLine,
  RiCameraLine,
  RiPaletteLine,
  RiBox3Line,
} from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const ServiceGrid = () => {
  return (
    <section id="services" className="services-area innerpage-single-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <p>Services</p>
                  <h2>Quality Services</h2>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="row">
            <Card
              id={1}
              icon={<RiBrushAiLine size={40} />}
              title={"Branding & Visual Identity"}
              description={
                "Creating cohesive brand guidelines, logos, and identity systems that build trust and recognition."
              }
            />
            <Card
              id={2}
              icon={<RiMovieLine size={40} />}
              title={"Motion Graphics & Animation"}
              description={
                "Designing engaging 2D/3D animations, Lottie files, and dynamic visuals for impactful storytelling."
              }
            />
            <Card
              id={3}
              icon={<RiPaintBrushLine size={40} />}
              title={"Social Media & Web Banners"}
              description={
                "Crafting eye-catching banners, ads, and visuals optimized for both social media and web platforms."
              }
            />
            <Card
              id={4}
              icon={<RiCameraLine size={40} />}
              title={"Video Editing & OVC Production"}
              description={
                "Editing promotional videos, reels, and online video commercials that captivate audiences."
              }
            />
            <Card
              id={5}
              icon={<RiBox3Line size={40} />}
              title={"3D Modeling & Animation"}
              description={
                "Producing basic 3D models, animations, and AR packaging designs to enhance brand experiences."
              }
            />
            <Card
              id={6}
              icon={<RiPaletteLine size={40} />}
              title={"Augmented Reality Design"}
              description={
                "Designing immersive AR packaging and interactive visuals to elevate product engagement."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceGrid;

const Card = ({ icon, title, description, id }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <SlideUp delay={id}>
        <motion.div
          className="service-item modern"
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="service-icon">{icon}</div>
          <h4>{title}</h4>
          <p>{description}</p>
        </motion.div>
      </SlideUp>
    </div>
  );
};
