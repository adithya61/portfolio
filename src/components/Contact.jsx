const Contact = () => {
  return (
    <div name="contact" className=" text-white w-full h-fit">
      <div
        className="flex flex-col p-4 justify-center max-w-screen-lg
      mx-auto h-full"
      >
        <div className="pb-8">
          <p className=" heading text-4xl font-bold text-white inline">
            Contact
          </p>
          <p className=" py-6 text-xl">
            Submit the Form below to get in touch with me.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/34bce18a-722a-473b-8c5b-d98d095c1cdf"
            method="POST"
            className="flex flex-col w-full md:w-3/4 "
          >
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              className=" p-2 bg-transparent border border-white text-white border-opacity-50
               focus:outline-blue-300"
            />
            <input
              type="text"
              name="Email"
              placeholder="Enter your Email"
              className=" my-4 p-2 bg-transparent border border-white border-opacity-50 text-white
               focus:outline-blue-300"
            />
            <textarea
              placeholder="Enter your message"
              name="msg"
              rows="10"
              className="
             p-2 rounded-md bg-transparent border
              border-white border-opacity-50
              text-white focus:outline-blue-300"
            ></textarea>
            <button
              type="submit"
              className=" text-yellow-500 border border-yellow-500 font-semibold px-6 py-3 my-12 mx-auto flex
             items-center rounded-2xl hover:text-charcol hover:bg-mango duration-200"
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
