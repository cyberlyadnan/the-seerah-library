import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-x-hidden bg-bg-color pb-12 dark:bg-gray-dark md:pb-[80px] md:pt-[150px] xl:pb-[80px] xl:pt-[180px] 2xl:pb-[80px] 2xl:pt-[210px]"
      >
        <div className="container mx-auto px-4 py-6 overflow-x-hidden">
          <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:gap-12">
            {/* Left Side: Text Content */}
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
              Explore the Timeless Beauty of the Seerah
              </h1>
              <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl">
              Discover, review, and reflect on authentic books that narrate the life and legacy of the Prophet Muhammad (ﷺ). The Seerah Library brings together readers and seekers from around the world—offering detailed book reviews, scholarly insights, and a trusted platform to explore the Seerah like never before.
              </p>
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:items-start">
                <Link
                  href="https://github.com/cyberlyadnan"
                  className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Explore Library 
                </Link>
                <Link
                  href="https://github.com/cyberlyadnan"
                  className="inline-block rounded-full bg-zinc-800 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Write a Review
                </Link>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="flex justify-center pt-16 md:pt-0 md:w-1/2">
              <Image
                src="/images/hero/building.webp"
                alt="Mosque"
                width={600}
                height={600}
                className="opacity-50 md:opacity-80 overflow-hidden"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear)" />
            <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial)" />
            <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial)" />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#155E4B" />
                <stop offset="1" stopColor="#155E4B" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#155E4B" stopOpacity="0" />
                <stop offset="1" stopColor="#155E4B" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#155E4B" stopOpacity="0" />
                <stop offset="1" stopColor="#155E4B" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#155E4B" />
                <stop offset="1" stopColor="#155E4B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#155E4B" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#155E4B" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#155E4B" />
                <stop offset="1" stopColor="#155E4B" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
