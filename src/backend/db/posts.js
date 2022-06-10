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
    imgUrl: 'https://res.cloudinary.com/dqgqdj4jf/image/upload/v1653161366/PalletGram/giethoorn-travel_ho6n6i.jpg',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aron20",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "This impressive place is named as giethoorn village. So your day in Giethoorn should include a tour on an electric boat, canoe or traditional boat.",
    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aron20",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Pets for Life (PFL) is driven by social justice and guided by the philosophy that a deep connection with pets transcends socio-economic, racial and geographic boundaries, and no one should be denied the opportunity to experience the benefits, joy and comfort that come from the human-animal bond.",
    imgUrl: 'https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654761456/PalletGram/posts/portrait-young-woman-with-laughing-corgi-puppy-nature-background-picture-id1276788283_hzhmxj.jpg',
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "varnita19",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "We're social animals. On some level, most people need...people.So another answer to how to make life fun is to fill that life with a handful of friends and family that you truly love. And stay connected. Make it a habit to call, text, or email. Check on them. Invite them over. Make plans.Don't wait for others to connect with you. Make connecting with them a regular habit.",
    imgUrl: 'https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654764648/PalletGram/posts/helena-lopes-PGnqT0rXWLs-unsplash-1024x683_jvqi3c.jpg',
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "varnita19",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Every moment is a crossroads. You can turn left, you can turn right, or you can continue straight ahead. You could return to your starting point and then just keep driving. A million paths lie at your feet, each better than the last and no worse than the next. Choose a new path every second and never look back. ",
    imgUrl: 'https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654763581/PalletGram/posts/lambo_scivqm.gif',
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "samyakshah",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Working from home is mostly more comfortable than an office. You can work in your PJs, you can can work at a desk or any other suitable surface (i.e.: couch, bed, desk, whatever suites you)..",
    imgUrl: 'https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654761366/PalletGram/posts/getting-things-done-from-the-comfort-of-home-picture-id1185440421_v7qvnq.jpg',
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "samyakshah",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Happy to announce that I have bought my new car😍.",
    imgUrl: 'https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654761005/PalletGram/posts/photo-1532581140115-3e355d1ed1de_tjn2pz.jpg',
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pritamkumar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "“Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world. Today, and every other day, I choose me.😊”",
    imgUrl: 'https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654765179/PalletGram/posts/john-gough-hiIa41IoVZs-unsplash-1170x490_krjotq.jpg',
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "pritamkumar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Loving my new setup🔥🤩.",
    imgUrl: 'https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654761102/PalletGram/posts/photo-1499951360447-b19be8fe80f5_dxvwjz.png',
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anujkumar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "JavaScript is a programming language used primarily by Web browsers to create a dynamic and interactive experience for the user. Trying to get my hands dirty with JS.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anujkumar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
];
