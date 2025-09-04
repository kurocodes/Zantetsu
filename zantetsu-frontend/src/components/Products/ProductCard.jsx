import { useState } from "react";
import { icons } from "../../assets/assets";
import { useGeneralContext } from "../../context/GeneralContext";

export default function ProductCard({
  id,
  images,
  title,
  discountedPrice,
  price,
}) {
  const [imgIdx, setImgIdx] = useState(0);

  const { navigate } = useGeneralContext();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer font-body">
      {/* Image carousel */}
      <div className="group relative w-full overflow-hidden flex">
        <img
          src={images[imgIdx]}
          alt={`Product Image ${imgIdx}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
          onClick={() => navigate(`/products/${id}`)}
        />

        {/* Carousel nav buttons */}
        <div className="absolute w-full flex justify-between top-1/2 px-5">
          <ImageNavBtn
            style={`${imgNavBtnStyle} -translate-x-20`}
            action={() =>
              setImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }
            Icon={icons.IoIosArrowBack}
          />
          <ImageNavBtn
            style={`${imgNavBtnStyle} translate-x-20`}
            action={() =>
              setImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))
            }
            Icon={icons.IoIosArrowForward}
          />
        </div>
      </div>

      {/* Product details */}
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate hover:text-highlight transition-colors duration-200" onClick={() => navigate(`/products/${id}`)}>
          {title}
        </h3>
        <div className="flex gap-2">
          <p className="text-highlight font-medium mt-1">${discountedPrice}</p>
          <p className="text-gray-400 font-bold mt-1 line-through">${price}</p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-3">
          <button className="flex gap-2 items-center bg-bgMuted text-bgLight rounded-lg p-[10px] cursor-pointer hover:bg-highlight transition-colors duration-300">
            <icons.FaRegEye />
          </button>
          <button className="flex-1 bg-highlight text-white py-1.5 rounded-lg cursor-pointer hover:bg-accentGold hover:text-bgMuted transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// Rounded Button (Only Icon)
function ImageNavBtn({ style, action, Icon }) {
  return (
    <button className={style} onClick={action}>
      <Icon />
    </button>
  );
}

// Rounded Button Style
const imgNavBtnStyle =
  "bg-highlight text-bgLight p-3 rounded-full opacity-0 cursor-pointer hover:bg-accentGold hover:text-bgDark group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300";
