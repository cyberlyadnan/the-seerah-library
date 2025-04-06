// // data/seerahBooksData.ts

// import { SeerahBook } from "@/types/seerahBook";


// const seerahBooksData: SeerahBook[] = [
//   {
//     id: 1,
//     title: "Ar-Raheeq Al-Makhtum (The Sealed Nectar)",
//     paragraph:
//       "An award-winning biography of the Prophet ﷺ, offering a detailed and authentic account of his life.",
//     image: "https://m.media-amazon.com/images/I/812Nvjae3iL._UF1000,1000_QL80_.jpg",
//     author: {
//       name: "Safi-ur-Rahman al-Mubarakpuri",
//       image: "/images/testimonials/auth-01.png",
//       designation: "Islamic Scholar",
//     },
//     tags: ["authentic", "award-winning"],
//     publishDate: "1976",
//   },
//   {
//     id: 2,
//     title: "Muhammad: His Life Based on the Earliest Sources",
//     paragraph:
//       "A beautifully written Seerah drawing from early sources with deep insight and literary flair.",
//     image: "https://m.media-amazon.com/images/I/81T2sIksH4L.jpg",
//     author: {
//       name: "Martin Lings",
//       image: "/images/testimonials/auth-01.png",
//       designation: "Sufi Scholar",
//     },
//     tags: ["early sources", "literary"],
//     publishDate: "1983",
//   },
//   {
//     id: 3,
//     title: "When the Moon Split",
//     paragraph:
//       "A simplified and illustrated version of the Seerah suitable for readers of all ages.",
//     image: "https://m.media-amazon.com/images/I/51c3u4ePGCS._UF1000,1000_QL80_.jpg",
//     author: {
//       name: "Safi-ur-Rahman al-Mubarakpuri",
//       image: "/images/testimonials/auth-01.png",
//       designation: "Islamic Scholar",
//     },
//     tags: ["illustrated", "beginner"],
//     publishDate: "2002",
//   },
//   {
//     id: 4,
//     title: "The Life of Muhammad ﷺ (Ibn Ishaq)",
//     paragraph:
//       "The earliest and most authentic biography of the Prophet ﷺ, compiled by the classical historian Ibn Ishaq.",
//     image: "https://m.media-amazon.com/images/I/61kZm2cIDPL._AC_UF1000,1000_QL80_.jpg",
//     author: {
//       name: "Ibn Ishaq (Edited by Ibn Hisham)",
//       image: "/images/testimonials/auth-01.png",
//       designation: "Early Historian",
//     },
//     tags: ["classical", "historical"],
//     publishDate: "8th Century",
//   },
//   {
//     id: 5,
//     title: "The Life of the Prophet Muhammad ﷺ (Ibn Kathir)",
//     paragraph:
//       "A 4-volume Seerah from one of the most respected scholars in Islamic history, based on authentic narrations.",
//     image: "https://m.media-amazon.com/images/I/61UDpMRI8IL._AC_UF1000,1000_QL80_.jpg",
//     author: {
//       name: "Imam Ibn Kathir",
//       image: "/images/testimonials/auth-01.png",
//       designation: "Hadith Scholar",
//     },
//     tags: ["detailed", "authentic"],
//     publishDate: "14th Century",
//   },
//   {
//     id: 6,
//     title: "In the Footsteps of the Prophet",
//     paragraph:
//       "A spiritual journey through the character and message of the Prophet ﷺ, emphasizing his compassion and wisdom.",
//     image: "https://m.media-amazon.com/images/I/71IJOPfQqmL._AC_UF1000,1000_QL80_.jpg",
//     author: {
//       name: "Tariq Ramadan",
//       image: "/images/testimonials/auth-01.png",
//       designation: "Professor & Thinker",
//     },
//     tags: ["spiritual", "character"],
//     publishDate: "2007",
//   },
// ];

// export default seerahBooksData;



// // This file contains the data for featured books in the Seerah section of the application.
// import { Author } from "@/types/author";

// const authorsData: Author[] = [
//   {
//     name: "Safi-ur-Rahman al-Mubarakpuri",
//     image: "/images/testimonials/auth-01.png",
//     designation: "Islamic Scholar",
//     bio: "Safi-ur-Rahman al-Mubarakpuri was a renowned Islamic scholar from India, best known for his biography of the Prophet ﷺ titled 'Ar-Raheeq Al-Makhtum', which won first prize in a worldwide competition held by the Muslim World League.",
//     birthDate: "1942",
//     deathDate: "2006",
//     nationality: "Indian",
//     knownFor: ["Seerah", "Islamic History"],
//     books: [
//       "Ar-Raheeq Al-Makhtum (The Sealed Nectar)",
//       "When the Moon Split"
//     ],
//     notableWorks: [
//       "Ar-Raheeq Al-Makhtum",
//       "When the Moon Split"
//     ],
//     social: {
//       wikipedia: "https://en.wikipedia.org/wiki/Safi-ur-Rahman_al-Mubarakpuri"
//     }
//   },
//   {
//     name: "Martin Lings",
//     image: "/images/testimonials/auth-01.png",
//     designation: "Sufi Scholar",
//     bio: "Martin Lings, also known as Abu Bakr Siraj ad-Din, was a British Islamic scholar and philosopher. His biography of the Prophet Muhammad ﷺ is widely admired for its literary beauty and spiritual depth.",
//     birthDate: "1909",
//     deathDate: "2005",
//     nationality: "British",
//     knownFor: ["Sufism", "Seerah"],
//     books: [
//       "Muhammad: His Life Based on the Earliest Sources"
//     ],
//     notableWorks: [
//       "Muhammad: His Life Based on the Earliest Sources"
//     ],
//     social: {
//       wikipedia: "https://en.wikipedia.org/wiki/Martin_Lings"
//     }
//   },
//   {
//     name: "Ibn Ishaq (Edited by Ibn Hisham)",
//     image: "/images/testimonials/auth-01.png",
//     designation: "Early Historian",
//     bio: "Ibn Ishaq was among the earliest biographers of the Prophet Muhammad ﷺ. His work 'Sirat Rasul Allah' is one of the foundational sources of Seerah, later edited and preserved by Ibn Hisham.",
//     birthDate: "704 CE",
//     deathDate: "768 CE",
//     nationality: "Arab",
//     knownFor: ["Early Islamic History", "Seerah"],
//     books: [
//       "The Life of Muhammad ﷺ (Ibn Ishaq)"
//     ],
//     notableWorks: [
//       "Sirat Rasul Allah"
//     ],
//     social: {
//       wikipedia: "https://en.wikipedia.org/wiki/Ibn_Ishaq"
//     }
//   },
//   {
//     name: "Imam Ibn Kathir",
//     image: "/images/testimonials/auth-01.png",
//     designation: "Hadith Scholar",
//     bio: "Ibn Kathir was a prominent 14th-century Islamic scholar famous for his Quranic exegesis and historical works. His Seerah is derived from authentic narrations and is still widely referenced today.",
//     birthDate: "1301",
//     deathDate: "1373",
//     nationality: "Syrian",
//     knownFor: ["Tafsir", "Hadith", "Islamic History"],
//     books: [
//       "The Life of the Prophet Muhammad ﷺ (Ibn Kathir)"
//     ],
//     notableWorks: [
//       "Tafsir Ibn Kathir",
//       "Al-Bidaya wa'l-Nihaya"
//     ],
//     social: {
//       wikipedia: "https://en.wikipedia.org/wiki/Ibn_Kathir"
//     }
//   },
//   {
//     name: "Tariq Ramadan",
//     image: "/images/testimonials/auth-01.png",
//     designation: "Professor & Thinker",
//     bio: "Tariq Ramadan is a Swiss-Egyptian intellectual, philosopher, and Islamic thinker. He is known for his work in Islamic ethics and contemporary thought, emphasizing the spiritual and moral teachings of Islam.",
//     birthDate: "1962",
//     nationality: "Swiss-Egyptian",
//     knownFor: ["Islamic Philosophy", "Spirituality"],
//     books: [
//       "In the Footsteps of the Prophet"
//     ],
//     notableWorks: [
//       "In the Footsteps of the Prophet"
//     ],
//     website: "https://tariqramadan.com",
//     social: {
//       twitter: "https://twitter.com/TariqRamadan",
//       wikipedia: "https://en.wikipedia.org/wiki/Tariq_Ramadan"
//     }
//   },
//   {
//     name: "Ibn Hisham",
//     image: "/images/testimonials/auth-01.png",
//     designation: "Islamic Scholar & Editor",
//     bio: "Ibn Hisham was a Muslim historian who edited and preserved the original Seerah compiled by Ibn Ishaq. His version remains one of the most referenced sources for the life of the Prophet Muhammad ﷺ.",
//     birthDate: "d. 833 CE",
//     nationality: "Arab",
//     knownFor: ["Editing Ibn Ishaq's Seerah", "Islamic History"],
//     books: [
//       "The Life of Muhammad ﷺ (Ibn Ishaq)"
//     ],
//     notableWorks: [
//       "Edited Sirat Ibn Ishaq"
//     ],
//     social: {
//       wikipedia: "https://en.wikipedia.org/wiki/Ibn_Hisham"
//     }
//   }
// ];


