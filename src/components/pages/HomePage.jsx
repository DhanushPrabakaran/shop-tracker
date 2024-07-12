import Header from "../common/Header";
import Footer from "../common/Footer";

const HomePage = () => {
  return (
    <div className="bg-hero-pattern  bg-center  bg-cover w-full h-screen">
      <Header />
      <div>
        <h1 className="text-5xl w-full h-[80vh] bg-gradient-to-tr from-lime-900 to-white-100 bg-opacity-10 font-bold text-white text-center">Welcome to the
          <span className="text-red-500"> Home Page</span></h1>
          
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
