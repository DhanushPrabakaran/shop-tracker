import Header from "../common/Header";
import LandingPage from "../common/LandingPage";
import Catogary from "../common/Catogary";
import StickyScroll from "../common/StickyScroll";
const HomePage = () => {
  // bg-[url('https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
  // bg-gradient-to-b from-lime-900  via-lime-600  to-yellow-300
  return (
    <div className=" w-full h-full  flex flex-col items-center bg-gradient-to-b from-lime-900  via-lime-600  to-yellow-300 ">
      <Header />
      <div className="relative">
        <div className="sticky top-0 h-screen flex items-center justify-center ">
          <LandingPage />
        </div>

        <div className="sticky top-0 h-screen flex align-middle items-center justify-center bg-transparent bg-opacity-75">
          <img
            src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" translate-y-72  w-96 transform  duration-1000  hover:rotate-x-45"
          />
        </div>
        <div className="sticky top-0 h-screen flex align-middle items-center justify-center bg-transparent bg-opacity-75">
          <img
            src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" translate-y-72  w-96 transform  duration-1000  hover:rotate-x-45"
          />
        </div>
        <div className="sticky top-0 h-screen flex align-middle items-center justify-center bg-transparent bg-opacity-75">
          <img
            src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" translate-y-72  w-96 transform  duration-1000  hover:rotate-x-45"
          />
        </div>
        <div className="sticky top-0 h-screen flex align-middle items-center justify-center bg-transparent bg-opacity-75">
          <img
            src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" translate-y-72  w-96 transform  duration-1000  hover:rotate-x-45"
          />
        </div>
        <div className="sticky top-0 h-screen flex align-middle items-center justify-center bg-transparent bg-opacity-75">
          <img
            src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" translate-y-72  w-96 transform  duration-1000  hover:rotate-x-45"
          />
        </div>
        {/* <div className="sticky top-0 h-screen flex align-middle items-center justify-center bg-transparent bg-opacity-75">  
          <img src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
          className="w-32"/>
        </div>
        <div className="sticky top-0 h-screen flex align-middle items-center justify-center bg-transparent bg-opacity-75">  
          <img src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
          className="w-32"/>
        </div>
        <div className="sticky top-0 h-screen flex align-middle items-center justify-center bg-transparent bg-opacity-75">  
          <img src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
          className="w-32"/>
        </div>
        <div className="sticky top-0 h-screen flex align-middle items-center justify-center bg-transparent bg-opacity-75">  
          <img src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
          className="w-32"/>
        </div> */}
        {/* <div className="sticky top-0 h-screen flex items-center justify-center bg-green-500 bg-opacity-75">
          <h1 className="text-5xl text-white">Section 3</h1>
        </div>
        <div className="sticky top-0 h-screen flex items-center justify-center bg-green-500 bg-opacity-75">
          <h1 className="text-5xl text-white">Section 4</h1>
        </div>
        <div className="sticky top-0 h-screen flex items-center justify-center bg-green-500 bg-opacity-75">
          <h1 className="text-5xl text-white">Section 5</h1>
        </div>
        <div className="sticky top-0 h-screen flex items-center justify-center bg-green-500 bg-opacity-75">
          <h1 className="text-5xl text-white">Section 6</h1>
        </div>
        <div className="sticky top-0 h-screen flex items-center justify-center bg-green-500 bg-opacity-75">
          <h1 className="text-5xl text-white">Section 7</h1>
        </div> */}
      </div>
      <Catogary />
    </div>
  );
};

export default HomePage;
