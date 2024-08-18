import heroImage from "../assets/images/profile_picture.png";
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
        <div className="w-[100%] lg:w-auto px-8 lg:px-20 md:px-0 object-cover">
          <img
            src={heroImage}
            alt="Adithya's photo"
            className=" rounded-2xl border-r-[6px] 
            border-b-[6px] border-white lg:h-[20rem]"
          />
        </div>
        <div className="flex flex-col justify-center items-start h-full px-4 md:px-0 md:mt-[3rem] text-beige">
          <h2 className=" text-4xl md:text-5xl lg:text-5xl font-bold name">
            Adithya T R
          </h2>
          <p className=" text-gray-300 pt-12 pb-8 hero-text  max-w-xl grotesk text-xl">
            I love to work on Web Application&apos;s with technologies like
            Reactjs, Javascript, Typescript, HTML, CSS.
          </p>
          {/* Button */}
          <div className="flex flex-row justify-between gap-8 sm:mb-5">
            <Link
              to="projects"
              smooth
              duration={500}
              className=" group text-lg text-white font-semibold w-fit px-5 py-1
                 my-2 flex items-center rounded-lg  border-r-4 border-b-4
                 cursor-pointer border-l-[1px] border-t-[1px] "
            >
              Projects
            </Link>
            <a
              href="https://chiti.netlify.app/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" group text-lg text-white font-semibold w-fit px-5 py-1
                 my-2 flex items-center rounded-lg border-r-4 border-b-4
                  border-b-white border-l-[1px] border-t-[1px]
                   hover:bg-[#b39ac2]
                 cursor-pointer"
            >
              Resume
            </a>
          </div>
          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/adithya61/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#ff6347] px-2 py-2 rounded-lg"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/adithya61/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#ff6347] px-2 py-2 rounded-lg"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://leetcode.com/u/adithya61/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#ff6347] px-2 py-2 rounded-lg"
            >
              <SiLeetcode size={30} />
            </a>
          </div>
        </div>
      </div>
      {/* Hero image */}
    </div>
  );
};

export default Home;
