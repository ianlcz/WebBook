import Link from "next/link";
import timeFromNow from "../utils/timeFromNow";

const Card = ({ content }) => (
  <div className="w-72 p-2 shadow-md rounded-lg">
    <img
      className="w-full h-36 object-cover rounded-lg"
      src={content.cover}
      alt={`Couverture du WebBook : ${content.title}`}
    />

    <div className="mt-2 p-4 bg-blue-50 rounded-lg">
      <div className="mb-2 text-xs text-gray-600 uppercase font-bold">
        Il y a {timeFromNow(content.publishedDate)}
      </div>
      <div className="font-bold text-gray-700 leading-snug">
        {content.title}
      </div>
      <div className="mt-1 text-xs text-gray-500 uppercase font-bold">
        Par {content.author.username}
      </div>
      <div className="mt-2 text-xs text-justify text-gray-600">
        {content.synopsis.length > 205
          ? content.synopsis.substring(0, 205) + "..."
          : content.synopsis}
      </div>
    </div>

    <div className="mt-2 flex w-full">
      <Link href="/">
        <a className="py-1 inline-flex justify-center w-full shadow-inner sm:text-sm rounded-full font-medium text-white bg-blue-800 hover:bg-blue-700">
          Lire ce livre
        </a>
      </Link>
    </div>
  </div>
);

export default Card;
