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