import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import github from "../assets/images/github.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import typescript from "../assets/images/typescript.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-700",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: typescript,
      title: "Typescript",
      style: "shadow-sky-600",
    },
  ];

  return (
    <div name="skills" className=" w-full h-fit p-20">
      <div
        className=" max-w-screen-lg mx-auto
       p-4 flex flex-col justify-center w-full h-full
        text-white"
      >
        <div>
          <p
            className=" heading text-4xl font-bold border-b-4
           border-gray-500 p-2 inline text-beige"
          >
            Skills
          </p>
          <p className=" py-6">
            These are the tecnologies I have worked with..
          </p>
        </div>
        <div
          className=" w-full grid grid-cols-2
        sm:grid-cols-3 gap-8 text-center py-8 px-12
        sm:px-0"
        >
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105
           duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html icon" className=" w-20 mx-auto" />
              <p className=" mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
