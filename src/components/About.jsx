import { PiCertificate } from "react-icons/pi";
import { IoDocumentsOutline } from "react-icons/io5";
import { BiBuildingHouse, BiBuilding } from "react-icons/bi";
import { ImHammer2 } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import constants from "../constants";

const aboutFeatures = [
  {
    title: "وكيل بيع قضائي مرخص من وزارة العدل",
    icon: <PiCertificate />,
  },
  {
    title: "حارس قضائي مرخص من مركز الإسناد والتصفية إنفاذ",
    icon: <IoDocumentsOutline />,
  },
  {
    title: "شركة مرخصة من الهيئة العامة للعقار لتقديم الخدمات العقارية",
    icon: <BiBuilding />,
  },
  {
    title: "شركات شقيقة متخصصة في التطوير العقاري وإدارة المرافق",
    icon: <BiBuildingHouse />,
  },
  {
    title: " شريك استراتيجي متخصص في المحاماة والاستشارات القانونية",
    icon: <ImHammer2 />,
  },

  {
    title: "فريق مختص في مجال التسويق والدعاية والإعلان وبناء الهوية البصرية",
    icon: <FaPeopleGroup />,
  },
];

const About = () => {
  return (
    <div className="relative text-white" id="about">
      <img src={constants.images.AboutImg} alt="About" className="w-full" />
      <div className="absolute left-0 top-0 bg-primary/60 w-full h-full z-10 flex justify-between pt-64 flex-col">
        <div className="px-64">
          <h1 className="text-3xl mb-6 font-bold">شركة طيبة الخير   </h1>
          <p className="text-lg w-4/6">
            شركة طيبة الخير للاستثمار العقاري والمزدادت العقارية هي الشركة الاولى 
            في مجال الاستثمار العقاري والمزدادت العقارية 

            الاستثمار والتطوير العقاري و التي تمتد خبرتها لما يزيد عن عشرين
            عامًا ، قدمت خلالها العديد من المشاريع والمنتجات العقارية في
            القطاعين السكني والتجاري ، وتأتي شركة طيبة الخير امتداداً لخبرة المجموعة في
            مجال إدارة المزادات ، والعقارات ، والحراسة القضائية .
          </p>
        </div>

        <div className="py-10 px-64 text-lg bg-primary/20">
          <ul className="grid grid-cols-3 gap-x-6">
            {aboutFeatures.map((feature) => (
              <li className="col-span-1 flex items-center text-center flex-col my-10">
                <span className="mb-2 text-5xl text-secondary">
                  {feature.icon}
                </span>
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
