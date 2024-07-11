import { FiGithub } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";

const Projects = () => {
  const projects = [
    {
      id: 1,
      "project-name": "Gamehub",
      "video-status": true,
      "github-link": "https://github.com/adithya61/GameHub",
      "video-link": "https://youtu.be/u8r9gBMkwn8",
      "desc-1": "A video game listing website.",
      "desc-2": "A video game database and discovery website",
      "tech-stack": "ReactJs,TypeScript,JavaScript,Chakra UI",
      "live-link": "https://videogameshub.netlify.app/",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
  ];

  return (
    <div
      name="projects"
      className=" text-white
      w-full
     md:h-fit p-20"
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto
      flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className=" heading text-4xl font-bold inline
           border-b-4 border-gray-500 text-beige"
          >
            Projects
          </p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>
        {/* cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 row-auto
          gap-8 px-10 sm:p-0"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className=" w-full border-[1px] rounded-md border-purple-100"
            >
              <div className="flex justify-end items-center gap-7 px-5 py-3">
                <span className=" ">
                  <a
                    href={project["live-link"]}
                    className="cursor-pointer
                        border-mango text-sm font-medium text-mango rounded-md "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </span>
                <a
                  href={project["github-link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub
                    className="cursor-pointer"
                    size={"30"}
                    color="#fcba28"
                  />
                </a>
                {project["video-status"] && (
                  <a
                    href={project["video-link"]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CiYoutube
                      className="cursor-pointer"
                      size={"30"}
                      color="#fcba28"
                    />
                  </a>
                )}
              </div>
              {/* content */}
              <div className="flex flex-col items-start px-5 grotesk">
                <span className="text-2xl project-head pb-3">
                  {project["project-name"]}
                </span>
                <span className="text-lg text-[#40cdf4] pt-1 mt-2">
                  {project["desc-1"]}
                </span>
                <span className="text-lg text-[#40cdf4]">
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
