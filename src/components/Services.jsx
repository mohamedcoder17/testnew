import { RiAuctionLine } from "react-icons/ri";
import { PiAtom } from "react-icons/pi";
import { LiaBullhornSolid } from "react-icons/lia";

const services = [
  {
    title: "المزدادت العقارية",
    icon: <RiAuctionLine />,
  },
  {
    title: "الوساطة العقارية",
    icon: <PiAtom />,
  },
  {
    title: "إدارة الأملاك",
    icon: <LiaBullhornSolid />,
  },
  {
    title: "التقييم العقاري",
    icon: <LiaBullhornSolid />,
  },
  {
    title: "  مصنع للمنتجات الاسمنتية",
    icon: <PiAtom />,
  },
  {
    title: " المقاولات العامة",
    icon: <LiaBullhornSolid />,
  },
  {
    title: "  تاجير المعدات",
    icon: <LiaBullhornSolid />,
  },
];

const Services = () => {
  return (
    <div className="px-64 py-16" id="services">
      <h1 className="text-2xl font-bold">خدماتنا</h1>
      <div className="grid grid-cols-12 gap-10 mt-10">
        {services.map((service) => (
          <ul className="col-span-3 p-6 mt-10 relative bg-gray-200/30 shadow-xl shadow-gray-200/60 hover:shadow-xl list-disc">
            <h3 className="text-xl mb-4 font-bold">{service.title}</h3>
            <li>تحليل المشروع ومواصفاته وتقييمه</li>
            <li>وضع الخطة التسويقية والتشغيلية</li>
            <li>إدارة الفعالية وتوفير الكوادر المناسبة لعملية البيع</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Services;
