import loaderImage from "@/images/loaderImage.png";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full min-h-screen z-50 bg-white p-10 flex items-center justify-center">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-dotted border-gray-400 animate-spin-slow"></div>

        <Image
          src={loaderImage}
          alt="loaderImage"
          className="w-14 h-14 object-cover"
        />
      </div>
    </div>
  );
};

export default Loader;
