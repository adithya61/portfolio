import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} fill="blue" />
        </>
      ),
      href: "https://www.linkedin.com/in/adithya61/",
    },

    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} fill="black" />
        </>
      ),
      href: "https://www.github.com/adithya61/",
    },
    {
      id: 3,
      child: (
        <>
          Mail <CiMail size={30} fill="black" />
        </>
      ),
      href: "zonic662@gmail.com",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className="flex
         justify-between items-center w-40 h-14 
         px-4 bg-yellow-300 ml-[-100px]
          hover:ml-0 hover:rounded-md duration-300 border-b-2 border-gray-300"
          >
            <a
              href={href}
              className="flex justify-between
           items-center w-full"
              rel="noreferrer"
              target="_blank"
            >
              {child}
            </a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
