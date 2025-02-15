import heroImage from "../assets/images/profile_picture.jpg";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <div
      name="home"
      className="h-fit pt-32 w-full
     "
    >
      <div
        className=" flex flex-col md:flex-row justify-center items-center px-0 md:px-20 lg:px-auto
        gap-[3rem] md:gap-[5rem] lg:gap-[5rem]"
      >
        <div className=" px-10 lg:px-20 md:px-0">
          <img
            src={heroImage}
            alt="Adithya's photo"
            className=" rounded-full size-40 md:size-48 object-cover "
          />
        </div>
        <div className="flex flex-col justify-center items-start h-full px-4 md:px-0 md:mt-[3rem]">
          <h2 className=" text-4xl md:text-5xl lg:text-3xl font-bold name ">
            Adithya T R
          </h2>
          <p className=" text-red-400 pt-8 pb-8 font-medium  max-w-xl grotesk text-lg">
            I love to work on Web Application&apos;s with technologies like
            Reactjs, Javascript, Typescript, HTML, CSS.
          </p>
          {/* Button */}
          <div className="flex flex-row justify-between gap-7 ">
            <Link
              to="projects"
              smooth
              duration={500}
              className=" group text-lg text-gray-900 font-medium tracking-wide w-fit px-5 py-1
                 my-2 flex items-center rounded-lg  bg-[#FEFEFF] hover:bg-gray-200 cursor-pointer"
            >
              Projects
            </Link>
            <a
              href="https://chiti.netlify.app/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" group text-lg text-gray-900 font-medium w-fit px-5 py-1
                 my-2 flex items-center rounded-lg 
                 cursor-pointer bg-[#FEFEFF] tracking-wide hover:bg-slate-200 "
            >
              Resume
            </a>
          </div>
          {/* Socials */}
          <div className="flex gap-7 mt-6">
            <a
              href="https://www.linkedin.com/in/adithya61/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-200 px-2 py-2 rounded-lg"
            >
              <FaLinkedin color="black" size={25} />
            </a>
            <a
              href="https://github.com/adithya61/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-200 px-2 py-2 rounded-lg"
            >
              <FaGithub size={25} color="black" />
            </a>
            <a
              href="https://leetcode.com/u/adithya61/"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white hover:bg-gray-200 px-2 py-2 rounded-lg"
            >
              <SiLeetcode size={25} color="black" />
            </a>
          </div>
        </div>
      </div>
      {/* Hero image */}
    </div>
  );
};

export default Home;
