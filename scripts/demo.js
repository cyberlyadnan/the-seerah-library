// async function sequentialCreateAuthors(authors: Omit<Author, 'id'>[]) {
//   const results = [];

//   for (const author of authors) {
//     try {
//       const authorId = await createAuthor(author);
//       results.push({ ...author, id: authorId });
//       console.log(`Uploaded ${author.name}`);
//     } catch (error) {
//       console.error(`Failed to upload ${author.name}:`, error);
//       results.push({ ...author, error: String(error) });
//     }
//   }

//   return results;

// }
// sequentialCreateAuthors(authorsData).then((results) => {
//   console.log("All authors processed:", results);
// } );

const books = [
  {
    id: "s0LQgMaDYI2SVhqPczx6",
    tags: ["spiritual", "character"],
    genre: ["Biography", "Seerah"],
    publishDate: "2007",
    coverImage:
      "https://m.media-amazon.com/images/I/71IJOPfQqmL._AC_UF1000,1000_QL80_.jpg",
    rating: 0,
    isFeatured: false,
    totalReviews: 0,
    title: "In the Footsteps of the Prophet",
    authorId: "mwwIeqPIdH1TgTbGQw3S",
    author: {
      name: "Tariq Ramadan",
      designation: "Professor & Thinker",
      image: "/images/testimonials/auth-01.png",
    },
    totalRatings: 0,
    language: "English",
    description:
      "A spiritual journey through the character and message of the Prophet ﷺ, emphasizing his compassion and wisdom.",
  },
  {
    id: "WzWf5ItQ7tWP0lxYleUr",
    genre: ["Biography", "Seerah"],
    publishDate: "14th Century",
    author: {
      image: "/images/testimonials/auth-01.png",
      designation: "Hadith Scholar",
      name: "Imam Ibn Kathir",
    },
    authorId: "8kDce2s2CBAA7Alo3cYm",
    isFeatured: false,
    coverImage:
      "https://m.media-amazon.com/images/I/61UDpMRI8IL._AC_UF1000,1000_QL80_.jpg",
    language: "English",
    title: "The Life of the Prophet Muhammad ﷺ (Ibn Kathir)",
    totalRatings: 0,
    rating: 0,
    description:
      "A 4-volume Seerah from one of the most respected scholars in Islamic history, based on authentic narrations.",
    totalReviews: 0,
    tags: ["detailed", "authentic"],
  },
  {
    id: "aeCctlVYMoqHIj6Zzisc",
    tags: ["classical", "historical"],
    genre: ["Biography", "Seerah"],
    publishDate: "8th Century",
    rating: 0,
    coverImage:
      "https://m.media-amazon.com/images/I/61kZm2cIDPL._AC_UF1000,1000_QL80_.jpg",
    totalReviews: 0,
    isFeatured: false,
    title: "The Life of Muhammad ﷺ (Ibn Ishaq)",
    authorId: "x6w9P6ZWSUmeIZJcMGc3",
    author: {
      name: "Ibn Ishaq (Edited by Ibn Hisham)",
      designation: "Early Historian",
      image: "/images/testimonials/auth-01.png",
    },
    totalRatings: 0,
    description:
      "The earliest and most authentic biography of the Prophet ﷺ, compiled by the classical historian Ibn Ishaq.",
    language: "English",
  },
  {
    id: "Rn5W4y2rZ2u5yOELb2AL",
    totalReviews: 0,
    rating: 0,
    isFeatured: false,
    description:
      "A simplified and illustrated version of the Seerah suitable for readers of all ages.",
    title: "When the Moon Split",
    totalRatings: 0,
    authorId: "4RQxiu61GqQHL5AEwgP8",
    tags: ["illustrated", "beginner"],
    author: {
      designation: "Islamic Scholar",
      name: "Safi-ur-Rahman al-Mubarakpuri",
      image: "/images/testimonials/auth-01.png",
    },
    language: "English",
    genre: ["Biography", "Seerah"],
    coverImage:
      "https://m.media-amazon.com/images/I/51c3u4ePGCS._UF1000,1000_QL80_.jpg",
    publishDate: "2002",
  },
  {
    id: "TNwm1GMiryeSKyR0JglK",
    isFeatured: false,
    coverImage: "https://m.media-amazon.com/images/I/81T2sIksH4L.jpg",
    language: "English",
    totalReviews: 0,
    tags: ["early sources", "literary"],
    rating: 0,
    description:
      "A beautifully written Seerah drawing from early sources with deep insight and literary flair.",
    title: "Muhammad: His Life Based on the Earliest Sources",
    authorId: "ZlmpkTbjmE3CIkLIN4yJ",

    author: {
      name: "Martin Lings",
      image: "/images/testimonials/auth-01.png",
      designation: "Sufi Scholar",
    },
    publishDate: "1983",
    totalRatings: 0,
    genre: ["Biography", "Seerah"],
  },
  {
    id: "QKc7IItGgBBQQT3kZapN",
    totalRatings: 0,
    isFeatured: false,
    totalReviews: 0,
    authorId: "4RQxiu61GqQHL5AEwgP8",
    author: {
      name: "Safi-ur-Rahman al-Mubarakpuri",
      designation: "Islamic Scholar",
      image: "/images/testimonials/auth-01.png",
    },
    rating: 0,
    title: "Ar-Raheeq Al-Makhtum (The Sealed Nectar)",
    language: "English",
    genre: ["Biography", "Seerah"],
    description:
      "An award-winning biography of the Prophet ﷺ, offering a detailed and authentic account of his life.",
    publishDate: "1976",
    coverImage:
      "https://m.media-amazon.com/images/I/812Nvjae3iL._UF1000,1000_QL80_.jpg",
    tags: ["authentic", "award-winning"],
  },
  {
    id: "iGLg65Ai8y6ordb6OZB7",
    coverImage:
      "https://m.media-amazon.com/images/I/71IJOPfQqmL._AC_UF1000,1000_QL80_.jpg",
    isFeatured: false,
    totalReviews: 0,
    language: "English",
    description:
      "A spiritual journey through the character and message of the Prophet ﷺ, emphasizing his compassion and wisdom.",
    tags: ["spiritual", "character"],
    genre: ["Biography", "Seerah"],
    title: "In the Footsteps of the Prophet",
    authorId: "mwwIeqPIdH1TgTbGQw3S",
    author: {
      image: "/images/testimonials/auth-01.png",
      designation: "Professor & Thinker",
      name: "Tariq Ramadan",
    },
    totalRatings: 0,
    rating: 0,
    publishDate: "2007",
  },
  {
    id: "hRd4f5lo3oNy54Ef0PXG",
    publishDate: "14th Century",
    rating: 0,
    totalReviews: 0,
    totalRatings: 0,
    coverImage:
      "https://m.media-amazon.com/images/I/61UDpMRI8IL._AC_UF1000,1000_QL80_.jpg",
    title: "The Life of the Prophet Muhammad ﷺ (Ibn Kathir)",
    isFeatured: false,
    genre: ["Biography", "Seerah"],
    tags: ["detailed", "authentic"],
    description:
      "A 4-volume Seerah from one of the most respected scholars in Islamic history, based on authentic narrations.",
    authorId: "4RQxiu61GqQHL5AEwgP8",
    author: {
      designation: "Hadith Scholar",
      name: "Imam Ibn Kathir",
      image: "/images/testimonials/auth-01.png",
    },
    language: "English",
  },
];

const data = [
  {
    title: "In the Footsteps of the Prophet",
    authorId: "mwwIeqPIdH1TgTbGQw3S",
    author: {
      name: "Tariq Ramadan",
      designation: "Professor & Thinker",
      image: "/images/testimonials/auth-01.png",
    },
    description:
      "In *In the Footsteps of the Prophet*, Professor Tariq Ramadan provides a profound spiritual reflection on the life of the Prophet Muhammad ﷺ. Rather than a chronological biography, this book explores the values, ethics, and inner qualities that defined the Prophet’s character—his patience, humility, kindness, and unwavering commitment to justice. Ramadan draws on both classical sources and modern insight to help readers internalize these lessons in their own spiritual journeys. This book is especially suitable for those looking to understand the Prophet ﷺ through a moral and contemplative lens.",
    coverImage:
      "https://m.media-amazon.com/images/I/71IJOPfQqmL._AC_UF1000,1000_QL80_.jpg",
    publishDate: "2007",
    genre: ["Biography", "Seerah"],
    tags: ["spiritual", "character", "contemplative", "inspirational"],
    language: "English",
    rating: 0,
    totalRatings: 0,
    totalReviews: 0,
    isFeatured: true,
  },

  {
    title: "The Life of the Prophet Muhammad ﷺ (Ibn Kathir)",
    authorId: "8kDce2s2CBAA7Alo3cYm",
    author: {
      name: "Imam Ibn Kathir",
      designation: "Hadith Scholar",
      image: "/images/testimonials/auth-01.png",
    },
    description:
      "*The Life of the Prophet Muhammad ﷺ* by Imam Ibn Kathir is one of the most widely respected and authoritative accounts of the Prophet’s biography. Based on authentic narrations (hadith) and Qur’anic verses, this work spans multiple volumes and dives deeply into every significant moment of the Prophet’s life—from his lineage, birth, and mission, to his interactions with companions, enemies, and divine revelation. It serves as both a historical reference and a guide to understanding the context of Islamic teachings. This book is essential for scholars, students of knowledge, and anyone seeking a detailed, scholarly, and traditional account of the Seerah.",
    coverImage:
      "https://m.media-amazon.com/images/I/61UDpMRI8IL._AC_UF1000,1000_QL80_.jpg",
    publishDate: "14th Century",
    genre: ["Biography", "Seerah"],
    tags: ["detailed", "authentic", "scholarly", "Islamic history"],
    language: "English",
    rating: 0,
    totalRatings: 0,
    totalReviews: 0,
    isFeatured: false,
  },

  {
    title: "The Life of Muhammad ﷺ (Ibn Ishaq)",
    authorId: "x6w9P6ZWSUmeIZJcMGc3",
    author: {
      name: "Ibn Ishaq (Edited by Ibn Hisham)",
      designation: "Early Historian",
      image: "/images/testimonials/auth-01.png",
    },
    description:
      "Ibn Ishaq’s *The Life of Muhammad ﷺ* is regarded as the earliest known biography of the Prophet ﷺ. Compiled in the 8th century and later edited by Ibn Hisham, this foundational text is a monumental work in Islamic historiography. It provides vivid narratives of events such as the Prophet’s birth, the Meccan period, the migration to Medina, and the major battles and treaties. The book offers unparalleled insights into the tribal dynamics, socio-political challenges, and divine guidance that shaped the Islamic community. This edition is ideal for historians, scholars, and readers interested in the roots of Seerah literature and early Islamic civilization.",
    coverImage:
      "https://m.media-amazon.com/images/I/61kZm2cIDPL._AC_UF1000,1000_QL80_.jpg",
    publishDate: "8th Century",
    genre: ["Biography", "Seerah"],
    tags: ["classical", "historical", "early Islam", "tribal society"],
    language: "English",
    rating: 0,
    totalRatings: 0,
    totalReviews: 0,
    isFeatured: false,
  },
  {
    title: "When the Moon Split",
    authorId: "4RQxiu61GqQHL5AEwgP8",
    author: {
      name: "Safi-ur-Rahman al-Mubarakpuri",
      designation: "Islamic Scholar",
      image: "/images/testimonials/auth-01.png",
    },
    description:
      "*When the Moon Split* is a simplified, illustrated, and reader-friendly version of the Seerah designed for all age groups. Written in accessible language and supported by visuals and timelines, this book is perfect for those new to the study of the Prophet’s ﷺ life. It offers a chronological overview of major events, miracles, and challenges faced by the Prophet ﷺ, while maintaining authenticity through reliance on trusted sources. Highly recommended for beginners, youth programs, and Islamic schools.",
    coverImage:
      "https://m.media-amazon.com/images/I/51c3u4ePGCS._UF1000,1000_QL80_.jpg",
    publishDate: "2002",
    genre: ["Biography", "Seerah"],
    tags: ["illustrated", "beginner", "youth", "accessible"],
    language: "English",
    rating: 0,
    totalRatings: 0,
    totalReviews: 0,
    isFeatured: false,
  },

  {
    title: "Muhammad: His Life Based on the Earliest Sources",
    authorId: "ZlmpkTbjmE3CIkLIN4yJ",
    author: {
      name: "Martin Lings",
      designation: "Sufi Scholar",
      image: "/images/testimonials/auth-01.png",
    },
    description:
      "Written by the esteemed Sufi scholar Martin Lings, *Muhammad: His Life Based on the Earliest Sources* is a literary masterpiece blending historical accuracy with poetic elegance. Drawing from early classical sources like Ibn Ishaq and al-Waqidi, Lings creates a vivid and emotionally resonant portrayal of the Prophet’s ﷺ life. This biography is notable for its storytelling style, spiritual depth, and ability to humanize the Prophet ﷺ in a way that connects with modern readers. Ideal for seekers of both knowledge and inspiration.",
    coverImage: "https://m.media-amazon.com/images/I/81T2sIksH4L.jpg",
    publishDate: "1983",
    genre: ["Biography", "Seerah"],
    tags: ["early sources", "literary", "sufi", "storytelling"],
    language: "English",
    rating: 0,
    totalRatings: 0,
    totalReviews: 0,
    isFeatured: false,
  },

  {
    title: "Ar-Raheeq Al-Makhtum (The Sealed Nectar)",
    authorId: "4RQxiu61GqQHL5AEwgP8",
    author: {
      name: "Safi-ur-Rahman al-Mubarakpuri",
      designation: "Islamic Scholar",
      image: "/images/testimonials/auth-01.png",
    },
    description:
      "*Ar-Raheeq Al-Makhtum (The Sealed Nectar)* is one of the most acclaimed biographies of the Prophet Muhammad ﷺ. Winner of the first prize in the World Muslim League’s competition on the Seerah, this book provides an in-depth, chronological, and evidence-backed account of the Prophet’s life. It offers unmatched clarity, factual accuracy, and a comprehensive understanding of the socio-political, spiritual, and military aspects of the Prophet’s ﷺ mission. A must-read for serious students and scholars of Islamic history.",
    coverImage:
      "https://m.media-amazon.com/images/I/812Nvjae3iL._UF1000,1000_QL80_.jpg",
    publishDate: "1976",
    genre: ["Biography", "Seerah"],
    tags: ["authentic", "award-winning", "comprehensive", "reference"],
    language: "English",
    rating: 0,
    totalRatings: 0,
    totalReviews: 0,
    isFeatured: true,
  },
];
