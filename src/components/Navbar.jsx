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
    <div
      className="flex  justify-between items-center w-full 
      h-20 text-white fixed
      md:px-[7rem]"
    >
      <h1 className="text-5xl font-signature ml-2">Adithya</h1>
      <ul className="courier-prime-regular hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize nav-text
            text-honeyDew hover:scale-103 hover:text-gray-400 
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
          className="courier-prime-regular  flex flex-col justify-center items-center 
       absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95 "
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6
              montserrat
            text-3xl "
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
