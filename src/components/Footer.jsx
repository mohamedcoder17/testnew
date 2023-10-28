import AnchorLink from "react-anchor-link-smooth-scroll";
import { useLocation } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const navLinksArabic = [
  "الرئيسية",
  "من نحن",
  "أحدث الشقق",
  "الشركات الشقيقة",
  "خدماتنا",
  // "المدونة",
  // "تواصل معنا",
];

const navLinks = ["#home", "#about", "#apartments", "#companies", "#services"];

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-primary/90 px-64 pt-16">
      <div className="text-white grid grid-cols-12">
        <div className="col-span-4">
          <h1 className="text-secondary text-center pt-0 p-6">
            <span className="block text-4xl font-bold">شركة طيبة الخير</span>
            <span className="text-secondary/60">للاستثمار العقاري</span>
          </h1>
          <p>
          شركة طيبة الخير للاستثمار العقاري وادارة الاملاك هي شركة رائدة في مجال العقارات
            الاستثمار والتطوير العقاري و التي تمتد خبرتها لما يزيد عن عشرين
            عامًا
          </p>
        </div>
        <div className="col-span-3">
          <ul className="flex_between flex-col text-right !items-end">
            {navLinksArabic.map((link, i) => (
              <li className="mx-8 hover:text-white/40">
                {location.pathname === "/" ? (
                  <AnchorLink href={`${navLinks[i]}`}>{link}</AnchorLink>
                ) : (
                  <Link to={`/${navLinks[i]}`}>{link}</Link>
                )}
              </li>
            ))}
            <Link to={`/blog`} className="mx-8 hover:text-white/40">
              المدونة
            </Link>
          </ul>
        </div>

        <div className="col-span-2"></div>

        <div className="col-span-2 text-lg">
          <ul className="flex_between flex-col mb-6 !items-end">
            <li className="flex justify-start items-center">
              <span className="ml-2"> 0561831541</span>
              <span>
                <FaMobileAlt />
              </span>
            </li>
            <li className="flex justify-start items-center">
              <span className="ml-2"> mohamedian2000@gmail.com</span>
              <span>
                <FaEnvelope />
              </span>
            </li>
          </ul>
          <ul className="flex_between">
            <li className="cursor-pointer bg-primary/30 p-4 rounded-full shadow-sm shadow-primary/50">
              <FaFacebookF />
            </li>
            <li className="cursor-pointer bg-primary/30 p-4 rounded-full shadow-sm shadow-primary/50">
              <FaTwitter />
            </li>
            <li className="cursor-pointer bg-primary/30 p-4 rounded-full shadow-sm shadow-primary/50">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}

      <div className="border-t-[1px] border-white/20 mt-6 text-2xl text-secondary text-center py-6">
        جميع الحقوق محفوظة &copy;
      </div>
    </footer>
  );
};

export default Footer;
