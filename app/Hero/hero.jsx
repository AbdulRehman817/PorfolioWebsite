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
import laptopBlog from "../../public/laptopBlog.png";
import mememakerBlog from "../../public/mememakerBlog.png";
import weatherApp from "../../public/weatherapp.png";
import { FaGithubSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import Contact from "./Components/contact";
import Footer from "./Components/Footer";

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
                className="mb-5 text-4xl font-bold"
              >
                Abdul Rehman
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
                  Full-Stack Development
                </h3>
                <p className="text-[#999] text-[16px] font-semibold -mt-[30px] w-[260px]">
                  I design and develop both the front-end and back-end of web
                  applications. From user-friendly interfaces and writing
                  server-side code, I handle all aspects of web development like
                  React, Next.js,
                </p>
              </div>

              <div className="circle ">
                <FaLocationArrow className="icon-link" />
              </div>

              <div>
                <h3 className="font-semibold text-[20px] mb-10 text-white ">
                  Mobile Application Development
                </h3>
                <p className="text-[#999] text-[16px] font-semibold -mt-[30px] w-[310px]">
                  I specialize in creating high-performance, cross-platform
                  mobile applications using React Native. This allows me to
                  develop apps that work seamlessly on both iOS and Android
                  platforms, reducing development time and ensuring a consistent
                  user experience across devices.
                </p>
              </div>

              <div className="circle">
                <FaLink className="icon-link" />
              </div>
              <div>
                <h3 className="font-semibold text-[20px] mb-10 text-white">
                  Problem Solving & Algorithm Design
                </h3>
                <p className="text-[#999] text-[16px] font-semibold -mt-[30px] w-[260px]">
                  I enjoy tackling complex problems and writing optimized
                  algorithms to improve performance and deliver faster, more
                  reliable solutions.As a software engineer, I thrive on
                  tackling complex challenges
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
          ABOUT ME
        </h2>
        <div className=" flex gap-[40px]">
          <div
            className={`ml-[30px]   ${isVisible ? "animated fadeInLeft" : ""}`}
          >
            <h3 className="text-[#D43F52] text-[16px] font-bold pt-[15px] pb-[15px] ">
              DESIGNER & DEVELOPER
            </h3>
            <p className="text-[#999] w-[550px]">
              Hello! I’m Abdul Rehman, a passionate software engineer dedicated
              to crafting innovative and efficient software solutions. With a
              strong foundation in computer science, I have developed a keen
              interest in full-stack development, focusing on creating
              user-friendly applications that meet real-world needs. I am
              proficient in JavaScript, React, and Node.js, and I thrive in
              fast-paced environments where I can collaborate with
              cross-functional teams.When I’m not coding, I enjoy exploring new
              technologies, participating in hackathons, and contributing to
              open-source projects. I believe that continuous learning is key to
              success in the tech industry, and I actively seek opportunities to
              expand my knowledge and skill set.
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

      <div className="container">
        <h1 className="title">
          My Recent <span className="highlight">Works</span>
        </h1>
        <p className="subtitle">
          Here are a few projects I've worked on recently.
        </p>
        <div className="projectsContainer animated fadeIn">
          {/* Card 1 */}
          <div className={`projectCard ${isVisible ? "animated fadeIn" : ""}`}>
            <div className="precard ">
              <Image
                src={laptopBlog}
                alt="Blogging App"
                width={600}
                height={300}
                className="projectImage"
              />
              <h2 className="text-center">Blogging App</h2>
              <p>
                This Blogging App, developed with React, provides users with a
                platform to create, edit, and publish blog posts seamlessly. The
                app features a modern, responsive design that allows users to
                view and manage blogs on any device. It includes a rich-text
                editor, enabling writers to format their content with headings,
                lists, images, and more. Users can organize their blogs with
                categories or tags, making navigation and content discovery
                easier. The app also supports real-time previews, allowing
                authors to see how their blog posts will look before publishing.
                This app offers a comprehensive yet user-friendly blogging
                experience.
              </p>
              <div className="buttons">
                <a
                  href="https://github.com/AbdulRehman817/Blogging-Website-using-react-and-firebase"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare />
                  GitHub
                </a>
                <a
                  href="https://dapper-heliotrope-5ece0d.netlify.app/"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode />
                  Demo
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="projectCard">
            <div className="precard">
              <Image
                src={mememakerBlog}
                alt="Fumicon Pesticides Control"
                width={600}
                height={300}
                className="projectImage"
              />
              <h2 className="text-center">Meme Maker</h2>
              <p>
                This Meme Maker app, built using Next js and TypeScript, allows
                users to create and customize their own memes with ease. The app
                features a simple and intuitive interface where users can upload
                images, add custom text, and position it anywhere on the image.
                It includes options to change the font style, size, and color to
                ensure creative flexibility. With real-time editing, users can
                see their meme come to life as they make changes. The app is
                responsive, ensuring a smooth experience across devices. Once
                completed, users can download their memes and share them on
                social media.
              </p>
              <div className="buttons">
                <a
                  href="https://github.com/AbdulRehman817/Meme-Maker"
                  className="button"
                >
                  <FaGithubSquare /> GitHub
                </a>
                <a
                  href="https://meme-maker-126d.vercel.app/"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode />
                  Demo
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="projectCard">
            <div className="precard">
              <Image
                src={weatherApp}
                alt="Weather App"
                width={600}
                height={300}
                className="projectImage"
              />
              <h2 className="text-center">Weather App</h2>
              <p>
                This weather app, built using JavaScript, provides real-time
                weather updates for any location. Users can search by city name
                to get the current temperature, weather conditions (like clear
                skies, rain, or cloudy), humidity, and wind speed. The app uses
                an API to fetch accurate weather data from a reliable source and
                displays it in a clean, user-friendly interface. The design is
                simple yet effective, focusing on delivering essential weather
                information at a glance. With responsive features, the app works
                seamlessly across devices, ensuring users can check the weather
                on the go.
              </p>
              <div className="buttons">
                <a
                  href="https://github.com/AbdulRehman817/Weather-App"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare /> GitHub
                </a>
                <a
                  href="https://weather-app-gules-alpha-61.vercel.app/"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode /> Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </>
  );
};

export default Hero;
