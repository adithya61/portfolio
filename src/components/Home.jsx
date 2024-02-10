import heroImage from "../assets/images/profile_picture.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import resume from "../assets/resume/Front_End.pdf";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b 
     from-black via-black to-gray-800"
    >
      <div
        className=" gap-4 max-w-screen-lg mx-auto flex flex-col 
        md:flex-row items-center justify-center h-full px-4"
      >
        <div className=" flex flex-col justify-center h-full text-white">
          <h2 className=" text-4xl sm:text-7xl font-bold">
            I&apos;m a Front End Developer
          </h2>
          <p className=" text-gray-500 py-4 max-w-md">
            I love to work on Web Application&apos;s with technologies like
            Reactjs, Javascript, Typescript, HTML, CSS.
          </p>
          {/* Button */}
          <div className="flex flex-row gap-5 sm:mb-5" >
            <Link
              to="projects"
              smooth
              duration={500}
              className=" group text-lg text-white w-fit px-6 py-3
             my-2 flex items-center rounded-md bg-gradient-to-r 
              from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className=" group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href={resume}
              className=" group text-lg text-white w-fit px-6 py-3
             my-2 flex items-center rounded-md bg-gradient-to-r 
              from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span className=" group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        {/* Hero image */}
        <div>
          <img
            src={heroImage}
            alt="Adithya's photo"
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
