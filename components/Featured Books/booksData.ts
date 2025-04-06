// data/seerahBooksData.ts

import { SeerahBook } from "@/types/seerahBook";


const seerahBooksData: SeerahBook[] = [
  {
    id: 1,
    title: "Ar-Raheeq Al-Makhtum (The Sealed Nectar)",
    paragraph:
      "An award-winning biography of the Prophet ﷺ, offering a detailed and authentic account of his life.",
    image: "https://m.media-amazon.com/images/I/812Nvjae3iL._UF1000,1000_QL80_.jpg",
    author: {
      name: "Safi-ur-Rahman al-Mubarakpuri",
      image: "/images/testimonials/auth-01.png",
      designation: "Islamic Scholar",
    },
    tags: ["authentic", "award-winning"],
    publishDate: "1976",
  },
  {
    id: 2,
    title: "Muhammad: His Life Based on the Earliest Sources",
    paragraph:
      "A beautifully written Seerah drawing from early sources with deep insight and literary flair.",
    image: "https://m.media-amazon.com/images/I/81T2sIksH4L.jpg",
    author: {
      name: "Martin Lings",
      image: "/images/testimonials/auth-01.png",
      designation: "Sufi Scholar",
    },
    tags: ["early sources", "literary"],
    publishDate: "1983",
  },
  {
    id: 3,
    title: "When the Moon Split",
    paragraph:
      "A simplified and illustrated version of the Seerah suitable for readers of all ages.",
    image: "https://m.media-amazon.com/images/I/51c3u4ePGCS._UF1000,1000_QL80_.jpg",
    author: {
      name: "Safi-ur-Rahman al-Mubarakpuri",
      image: "/images/testimonials/auth-01.png",
      designation: "Islamic Scholar",
    },
    tags: ["illustrated", "beginner"],
    publishDate: "2002",
  },
  {
    id: 4,
    title: "The Life of Muhammad ﷺ (Ibn Ishaq)",
    paragraph:
      "The earliest and most authentic biography of the Prophet ﷺ, compiled by the classical historian Ibn Ishaq.",
    image: "https://m.media-amazon.com/images/I/61kZm2cIDPL._AC_UF1000,1000_QL80_.jpg",
    author: {
      name: "Ibn Ishaq (Edited by Ibn Hisham)",
      image: "/images/testimonials/auth-01.png",
      designation: "Early Historian",
    },
    tags: ["classical", "historical"],
    publishDate: "8th Century",
  },
  {
    id: 5,
    title: "The Life of the Prophet Muhammad ﷺ (Ibn Kathir)",
    paragraph:
      "A 4-volume Seerah from one of the most respected scholars in Islamic history, based on authentic narrations.",
    image: "https://m.media-amazon.com/images/I/61UDpMRI8IL._AC_UF1000,1000_QL80_.jpg",
    author: {
      name: "Imam Ibn Kathir",
      image: "/images/testimonials/auth-01.png",
      designation: "Hadith Scholar",
    },
    tags: ["detailed", "authentic"],
    publishDate: "14th Century",
  },
  {
    id: 6,
    title: "In the Footsteps of the Prophet",
    paragraph:
      "A spiritual journey through the character and message of the Prophet ﷺ, emphasizing his compassion and wisdom.",
    image: "https://m.media-amazon.com/images/I/71IJOPfQqmL._AC_UF1000,1000_QL80_.jpg",
    author: {
      name: "Tariq Ramadan",
      image: "/images/testimonials/auth-01.png",
      designation: "Professor & Thinker",
    },
    tags: ["spiritual", "character"],
    publishDate: "2007",
  },
  {
    id: 7,
    title: "Fiqh-us-Seerah (Understanding the Life of the Prophet)",
    paragraph:
      "An analytical approach to the Seerah, connecting events to modern life and practical lessons.",
    image: "https://m.media-amazon.com/images/I/51VztmB+9DL.jpg",
    author: {
      name: "Muhammad Al-Ghazali",
      image: "/images/testimonials/auth-01.png",
      designation: "Egyptian Scholar",
    },
    tags: ["analytical", "modern lessons"],
    publishDate: "1997",
  },
  {
    id: 8,
    title: "Muhammad: Man and Prophet",
    paragraph:
      "A comprehensive and scholarly Seerah combining narration with contextual understanding.",
    image: "https://m.media-amazon.com/images/I/51VztmB+9DL.jpg",
    author: {
      name: "Adil Salahi",
      image: "/images/testimonials/auth-01.png",
      designation: "Islamic Historian",
    },
    tags: ["scholarly", "comprehensive"],
    publishDate: "2008",
  },
  {
    id: 9,
    title: "Muhammad: The Ideal Prophet",
    paragraph:
      "Focuses on the Prophet’s ﷺ ideal moral character and leadership, written by a renowned Indian scholar.",
    image: "https://m.media-amazon.com/images/I/51VztmB+9DL.jpg",
    author: {
      name: "Maulana Sulaiman Nadwi",
      image: "/images/testimonials/auth-01.png",
      designation: "Islamic Thinker",
    },
    tags: ["moral", "inspirational"],
    publishDate: "1935",
  },
  {
    id: 10,
    title: "Hayatus Sahabah (Lives of the Companions)",
    paragraph:
      "While focused on the Sahabah, it richly complements the Seerah through their love and service for the Prophet ﷺ.",
    image: "https://m.media-amazon.com/images/I/51VztmB+9DL.jpg",
    author: {
      name: "Maulana Muhammad Yusuf Kandhlawi",
      image: "/images/testimonials/auth-01.png",
      designation: "Tablighi Scholar",
    },
    tags: ["companions", "supporting seerah"],
    publishDate: "20th Century",
  },
];

export default seerahBooksData;
