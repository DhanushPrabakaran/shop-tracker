const Header = () => {
  return (
    <div className="bg-lime-50 bg-transparent w-full text-yellow-300 h-20  justify-between flex flex-row items-center px-4 absolute top-0">
      <div className=" lg:text-4xl text-2xl font-extrabold font-WtfHorseland  p-2 pt-3">
        ShopTracker
      </div>

      <div className="btn-group gap-2 flex align-middle max-md:hidden  justify-around">
        <a
          href=""
          className="relative border border-yellow-300 py-1 px-4 rounded bg-transparent text-yellow-300 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-300 before:transition-all before:duration-500 hover:text-lime-900 hover:shadow-red-500 hover:before:w-full"
        >
          <span
          className="z-10 relative">
          Home
          </span>
        </a>
        
        <a
          href=""
          className="relative border border-yellow-300 py-1 px-4 rounded bg-transparent text-yellow-300 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-300 before:transition-all before:duration-500 hover:text-lime-900 hover:shadow-red-500 hover:before:w-full"
          >
            <span
            className="z-10 relative">
          Catalog
          </span>
        </a>
        <a
          href=""
          className="relative border border-yellow-300 py-1 px-4 rounded bg-transparent text-yellow-300 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-300 before:transition-all before:duration-500 hover:text-lime-900 hover:shadow-red-500 hover:before:w-full"
        >
          <span
          className="z-10 relative">
          Shop
            </span>
        </a>
        <a
          href=""
          className="relative border border-yellow-300 py-1 px-4 rounded bg-transparent text-yellow-300 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-300 before:transition-all before:duration-500 hover:text-lime-900 hover:shadow-red-500 hover:before:w-full"
          >
            <span
            className="z-10 relative">
          Contact
          </span>
        </a>
      </div>
      
      <div
      className="flex flex-row gap-2 ">

      <input
        type="search"
        name=""
        id=""
        placeholder="Search.."
        className=" px-2 py-1 rounded border-yellow-300 border bg-lime-950 text-yellow-300 placeholder-lime-100 "
      />
      <button className="btn bg-lime-950 px-3 py-2 rounded hover:bg-white hover:text-lime-950 text-lime-200 duration-150 shadow-black shadow-2xl">
        Login
      </button>
      </div>
    </div>
  );
};

export default Header;
