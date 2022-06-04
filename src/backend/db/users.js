import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bookmarks: [],
    bio: 'Aspring FullStack Developer',
    website: ' https://varnitamakrariya.netlify.app/',
    avatar: './img/user.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
