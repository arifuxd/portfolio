"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const CallToAction = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="call-to-action-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-12">
            <SlideUp>
              <div
                ref={containerRef}
                className="about-content-part call-to-action-part text-center glow-container"
              >
                <div className="glow-effect"></div>
                <h2>
                  Are You Ready to kickstart your project with a touch of magic?
                </h2>
                <p>
                  Reach out and let's make it happen ✨. I'm also available for
                  full-time or Part-time opportunities to push the boundaries of
                  design and deliver exceptional work.
                </p>
                <div className="hero-btns">
                  <Link href="/contact" className="theme-btn">
                    <i>
                      <RiMailSendLine size={16} />
                    </i>{" "}
                    Let's Talk
                  </Link>
                </div>
              </div>
              <style jsx>{`
                .glow-container {
                  position: relative;
                  overflow: hidden;
                }

                .glow-container::before {
                  content: "";
                  position: absolute;
                  inset: 0;
                  background: radial-gradient(
                    circle at var(--mouse-x, 0) var(--mouse-y, 0),
                    rgba(255, 255, 255, 0.1) 0%,
                    transparent 50%
                  );
                  pointer-events: none;
                  z-index: 0;
                }

                .glow-container > * {
                  position: relative;
                  z-index: 2;
                }
              `}</style>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
