import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

export const footerData = {
    company: {
      logo: {
        light: "/images/logo/company-logo.webp",
        dark: "/images/logo/company-logo-white.webp",
        alt: "logo",
        width: 140,
        height: 30,
      },
      description:
        "Discover, review, and reflect on authentic books that narrate the life and legacy of the Prophet Muhammad (ﷺ). The Seerah Library brings together readers and seekers from around the world—offering detailed book reviews, scholarly insights, and a trusted platform to explore the Seerah like never before.",
      socialLinks: [
        { icon: <FaFacebook size={18} />, href: "/" },
        { icon: <FaTwitter size={18} />, href: "/" },
        { icon: <FaYoutube size={18} />, href: "/" },
        { icon: <FaLinkedin size={18} />, href: "/" },
      ],
    },
    links: [
      {
        title: "Useful Links",
        items: [
          { name: "Blog", href: "/blogs" },
          { name: "Pricing", href: "/pricing" },
          { name: "About", href: "/about" },
        ],
      },
      {
        title: "Terms",
        items: [
          { name: "TOS", href: "/" },
          { name: "Privacy Policy", href: "/" },
          { name: "Refund Policy", href: "/" },
        ],
      },
      {
        title: "Support & Help",
        items: [
          { name: "Open Support Ticket", href: "/contact" },
          { name: "Terms of Use", href: "/" },
          { name: "About", href: "/about" },
        ],
      },
    ],
  };


export const logoData = {
    light: "/images/logo/company-logo.webp",
    dark: "/images/logo/company-logo-white.webp",
    alt: "logo",
    width: 140,
    height: 30,
  };

export const authLinks = [
    { text: "Sign In", href: "/signin", className: "hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block" },
    { text: "Sign Up", href: "/signup", className: "ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9" }
  ];


export const authorsData = [
    {
      name: "Safi-ur-Rahman al-Mubarakpuri",
      image: "/images/testimonials/auth-01.png",
      designation: "Islamic Scholar",
      bio: "Safi-ur-Rahman al-Mubarakpuri was a renowned Islamic scholar from India, best known for his biography of the Prophet ﷺ titled 'Ar-Raheeq Al-Makhtum', which won first prize in a worldwide competition held by the Muslim World League.",
      birthDate: "1942",
      deathDate: "2006",
      nationality: "Indian",
      knownFor: ["Seerah", "Islamic History"],
      books: [
        "Ar-Raheeq Al-Makhtum (The Sealed Nectar)",
        "When the Moon Split"
      ],
      notableWorks: [
        "Ar-Raheeq Al-Makhtum",
        "When the Moon Split"
      ],
      social: {
        wikipedia: "https://en.wikipedia.org/wiki/Safi-ur-Rahman_al-Mubarakpuri"
      }
    },
    {
      name: "Martin Lings",
      image: "/images/testimonials/auth-01.png",
      designation: "Sufi Scholar",
      bio: "Martin Lings, also known as Abu Bakr Siraj ad-Din, was a British Islamic scholar and philosopher. His biography of the Prophet Muhammad ﷺ is widely admired for its literary beauty and spiritual depth.",
      birthDate: "1909",
      deathDate: "2005",
      nationality: "British",
      knownFor: ["Sufism", "Seerah"],
      books: [
        "Muhammad: His Life Based on the Earliest Sources"
      ],
      notableWorks: [
        "Muhammad: His Life Based on the Earliest Sources"
      ],
      social: {
        wikipedia: "https://en.wikipedia.org/wiki/Martin_Lings"
      }
    },
    {
      name: "Ibn Ishaq (Edited by Ibn Hisham)",
      image: "/images/testimonials/auth-01.png",
      designation: "Early Historian",
      bio: "Ibn Ishaq was among the earliest biographers of the Prophet Muhammad ﷺ. His work 'Sirat Rasul Allah' is one of the foundational sources of Seerah, later edited and preserved by Ibn Hisham.",
      birthDate: "704 CE",
      deathDate: "768 CE",
      nationality: "Arab",
      knownFor: ["Early Islamic History", "Seerah"],
      books: [
        "The Life of Muhammad ﷺ (Ibn Ishaq)"
      ],
      notableWorks: [
        "Sirat Rasul Allah"
      ],
      social: {
        wikipedia: "https://en.wikipedia.org/wiki/Ibn_Ishaq"
      }
    },
    {
      name: "Imam Ibn Kathir",
      image: "/images/testimonials/auth-01.png",
      designation: "Hadith Scholar",
      bio: "Ibn Kathir was a prominent 14th-century Islamic scholar famous for his Quranic exegesis and historical works. His Seerah is derived from authentic narrations and is still widely referenced today.",
      birthDate: "1301",
      deathDate: "1373",
      nationality: "Syrian",
      knownFor: ["Tafsir", "Hadith", "Islamic History"],
      books: [
        "The Life of the Prophet Muhammad ﷺ (Ibn Kathir)"
      ],
      notableWorks: [
        "Tafsir Ibn Kathir",
        "Al-Bidaya wa'l-Nihaya"
      ],
      social: {
        wikipedia: "https://en.wikipedia.org/wiki/Ibn_Kathir"
      }
    },
    {
      name: "Tariq Ramadan",
      image: "/images/testimonials/auth-01.png",
      designation: "Professor & Thinker",
      bio: "Tariq Ramadan is a Swiss-Egyptian intellectual, philosopher, and Islamic thinker. He is known for his work in Islamic ethics and contemporary thought, emphasizing the spiritual and moral teachings of Islam.",
      birthDate: "1962",
      nationality: "Swiss-Egyptian",
      knownFor: ["Islamic Philosophy", "Spirituality"],
      books: [
        "In the Footsteps of the Prophet"
      ],
      notableWorks: [
        "In the Footsteps of the Prophet"
      ],
      website: "https://tariqramadan.com",
      social: {
        twitter: "https://twitter.com/TariqRamadan",
        wikipedia: "https://en.wikipedia.org/wiki/Tariq_Ramadan"
      }
    },
    {
      name: "Ibn Hisham",
      image: "/images/testimonials/auth-01.png",
      designation: "Islamic Scholar & Editor",
      bio: "Ibn Hisham was a Muslim historian who edited and preserved the original Seerah compiled by Ibn Ishaq. His version remains one of the most referenced sources for the life of the Prophet Muhammad ﷺ.",
      birthDate: "d. 833 CE",
      nationality: "Arab",
      knownFor: ["Editing Ibn Ishaq's Seerah", "Islamic History"],
      books: [
        "The Life of Muhammad ﷺ (Ibn Ishaq)"
      ],
      notableWorks: [
        "Edited Sirat Ibn Ishaq"
      ],
      social: {
        wikipedia: "https://en.wikipedia.org/wiki/Ibn_Hisham"
      }
    }
  ];
  
  
  