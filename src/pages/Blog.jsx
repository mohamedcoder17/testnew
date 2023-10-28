import constants from "../constants";
import { MdOutlinePersonOutline, MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegComments } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div dir="rtl" id="blog">
      {/* <Navbar /> */}

      <div className="h-96 relative">
        <div className="block w-full h-full left-0 top-0 bg-primary/80 absolute">
          <h1 className="text-secondary text-8xl flex_center h-full font-bold">
            المدونة
          </h1>
        </div>
        <img
          src={constants.images.AboutImg}
          alt="header"
          className="h-full w-full object-cover"
        />
      </div>
      {/*  */}
      <div className="py-32 px-64 bg-gray-200">
        <div className="p-12 bg-gray-100">
          <h1 className="mb-12 text-5xl font-bold text-gray-700">
            ماذا قدمنا في أخر 10 سنوات
          </h1>
          <div>
            <img src={constants.images.BlogImgOne} alt="Blog" className="w-" />
          </div>

          <div className="flex_between w-3/6 my-6 text-lg">
            <h3 className="flex_between">
              <span className="ml-2 text-2xl text-secondary">
                <MdOutlinePersonOutline />
              </span>
              <span>بواسطة الأدمن</span>
            </h3>
            <h3 className="flex_between">
              <span className="ml-2 text-2xl text-secondary">
                <MdOutlineCalendarMonth />
              </span>
              <span>7 إبريل 2023</span>
            </h3>
            <h3 className="flex_between">
              <span className="ml-2 text-2xl text-secondary">
                <FaRegComments />
              </span>
              <span>0 تعليقات</span>
            </h3>
          </div>

          <p className="my-6">
            إحدى الشركات الشقيقة لمجموعة السليمان العقارية المتخصصة في مجال
            الاستثمار والتطوير العقاري و التي تمتد خبرتها لما يزيد عن عشرين
            عامًا ، قدمت خلالها العديد من المشاريع والمنتجات العقارية في
            القطاعين السكني والتجاري ، وتأتي بصمة امتداداً لخبرة المجموعة في
            مجال إدارة المزادات ، والعقارات ، والحراسة القضائية . إحدى الشركات
            الشقيقة لمجموعة السليمان العقارية المتخصصة في مجال الاستثمار
            والتطوير العقاري و التي تمتد خبرتها لما يزيد عن عشرين عامًا ، قدمت
            خلالها العديد من المشاريع والمنتجات العقارية في القطاعين السكني
            والتجاري ، وتأتي بصمة امتداداً لخبرة المجموعة في مجال إدارة المزادات
            ، والعقارات ، والحراسة القضائية .
          </p>

          <div className="flex_between gap-x-4">
            <div>
              <img src={constants.images.BlogImgTwo} alt="Blog" />
            </div>
            <div>
              <img src={constants.images.BlogImgThree} alt="Blog" />
            </div>
          </div>

          <p className="my-6">
            إحدى الشركات الشقيقة لمجموعة السليمان العقارية المتخصصة في مجال
            الاستثمار والتطوير العقاري و التي تمتد خبرتها لما يزيد عن عشرين
            عامًا ، قدمت خلالها العديد من المشاريع والمنتجات العقارية في
            القطاعين السكني والتجاري ، وتأتي بصمة امتداداً لخبرة المجموعة في
            مجال إدارة المزادات ، والعقارات ، والحراسة القضائية . إحدى الشركات
            الشقيقة لمجموعة السليمان العقارية المتخصصة في مجال الاستثمار
            والتطوير العقاري و التي تمتد خبرتها لما يزيد عن عشرين عامًا ، قدمت
            خلالها العديد من المشاريع والمنتجات العقارية في القطاعين السكني
            والتجاري ، وتأتي بصمة امتداداً لخبرة المجموعة في مجال إدارة المزادات
            ، والعقارات ، والحراسة القضائية .
          </p>

          <p className="my-6 text-center bg-gray-300 text-gray-800 p-10 rounded-2xl">
            <span className="block text-3xl text-secondary mb-6">
              بواسطة مدير الخدمات
            </span>
            <q className="block text-xl">
              إحدى الشركات الشقيقة لمجموعة السليمان العقارية المتخصصة في مجال
              الاستثمار والتطوير العقاري و التي تمتد خبرتها لما يزيد عن عشرين
              عامًا ، قدمت خلالها العديد من المشاريع والمنتجات العقارية في
              القطاعين السكن لخبرة المجموعة في مجال إدارة المزادات ، والعقارات ،
              والحراسة القضائية .
            </q>
          </p>

          <p className="my-6">
            إحدى الشركات الشقيقة لمجموعة السليمان العقارية المتخصصة في مجال
            الاستثمار والتطوير العقاري و التي تمتد خبرتها لما يزيد عن عشرين
            عامًا ، قدمت خلالها العديد من المشاريع والمنتجات العقارية في
            القطاعين السكني والتجاري ، وتأتي بصمة امتداداً لخبرة المجموعة في
            مجال إدارة المزادات ، والعقارات ، والحراسة القضائية . إحدى الشركات
            الشقيقة لمجموعة السليمان العقارية المتخصصة في مجال الاستثمار
            والتطوير العقاري و التي تمتد خبرتها لما يزيد عن عشرين عامًا ، قدمت
            خلالها العديد من المشاريع والمنتجات العقارية في القطاعين السكني
            والتجاري ، وتأتي بصمة امتداداً لخبرة المجموعة في مجال إدارة المزادات
            ، والعقارات ، والحراسة القضائية .
          </p>

          <div className="w-2/3 bg-gray-200/80 p-6">
            <h2 className="text-2xl font-bold">اترك تعليقا</h2>
            <form className="flex_between flex-col mt-6">
              <input
                className="w-full rounded-md bg-transparent focus:outline-none border-2 border-gray-300 p-3"
                type="text"
                placeholder="اسمك"
              />
              <input
                className="my-3 w-full rounded-md bg-transparent focus:outline-none border-2 border-gray-300 p-3"
                type="text"
                placeholder="ايميلك"
              />
              <textarea
                className="w-full rounded-md bg-transparent focus:outline-none border-2 border-gray-300 p-3 resize-none h-32"
                placeholder="تعليقك..."
              ></textarea>
              <button className="w-32 mt-6 px-4 py-2 text-2xl bg-secondary rounded-lg text-white">
                نشر
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
