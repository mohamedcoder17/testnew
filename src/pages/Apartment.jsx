import ImageGallery from "react-image-gallery";
import constants from "../constants";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const images = [
  {
    original: constants.images.BlogImgOne,
    thumbnail: constants.images.BlogImgOne,
  },
  {
    original: constants.images.BlogImgTwo,
    thumbnail: constants.images.BlogImgTwo,
  },
  {
    original: constants.images.BlogImgThree,
    thumbnail: constants.images.BlogImgThree,
  },
  {
    original: constants.images.HeaderImg,
    thumbnail: constants.images.HeaderImg,
  },
];

const Apartment = () => {
  return (
    <div dir="rtl">
      <Navbar />
      <div className="p-64 grid grid-cols-12 gap-x-10">
        <div className="col-span-4 p-6 bg-gray-100 rounded-sm">
          <h1 className="font-bold text-2xl mb-4">العنوان</h1>
          <p>
            الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف
            الوصف الوصف الوصف الوصف الوصف الوصفالوصف الوصف الوصف الوصف الوصف
            الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف
            الوصف
          </p>
        </div>

        <div className="col-span-8">
          <ImageGallery items={images} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apartment;
