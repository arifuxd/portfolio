"use client";
import React, { useRef, useState } from "react";
import { RiMailLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import confettiAnimation from "../../../../public/images/lottie/Confetti-Full-Screen.json"; // Adjust the path as necessary

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    message: "",
    error: false,
    showAnimation: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ message: "Sending...", error: false, showAnimation: false });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        setStatus({ message: "", error: false, showAnimation: true });
        form.current.reset();
        // Reset animation after 3 seconds
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, showAnimation: false }));
        }, 3000);
      })
      .catch((error) => {
        setStatus({
          message: "Failed to send message. Please try again.",
          error: true,
          showAnimation: false,
        });
      });
  };

  return (
    <div className="col-lg-8">
      <SlideUp>
        <div className="contact-form contact-form-area">
          <form ref={form} className="contactForm" onSubmit={sendEmail}>
            {status.message && (
              <div
                className={`alert ${
                  status.error ? "alert-danger" : "alert-success"
                }`}
              >
                {status.message}
              </div>
            )}
            {status.showAnimation && (
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1000,
                  width: "1300px",
                  height: "700px",
                }}
              >
                <Lottie
                  animationData={confettiAnimation}
                  loop={false} // disables looping
                  autoplay={true} // plays automatically
                />
              </div>
            )}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Steve Milner"
                    required
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="name" className="for-icon">
                    <i className="far fa-user"></i>
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="hello@websitename.com"
                    required
                    data-error="Please enter your Email"
                  />
                  <label htmlFor="email" className="for-icon">
                    <i className="far fa-envelope"></i>
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Write Your message"
                    required
                    data-error="Please Write your Message"
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Send Me Message{" "}
                    <i>
                      <RiMailLine size={15} />
                    </i>
                  </button>
                  <div id="msgSubmit" className="hidden"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SlideUp>
    </div>
  );
};

export default ContactForm;
