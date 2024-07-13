import React from "react";

const LandingPage = () => {
  return (
    <section>
      <div className="  text-white h-screen top-0 stick flex align-middle items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center align-middle ">
          <div className="flex flex-col   justify-center items-start  p-2">
            <h1 className="text-6xl sm:text-5xl md:text-8xl text-yellow-300 tracking-loose font-WtfHorseland ">
              <span className="text-white ">
                hey <br />
              </span>
              Make healthy life with fresh grocery
            </h1>
            {/* <h3 className="text-sm lg:text-2xl font-dbold font-WtfHorseland   text-gray-50 mb-4">
              Explore your favourite events and register now to showcase your
              talent and win exciting prizes.
            </h3> */}

            <a
              href="#"
              className="relative border border-yellow-300 py-2 px-4 rounded bg-transparent text-yellow-300 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-0 before:w-full before:bg-yellow-300 before:transition-all before:duration-500 hover:text-lime-900 hover:shadow-red-500 hover:before:h-full"
            >
              <span className="relative z-10">Explore Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
