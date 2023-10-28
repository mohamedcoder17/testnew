import { TbDeviceVisionPro } from "react-icons/tb";
import { MdOutlineDownhillSkiing } from "react-icons/md";
import { IoPaperPlaneSharp } from "react-icons/io5";

const Vision = () => {
  return (
    <div
      className="px-64 grid grid-cols-3 gap-20 text-center py-10 text-xl"
      id="vision"
    >
      <div className="col-span-1">
        <h1 className="text-6xl mx-auto w-fit text-secondary mb-6">
          <TbDeviceVisionPro />
        </h1>
        <h2 className="text-3xl mb-6 font-bold">رؤيتنا</h2>
        <p className="">لريادة في إدارة المزادات وإدارة الأملاك العقارية</p>
      </div>
      <div className="col-span-1">
        <h1 className="text-6xl mx-auto w-fit text-secondary mb-6">
          <MdOutlineDownhillSkiing />
        </h1>
        <h2 className="text-3xl mb-6 font-bold">رسالتنا</h2>
        <p>
          الاحتراف في تقديم الخدمات ، بأدوات فاعلة وتقنيات حديثة متخصصة ، بإدارة
          وإشراف نخبة من الخبراء ذوي الكفاءة العالية
        </p>
      </div>
      <div className="col-span-1">
        <h1 className="text-6xl mx-auto w-fit text-secondary mb-6">
          <IoPaperPlaneSharp />
        </h1>
        <h2 className="text-3xl mb-6 font-bold">قيمنا</h2>
        <ul>
          <li>التعاون والمشاركة</li>
          <li>الأمانة والجودة</li>
          <li>التطور والنمو </li>
          <li>التميز والاحتراف </li>
          <li>رعاية العميل</li>
        </ul>
      </div>
    </div>
  );
};

export default Vision;
