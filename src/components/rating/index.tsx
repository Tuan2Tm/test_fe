import { FaStar } from "react-icons/fa";

interface IProps {
  totalStars: number;
  rating: number;
}

const Rating: React.FC<IProps> = ({ totalStars = 5, rating = 4 }) => {
  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <FaStar
          key={index}
          className={`flex cursor-pointer ${
            index < rating ? "text-black" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default Rating;
