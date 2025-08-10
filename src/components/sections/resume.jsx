import React from "react";
import {
  RiPaintBrushLine,
  RiMovieLine,
  RiShoppingBagLine,
  RiGroupLine,
  RiGraduationCapLine,
  RiBookOpenLine,
  RiBookLine,
  RiBook2Line,
} from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const Resume = () => {
  return (
    <section id="resume" className="resume-area">
      <div className="container">
        <div className="resume-items">
          <div className="row">
            {/* Experience */}
            <div className="col-xl-6 col-md-6">
              <div className="single-resume">
                <h2>
                  Experience{" "}
                  <span className="experience-years"> (6.5+ Years)</span>
                </h2>
                <div className="experience-list">
                  <Card
                    year={"Feb 2024 - Present"}
                    title={"Senior Visualizer"}
                    institution={"Outnet (Digital Marketing Agency)"}
                    icon={<RiPaintBrushLine />}
                  />
                  <Card
                    year={"Sep 2023 - Jan 2024"}
                    title={"Senior Visualizer"}
                    institution={"Hype (Digital Marketing Agency)"}
                    icon={<RiMovieLine />}
                  />
                  <Card
                    year={"Mar 2021 - Aug 2023"}
                    title={"Creative Visualizer"}
                    institution={"Maakview (E-Commerce Platform)"}
                    icon={<RiShoppingBagLine />}
                  />
                  <Card
                    year={"Feb 2019 - Feb 2021"}
                    title={"Creative Visualizer"}
                    institution={"Hoorrey (Social Activity Platform)"}
                    icon={<RiGroupLine />}
                  />
                </div>
              </div>
            </div>
            {/* Education */}
            <div className="col-xl-6 col-md-6">
              <div className="experience-list">
                <div className="single-resume">
                  <h2>Education</h2>
                  <Card
                    year={"Ongoing"}
                    title={"MA (Graphic Design & Multimedia)"}
                    institution={
                      "Shanto-Mariam University of Creative Technology"
                    }
                    icon={<RiGraduationCapLine />}
                  />
                  <Card
                    year={"2022"}
                    title={"BBA (Management)"}
                    institution={"Habibullah Bahar University College"}
                    icon={<RiBookOpenLine />}
                  />
                  <Card
                    year={"2018"}
                    title={"HSC (Business Studies)"}
                    institution={"Dania University College"}
                    icon={<RiBook2Line />}
                  />
                  <Card
                    year={"2016"}
                    title={"SSC (Humanities)"}
                    institution={"Sabuj Bidya Pith School & College"}
                    icon={<RiBookLine />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

const Card = ({ year, title, institution, icon }) => {
  return (
    <SlideUp>
      <div className="resume-item">
        <div className="icon">{icon}</div>
        <div className="content">
          <span className="years">{year}</span>
          <h4>{title}</h4>
          <span className="company">{institution}</span>
        </div>
      </div>
    </SlideUp>
  );
};
