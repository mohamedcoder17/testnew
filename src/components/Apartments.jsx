import { Link } from "react-router-dom";
import apartment from "../assets/apartment.jpg";

const apartments = Array(6).fill({
  img: apartment,
  status: "للإيجار",
  price: "$1478",
  code: "#6001",
  address: "شارع مراكش.دبي.الإمارات العربية المتحدة",
});

const Apartments = () => {
  return (
    <div className="px-64 py-10 bg-primary/5" id="apartments">
      <h1 className="text-xl font-bold mb-10">أحدث الشقق</h1>

      <div className="grid grid-cols-12 gap-x-4 gap-y-12">
        {apartments.map((item) => (
          <div className="col-span-4 cursor-pointer">
            <Link to="/apartment">
              <div className="relative">
                <span className="absolute left-2 top-2 bg-primary rounded-tr-2xl rounded-bl-2xl text-white px-3">
                  {item.status}
                </span>
                <img
                  src={item.img}
                  alt={item.address}
                  className="rounded-tr-xl"
                />
              </div>
              <div className="bg-white p-2 rounded-bl-xl">
                <div className="p-2 border-b-[1px] border-primary/60 flex_between">
                  <span>{item.code}</span>
                  <span className="font-bold">{item.price}</span>
                </div>
                <div className="p-2">{item.address}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartments;
