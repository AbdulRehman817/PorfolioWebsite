"use client";
import React from "react";
import "./hero.css";
import { Animation } from "./Components/animation";
import Image from "next/image";
import { FaLaptop } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

import Progressloader from "./Components/Progressloader";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false); // State for animation visibility

  const whatIDoRef = useRef(null); // Reference for the "WHAT I Do" section
  // Intersection Observer for "WHAT I Do" section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set to true when the section is in view
            observer.unobserve(entry.target); // Stop observing after triggering
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (whatIDoRef.current) {
      observer.observe(whatIDoRef.current);
    }

    return () => {
      if (whatIDoRef.current) {
        observer.unobserve(whatIDoRef.current);
      }
    };
  }, []);
  return (
    <>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://templatemo.com/templates/templatemo_458_lavish/images/home-bg.jpg)",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100vh",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md animated fadeIn">
              <h3
                style={{
                  lineHeight: "1.1",
                  fontSize: "24px",
                  fontWeight: "700",
                  // textTransform: "uppercase",
                }}
                className="mb-5 text-white font-bold"
              >
                Simple and Elegant
              </h3>
              <h1
                style={{
                  border: "2px solid #D43F52",
                  color: "#D43F52",
                  display: "inline-block",
                  letterSpacing: "6px",
                  padding: "25px 35px",
                  margin: "35px 0",
                }}
                className="mb-5 text-5xl font-bold"
              >
                Lavish
              </h1>
              //
              <Animation />
              //
              <div className="mx-auto my-8 max-w-4xl text-center">
                <p
                  style={{
                    lineHeight: "28px",
                    margin: "0 -156px 15px",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    marginBottom: "70px",
                    marginTop: "-30px",
                  }}
                  className="text-[16px] text-[#999]"
                >
                  I am a professional
                  <span className="font-bold from-neutral-700 pl-1 pr-1">
                    UX Designer
                  </span>
                  and
                  <span className="font-bold from-neutral-700 pl-1 pr-1">
                    Front-End Developer
                  </span>
                  creating modern and responsive designs for
                  <span className="font-bold from-neutral-700 pl-1 pr-1">
                    Web
                  </span>
                  and
                  <span className="font-bold from-neutral-700 pl-1 pr-1">
                    Mobile.
                  </span>
                  Let us work together. Thank you.
                </p>
              </div>
              <div className="animated fadeInUp">
                <a className=" btn btn-default text-white p-4 w-60 mt-[30px] rounded-sm  hover:bg-[#D43F52] hover:border-[#D43F52]">
                  Get's Started
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#1a1a1a] h-45 " ref={whatIDoRef}>
          <div className="p-20">
            <div
              className={`text-center text-white text-2xl ${
                isVisible ? "animated slideInDown" : ""
              }`}
            >
              <h2 className="font-bold text-[30px] mt-[20px] mb-[10px] animated slideInDown">
                WHAT I Do
              </h2>
            </div>
            <div
              className={`flex mt-10 gap-[25px]  ${
                isVisible ? "animated fadeInUp" : ""
              }`}
            >
              <div className="circle">
                <FaLaptop className="icon-link" />
              </div>
              <div>
                <h3 className="font-semibold text-[20px] mb-10 text-white">
                  Responsive Mobile
                </h3>
                <p className="text-[#999] text-[16px] font-semibold -mt-[30px] w-[260px]">
                  Lavish CSS Template is designed by templatemo. Download, edit
                  and use this layout.
                </p>
              </div>

              <div className="circle ">
                <FaLocationArrow className="icon-link" />
              </div>

              <div>
                <h3 className="font-semibold text-[20px] mb-10 text-white ">
                  UI & UX Design
                </h3>
                <p className="text-[#999] text-[16px] font-semibold -mt-[30px] w-[310px]">
                  UI & UX Design Credits go to Pixabay and Unsplash for images
                  used in this free CSS website template
                </p>
              </div>

              <div className="circle">
                <FaLink className="icon-link" />
              </div>
              <div>
                <h3 className="font-semibold text-[20px] mb-10 text-white">
                  CSS Templates
                </h3>
                <p className="text-[#999] text-[16px] font-semibold -mt-[30px] w-[260px]">
                  We provide a wide range of HTML5 templates for free. Please
                  spread a word about us on social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black pt-20">
        {/* <h2 className="text-white font-bold text-[30px] ml-[30px] mt-[20px]  "> */}
        <h2
          className={` text-white font-bold text-[30px] ml-[30px] mt-[20px]  ${
            isVisible ? "animated fadeInLeft" : ""
          }`}
        >
          ABOUT LAVISH
        </h2>
        <div className=" flex gap-[40px]">
          <div
            className={`ml-[30px]   ${isVisible ? "animated fadeInLeft" : ""}`}
          >
            <h3 className="text-[#D43F52] text-[16px] font-bold pt-[15px] pb-[15px] ">
              DESIGNER & DEVELOPER
            </h3>
            <p className="text-[#999] w-[550px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat. Dolore magna aliquam erat volutpat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet.
            </p>
          </div>
          <div className="-mt-[20px]">
            <div
              style={{
                width: "700px",
                maxWidth: "600px",
                margin: "auto",
                padding: "20px",
                color: "white",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "16px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  // marginTop: "-10px",
                }}
              >
                Skills
              </h1>
              <div>
                <Progressloader label="Web Design" percentage={95} />
                <Progressloader label="Mobile Apps" percentage={80} />
                <Progressloader label="SEO Stuffs" percentage={70} />
                <Progressloader label="HTML5 & CSS3" percentage={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
