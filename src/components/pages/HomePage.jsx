import Header from "../common/Header";

const HomePage = () => {
  return (
    <section>
      <div className=" from-lime-900 to-white text-white py-20 bg-[url('https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blend-darken bg-cover bg-center bg-no-repeat bg-lime-800">
        <Header />
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full  justify-center  items-center p-8">
            <h1 className="text-5xl md:text-9xl p-2 text-yellow-300 tracking-loose font-WtfHorseland">
              <span className="text-white ">hey <br /></span>Make healthy life with fresh grocery
            </h1>
            {/* <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Space : The Timeless Infinity
            </h2> */}
            <p className="text-sm  text-center text-gray-50 mb-4">
              Explore your favourite events and register now to showcase your
              talent and win exciting prizes.
            </p>

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

export default HomePage;
