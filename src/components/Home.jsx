import heroImage from "../assets/images/profile_picture.png";
import { Link } from "react-scroll";
import resume from "../assets/resume/Front_End.pdf";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen pt-32 pb-20 w-full  flex flex-col items-center
     "
    >
      <div
        className=" gap-4 w-screen mx-0 flex flex-col px-32
        md:flex-row content-between justify-center h-full"
      >
        <div className=" flex flex-col w-4/5 justify-center items-start h-full text-beige">
          <h2 className=" text-4xl sm:text-7xl font-bold name">Adithya</h2>
          <p className=" text-gray-300 pt-12 pb-8 hero-text  max-w-md grotesk text-2xl">
            I love to work on Web Application&apos;s with technologies like
            Reactjs, Javascript, Typescript, HTML, CSS.
          </p>
          {/* Button */}
          <div className="flex flex-row justify-between gap-12 sm:mb-5">
            <Link
              to="projects"
              smooth
              duration={500}
              className=" group text-lg text-white font-semibold w-fit px-5 py-3
             my-2 flex items-center rounded-lg  border-r-4 border-b-4
             cursor-pointer border-l-[1px] border-t-[1px] "
            >
              Projects
            </Link>
            <a
              href={resume}
              className=" group text-lg text-white font-semibold w-fit px-5 py-3
             my-2 flex items-center rounded-lg border-r-4 border-b-4
              border-b-white border-l-[1px] border-t-[1px]
               hover:bg-[#b39ac2] 
             cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
        {/* Hero image */}
        <div>
          <img
            src={heroImage}
            alt="Adithya's photo"
            className=" rounded-2xl mx-auto w-1/5 md:w-full border-r-[6px] 
            border-b-[6px] border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
