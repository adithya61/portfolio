import placeholder from "../assets/portfolio/placeholder.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: placeholder,
    },

    {
      id: 2,
      src: placeholder,
    },

    {
      id: 3,
      src: placeholder,
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
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200
            hover:scale-105"
                src={src}
                alt=""
              />
              <div
                className="flex items-center justify-center 
            "
              >
                <button
                  className=" w-1/2 px-6 py-3 m-4 
              duration-200 hover:scale-105"
                >
                  Live
                </button>
                <button
                  className=" w-1/2 px-6 py-3 m-4 
              duration-200 hover:scale-105"
                >
                  Github
                </button>
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
