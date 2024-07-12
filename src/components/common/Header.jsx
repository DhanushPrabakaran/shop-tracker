const Header = () => {
  return (
    <div className="bg-lime-50 bg-transparent w-screen text-lime-700 h-20  justify-between flex flex-row items-center px-4">
      <div className="text-2xl font-extrabold font-WtfHorseland  p-2 pt-3">
        ShopTracker
      </div>

      <div className="btn-group gap-2 flex align-middle max-md:hidden  justify-around">
        <a
          href=""
          className="btn bg-lime-950 px-2 py-1 rounded hover:bg-white hover:text-lime-950 text-lime-200 duration-150 shadow-black shadow-2xl"
        >
          Home
        </a>
        
        <a
          href=""
          className="btn bg-lime-950 px-2 py-1 rounded hover:bg-white hover:text-lime-950 text-lime-200 duration-150 shadow-black shadow-2xl"
        >
          Catalog
        </a>
        <a
          href=""
          className="btn bg-lime-950 px-2 py-1 rounded hover:bg-white hover:text-lime-950 text-lime-200 duration-150 shadow-black shadow-2xl"
        >
          Shop
        </a>
        <a
          href=""
          className="btn bg-lime-950 px-2 py-1 rounded hover:bg-white hover:text-lime-950 text-lime-200 duration-150 shadow-black shadow-2xl"
        >
          Contact
        </a>
      </div>
      
      <div
      className="flex flex-row gap-2 ">

      <input
        type="search"
        name=""
        id=""
        placeholder="Search.."
        className=" px-2 py-1 rounded border-lime-950 border"
      />
      <button className="btn bg-lime-950 px-3 py-2 rounded hover:bg-white hover:text-lime-950 text-lime-200 duration-150 shadow-black shadow-2xl">
        Login
      </button>
      </div>
    </div>
  );
};

export default Header;
