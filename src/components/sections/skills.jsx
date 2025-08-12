"use client";

import { motion } from "framer-motion";
import { skills } from "@/utlits/Data/skillsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function SkillsSection() {
  return (
    <section className="py-15">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="container-inner">
          <motion.div
            className="section-title text-center"
            variants={itemVariants}
          >
            <p>Skills</p>
            <h2>Skills & Expertise</h2>
          </motion.div>
          <div className="row g-3 g-lg-4 g-md-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="col-12 col-md-6 col-lg-4 "
                variants={itemVariants}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true }}
              >
                <div className=" text-white p-4 h-100 position-relative overflow-hidden skill-card">
                  <motion.div className="position-absolute top-0 start-0 w-100 h-100 opacity-0 skill-hover-bg" />

                  <div className="position-relative z-1">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h5 text-white skill-name">{skill.name}</h5>
                      <motion.div
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                      >
                        <span className="badge rounded-pill bg-primary">
                          {skill.level}%
                        </span>
                      </motion.div>
                    </div>

                    <div className="progress" style={{ height: "0.75rem" }}>
                      <motion.div
                        className="progress-bar bg-gradient-primary position-relative overflow-hidden"
                        role="progressbar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: 0.5,
                        }}
                        style={{ width: `${skill.level}%` }}
                      >
                        <motion.div
                          className="shimmer"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
