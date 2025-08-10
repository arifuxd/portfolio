import React from "react";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";
import Link from "next/link";

const Summery = () => {
  return (
    <section id="about" className="about-single-area innerpage-single-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={"/images/about/profile.png"} alt="About Me" />
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <h2>I’m Ariful Islam, a creative visualizer.</h2>
                <p>
                  I specialize in branding, motion graphics, and video editing.
                  With over six years of experience, I have worked across
                  e-commerce, marketing agency, edtech and IT enabled
                  businesses, delivering impactful designs that connect brands
                  with their audiences. My work blends artistic creativity with
                  strategic thinking to ensure each project is visually
                  captivating.
                  <br /> <br />
                  Over the years, I have collaborated with diverse teams and
                  clients, adapting to various creative challenges with
                  precision and innovation.
                </p>
                <div className="hero-btns">
                  <Link href="/contact" className="theme-btn">
                    Get In touch
                    <i>
                      {" "}
                      <RiMailSendLine size={16} />{" "}
                    </i>{" "}
                  </Link>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Summery;
