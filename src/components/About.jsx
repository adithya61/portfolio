const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen
     bg-gradient-to-b from-gray-800 to-black
      text-white"
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto
      flex flex-col justify-center w-full h-full"
      >
        <div className=" pb-8">
          <p
            className=" text-4xl font-bold
          inline border-b-4 border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          expedita quo porro, eos ex necessitatibus minus provident dolorum aut
          esse saepe doloremque ipsa veritatis reiciendis. Et possimus mollitia
          veniam earum dolorum expedita qui laboriosam animi, reprehenderit
          consectetur cum atque at deserunt beatae sit hic obcaecati! Ipsum unde
          sequi repudiandae omnis.
        </p>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius
          rerum obcaecati tempore cum quibusdam autem velit dolorem consequatur,
          ipsum, sunt doloremque illo amet deserunt temporibus facilis beatae
          repellat ipsa.
        </p>
      </div>
    </div>
  );
};

export default About;
