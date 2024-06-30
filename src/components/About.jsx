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
          🚀 Passionate web developer experienced in front end development, with
          expertise in JavaScript, ReactJS, and data structures algorithms.
          <br />
          Seeking opportunities to leverage my skills and contribute to
          innovative projects. 🎯 Developing web applications using HTML5, CSS3,
          and ReactJS, ensuring seamless user authentication and efficient data
          representation.
        </p>
        <br />
        <p className="text-xl">
          💡 Successfully deployed cloud-based applications for scalability and
          enhanced user experience, utilising technologies such as, MongoDB, and
          GCP cloud services. 
          <br />
          🔬 Analytical mindset with a demonstrated ability
          to extract insights from large datasets, showcased through the
          development of ML models for predicting defaulters and non-defaulters.
        </p>
      </div>
    </div>
  );
};

export default About;
