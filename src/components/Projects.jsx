import moshify from "../assets/images/moshify.png";
import gamehub from "../assets/images/gamehub.webp";
import vidly from "../assets/images/vidly.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      name: "Moshify",
      src: moshify,
      github: "https://github.com/adithya61/Moshify",
      live: "https://moshify-web-project.netlify.app/",
    },

    {
      id: 2,
      name: "Gamehub",
      src: gamehub,
      github: "https://github.com/adithya61/GameHub",
      live: "https://videogameshub.netlify.app/",
    },

    {
      id: 3,
      name: "Vidly",
      src: vidly,
      github: "https://github.com/adithya61/vidly",
      live: "https://vidly-react-project.netlify.app/",
    },
  ];

  return (
    <div
      name="projects"
      className=" text-white
     bg-gradient-to-b from-black to-gray-800 w-full
     md:h-screen"
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto
      flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className=" text-4xl font-bold inline
           border-b-4 border-gray-500 "
          >
            Projects
          </p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3
          gap-8 px-12 sm:p-0"
        >
          {/* card */}
          {portfolios.map(({ id, name, github, live, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200
            hover:scale-105"
                src={src}
                alt=""
              />
              <p className=" m-2 text-xl font-bold">{name}</p>
              <div
                className="flex items-center justify-center 
            "
              >
                <a
                  href={live}
                  className=" w-1/3 py-2 m-4 
              duration-200 hover:scale-105 bg-gradient-to-r
               from-cyan-300 to-blue-400 rounded-lg
                 text-center"
                >
                  Live
                </a>
                <a
                  href={github}
                  className=" w-1/3 py-2 m-4 
              duration-200 hover:scale-105 bg-gradient-to-r
               from-blue-400 to-cyan-300  rounded-lg
                text-center"
                >
                  Github
                </a>
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
