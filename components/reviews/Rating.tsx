import { FaStar, FaRegStar } from "react-icons/fa";

export default function PropertyReviews({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;
    return value <= rating ? <FaStar key={value} /> : <FaRegStar key={value} />;
  });
  return (
    <div className="flex gap-x-1 items-center">
      {stars.map((isFilled, i) => {
        const className = `w-3 h-3 ${
          isFilled ? "text-primary" : "text-gray-400"
        }`;
        return isFilled ? (
          <span key={i}>{isFilled}</span>
        ) : (
          <span key={i}>{className}</span>
        );
      })}
    </div>
  );
}
