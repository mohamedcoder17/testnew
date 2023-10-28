import constants from "../constants";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full h-screen" id="home">
      <Navbar />
      <div className="absolute left-0 top-0 bg-primary/60 w-full h-full z-10 flex_center text-5xl">
        <h1 className="text-secondary text-center bg-white/10 w-full p-8">
          <span className="block text-8xl font-bold">شركة طيبة الخير </span>
          <span className="text-secondary/60">للاستثمار العقاري</span>
        </h1>
      </div>
      <img
        src={constants.images.HeaderImg}
        alt="header"
        className="object-cover w-full h-full"
      />
    </header>
  );
};

export default Header;
