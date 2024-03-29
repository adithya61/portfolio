import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "about",
    },
    {
      id: 3,
      name: "projects",
    },
    {
      id: 4,
      name: "skills",
    },
    {
      id: 5,
      name: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <h1 className="text-5xl font-signature ml-2">adithya</h1>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize
            font-medium text-gray-400 hover:scale-105 hover:text-white duration-200
            "
          >
            <Link to={link.name} smooth duration={500}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className=" md:hidden cursor-pointer pr-4 z-10
        text-gray-300"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center 
       absolute top-0 left-0 w-full h-screen bg-gradient-to-b
        from-black to-gray-500 text-gray-300 "
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6
            text-4xl"
            >
              <Link
                onClick={() => setNav(false)}
                to={link.name}
                smooth
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
