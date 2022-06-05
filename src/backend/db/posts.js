import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "This impressive place is named as giethoorn village. So your day in Giethoorn should include a tour on an electric boat, canoe or traditional boat.",
      imgUrl:'https://res.cloudinary.com/dqgqdj4jf/image/upload/v1653161366/PalletGram/giethoorn-travel_ho6n6i.jpg',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aron20",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "This impressive place is named as giethoorn village. So your day in Giethoorn should include a tour on an electric boat, canoe or traditional boat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aron20",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
