"use client";
import React from "react";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCircleFill,
  RiDownloadLine,
  RiBehanceFill,
  RiPlayCircleFill,
  RiInstagramLine,
} from "@remixicon/react";
import PartnersMarquee from "./partnersMarquee";
import SlideUp from "@/utlits/animations/slideUp";

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={"/images/about/profile.png"} alt="About Me" />
                <h2>Ariful Islam</h2>
                <p>Creative Visualizer</p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <Link
                        href="https://facebook.com/arifuxd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiFacebookCircleFill size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://linkedin.com/in/arifuxd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiLinkedinFill size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://x.com/arifuxd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiTwitterXLine size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://instagram.com/arifuxd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiInstagramLine size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/arifuxd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiGithubLine size={20} />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="about-hero-portfolio text-center">
                  <ul>
                    <li>
                      <Link
                        href="https://behance.net/arifuxd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiBehanceFill size={20} />
                        <span>behance.net/arifuxd</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://cutt.ly/arifuxd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiPlayCircleFill size={20} />
                        <span>2D & 3D Animation</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <p>Hello There!</p>
                <h2>
                  I’m Ariful Islam, a creative visualizer with 6+ years of
                  experience crafting impactful visuals and multimedia stories.
                </h2>
                <div className="adress-field">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i>
                        <RiCircleFill size={14} />
                      </i>{" "}
                      Available for Collaboration
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                  <a
                    href="/Resume_of_Ariful Islam_Senior Visualizer.pdf"
                    className="theme-btn"
                    download
                  >
                    Download CV{" "}
                    <i>
                      <RiDownloadLine size={16} />
                    </i>{" "}
                  </a>
                </div>
              </div>
            </SlideUp>
            <SlideUp>
              <PartnersMarquee />
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
