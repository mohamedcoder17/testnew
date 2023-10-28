import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from "react-router-dom";

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

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation();

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 600) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  return (
    <nav
      className={`${
        isScroll || location !== "/" ? "fixed top-0" : "absolute bottom-0"
      } w-full z-[100] left-0`}
    >
      <ul className="flex_center bg-primary/60 text-white p-8 text-2xl">
        {navLinksArabic.map((link, i) => (
          <li className="mx-8 hover:text-white/40">
            <AnchorLink href={`${navLinks[i]}`}>{link}</AnchorLink>
          </li>
        ))}
        <Link to={`/blog`} className="mx-8 hover:text-white/40">
          المدونة
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
