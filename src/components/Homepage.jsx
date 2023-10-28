import Header from "./Header";
import About from "./About";
import Vision from "./Vision";
import Companies from "./Companies";
import Apartments from "./Apartments";
import Services from "./Services";
import Footer from "./Footer";
import ManagerWord from "./ManagerWord";

const Homepage = () => {
  return (
    <div dir="rtl">
      <Header />
      <ManagerWord />
      <About />
      <Apartments />
      <Vision />
      <Companies />
      <Services />
      <Footer />
    </div>
  );
};

export default Homepage;
