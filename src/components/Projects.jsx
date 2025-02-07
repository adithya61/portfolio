import { FiGithub } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      "project-name": "Awwwards",
      "video-status": false,
      "github-link": "https://github.com/adithya61/zentry",
      "video-link": "",
      "desc-1":
        "Collaborative Universe: Zentry is a vibrant, content-rich ecosystem that connects users through games, social platforms, and various experiences.",
      "desc-2":
        "Unified Play Economy: It aims to unite gamers from diverse backgrounds into a singular, rewarding gaming experience.",
      "tech-stack": "ReactJs, Gsap (animation lib.), google sheets API, TailwindCSS, javascript",
      "live-link": "https://awwwardss.netlify.app/",
    },
    {
      id: 2,
      "project-name": "Gamehub",
      "video-status": true,
      "github-link": "https://github.com/adithya61/GameHub",
      "video-link": "https://youtu.be/u8r9gBMkwn8",
      "desc-1":
        "Personalized Recommendations: The platform offers tailored game suggestions based on user preferences, enhancing the gaming experience and helping users connect with friends.",
      "desc-2":
        "Comprehensive Game Database: RAWG is the largest video game database, featuring over 500,000 games, allowing users to discover and track their favorite titles easily.",
      "tech-stack": "ReactJs,TypeScript,JavaScript,Chakra UI",
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
      "desc-1": "A classic IT cosultancy landing page",
      "desc-2": "",
      "tech-stack":
        "Reactjs, javascript, HTML5, TailwindCSS, ",
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
          <p
            className=" heading text-4xl font-bold inline
           border-b-4 border-gray-500 text-beige"
          >
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
              className=" w-full border-[1px] rounded-md border-purple-100"
            >
              <div className="flex flex-row justify-between px-5 py-5">
                <div>
                  <span className="text-2xl font-semibold text-indigo-400 pb-3">
                    {project["project-name"]}
                  </span>
                </div>
                <div className="flex justify-end items-center gap-3">
                  <span
                    className=" hover:bg-opacity-20 rounded-lg px-2 py-1
                  "
                  >
                    <a
                      href={project["live-link"]}
                      className="cursor-pointer
                         text-sm no-underline hover:underline hover:bg-gray-200 bg-gray-100 px-3 py-2 font-semibold text-gray-800 rounded-md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
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
              <div className="flex flex-col items-start px-5 grotesk">
                <span className="text-base text-white pt-1 mt-2 roboto-mono-special">
                  {project["desc-1"]}
                </span>
                <span className="text-base text-white roboto-mono-special">
                  {project["desc-2"]}
                </span>{" "}
                <span className="text-base text-paleGreen pt-4 pb-5">
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
