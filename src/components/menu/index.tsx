import { Heart, Home, ShoppingCart, UserRound } from "lucide-react";
import { CiShop } from "react-icons/ci";

const MenuMobile = () => {
  return (
    <div className="flex justify-center items-center gap-x-6 h-[75px] bg-[#FFFFFF] shadow-['0px 5px 30px 0px rgba(0, 0, 0, 0.06);'] md:hidden">
      <div className="flex flex-col items-center">
        <Home size={17} />
        <p className="text-[12px] text-[#111111] font-medium mt-2">Home</p>
      </div>
      <div className="flex flex-col items-center">
        <CiShop size={17} />
        <p className="text-[12px] text-[#111111] font-medium mt-2">Shop</p>
      </div>
      <div className="flex flex-col items-center">
        <UserRound size={17} />
        <p className="text-[12px] text-[#111111] font-medium mt-2">Account</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex relative">
          <Heart size={17} />
          <div className="absolute -top-2 -right-3 text-[10px] bg-red-600 rounded-full text-white size-[18px] flex items-center justify-center">
            2
          </div>
        </div>
        <p className="text-[12px] text-[#111111] font-medium mt-2">Wishlist</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex relative">
          <ShoppingCart size={17} />
          <div className="absolute -top-2 -right-3 text-[10px] bg-red-600 rounded-full text-white size-[18px] flex items-center justify-center">
            2
          </div>
        </div>
        <p className="text-[12px] text-[#111111] font-medium mt-2">Cart</p>
      </div>
    </div>
  );
};

export default MenuMobile;
