import { FiGithub } from "react-icons/fi";
import { FaLink, FaYoutube } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 2,
      "project-name": "Gamehub",
      "video-status": true,
      "github-link": "https://github.com/adithya61/GameHub",
      "video-link": "https://youtu.be/u8r9gBMkwn8",
      "desc-1":
        "The platform offers tailored game suggestions based on user preferences, enhancing the gaming experience and helping users connect with friends.",
      "desc-2":
        "RAWG is the largest video game database, featuring over 500,000 games, allowing users to discover and track their favorite titles easily.",
      "tech-stack":
        "ReactJs,TypeScript,JavaScript, Rawg API, Tanstack Query (caching), Chakra UI",
      "live-link": "https://videogameshub.netlify.app/",
    },
    {
      id: 3,
      "project-name": "Moshify",
      "video-status": true,
      "github-link": "https://github.com/adithya61/moshify",
      "video-link": "https://youtu.be/vzGXDuYgdr0",
      "desc-1": "Web Hosting on the cloud",
      "desc-2": "Static page with plain HTML, CSS",
      "tech-stack": "HTML, CSS, animate-on-scroll (js library)",
      "live-link": "https://moshify-web-project.netlify.app/",
    },
    {
      id: 4,
      "project-name": "Intract",
      "video-status": false,
      "github-link": "https://github.com/adithya61/Cryptomeme",
      "video-link": "",
      "desc-1": "Crypto Interactive learning Frontend Design Clone",
      "desc-2": "Replicates UI/UX elements and interactions.",
      "tech-stack": "Reactjs, CSS, TailwindCSS, ",
      "live-link": "https://cryptomeme.netlify.app/",
    },
    {
      id: 5,
      "project-name": "Vidly",
      "video-status": true,
      "github-link": "https://github.com/adithya61/vidly",
      "video-link": "https://www.youtube.com/watch?v=AJsV4LWzBRg",
      "desc-1": "A Video Rental Website",
      "desc-2": "Clean Coding, Performance Optimization",
      "tech-stack":
        "Reactjs, GCP (backend hosting) jwt (auth), joi (form validation), sentry (error monitoring), mongodb (database)",
      "live-link": "https://vidly-react-project.netlify.app/",
    },
    {
      id: 6,
      "project-name": "Zenith",
      "video-status": false,
      "github-link": "https://github.com/adithya61/zineth",
      "video-link": "",
      "desc-1": "A IT cosultancy landing page.",
      "desc-2": "Built with latest tech. stack.",
      "tech-stack":
        "Reactjs, javascript, HTML5, TailwindCSS, Google Sheets API`",
      "live-link": "https://zinethmvp.vercel.app/",
    },
  ];

  return (
    <div
      name="projects"
      className=" text-white
      w-full
     md:h-fit mt-12 projects-heading"
    >
      <div
        className=" max-w-screen-xl p-4 mx-auto
      flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className=" heading text-4xl font-bold inline text-white">
            Projects
          </p>
        </div>
        {/* cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 row-auto
          gap-8  px-0 md:px-10"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className=" w-full p-2 border-[1px] rounded-md border-white"
            >
              <div className="flex flex-row justify-between items-center px-5 pt-5">
                <span className="text-[1.7rem] md:text-3xl poppins-bold-italic  font-semibold pt-3 text-center text-[#37BCF8] pb-3">
                  {project["project-name"]} {/* Project Heading */}
                </span>
                <div className="flex justify-end items-center gap-3">
                  <span
                    className=" hover:bg-opacity-20 rounded-lg px-2 py-1
                  "
                  >
                    <a
                      href={project["live-link"]}
                      className="cursor-pointer
                         text-sm no-underline inline-block hover:underline hover:bg-gray-200 bg-gray-100 px-3 py-2 font-semibold text-gray-800 rounded-md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <div className="live-link">
                        <FaLink style={{ display: "inline" }} /> Live
                      </div>{" "}
                    </a>
                  </span>
                  <a
                    href={project["github-link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-white hover:bg-gray-200 rounded-lg"
                  >
                    <FiGithub
                      className="cursor-pointer "
                      size={"30"}
                      color="black"
                    />
                  </a>
                  {project["video-status"] && (
                    <a
                      href={project["video-link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-white hover:bg-gray-200  rounded-lg"
                    >
                      <FaYoutube
                        className="cursor-pointer"
                        size={"30"}
                        color="tomato"
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* content */}
              <div className="flex flex-col text-lg font-normal tracking-wider text-[1rem] montserrat  items-start px-5">
                <span className=" leading-7 text-white pt-1 mt-2 ">
                  <span className="text-2xl">&#x2022;</span> {project["desc-1"]}
                </span>
                <span className=" leading-7 text-white mt-2">
                  <span className="text-2xl">&#x2022;</span> {project["desc-2"]}
                </span>{" "}
                <span className="montserrat text-lg font-semibold mt-7">
                  Tech Stack
                </span>
                <span className="text-base text-white poppins-light-italic leading-7 tracking-wider pt-1.5  pb-5">
                  {project["tech-stack"]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Card end */}
      </div>
    </div>
  );
};

export default Projects;
