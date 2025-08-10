import React from "react";
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
  return (
    <div className="about-content-part-bottom">
      <h2>Company I Worked With</h2>
      <div className="company-list">
        <div className="scroller">
          <div className="scroller__inner">
            <Marquee>
              <img src={"/images/client-logos/partner-01.png"} alt="" />
              <img src={"/images/client-logos/partner-02.png"} alt="" />
              <img src={"/images/client-logos/partner-03.png"} alt="" />
              <img src={"/images/client-logos/partner-04.png"} alt="" />
              <img src={"/images/client-logos/partner-05.png"} alt="" />
              <img src={"/images/client-logos/partner-06.png"} alt="" />
              <img src={"/images/client-logos/partner-07.png"} alt="" />
              <img src={"/images/client-logos/partner-08.png"} alt="" />
              <img src={"/images/client-logos/partner-09.png"} alt="" />
              <img src={"/images/client-logos/partner-10.png"} alt="" />
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;
