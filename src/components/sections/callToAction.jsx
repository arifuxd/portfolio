import React from "react";
import Link from "next/link";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const CallToAction = () => {
  return (
    <section className="call-to-action-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-12">
            <SlideUp>
              <div className="about-content-part call-to-action-part text-center">
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
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
