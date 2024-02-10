const Contact = () => {
  return (
    <div
      name="contact"
      className=" text-white w-full h-screen
     bg-gradient-to-b from-black to bg-gray-800 p-4"
    >
      <div
        className="flex flex-col p-4 justify-center max-w-screen-lg
      mx-auto h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            Contact
          </p>
          <p className=" py-6">
            Submit the Form below to get in touch with me.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/34bce18a-722a-473b-8c5b-d98d095c1cdf"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              className=" p-2 bg-transparent border-2 text-white
               focus:outline-none"
            />
            <input
              type="text"
              name="Email"
              placeholder="Enter your Email"
              className=" my-4 p-2 bg-transparent border-2 text-white
               focus:outline-none"
            />
            <textarea
              placeholder="Enter your message"
              name="msg"
              rows="10"
              className="
             p-2 rounded-md bg-transparent border-2
              text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className=" text-white bg-gradient-to-b
             from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
             items-center rounded-md hover:scale-110 duration-300"
            >
              Message Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
