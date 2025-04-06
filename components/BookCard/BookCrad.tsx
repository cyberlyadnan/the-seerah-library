import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <div className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-bg-color shadow-one duration-300 dark:bg-dark" data-wow-delay=".1s">
      {/* Image with tag - Changed to portrait aspect ratio */}
      <Link href="/blog-details" className="relative block aspect-[2/3] w-full">
        <span className="absolute right-3 top-3 z-20 inline-flex items-center justify-center rounded-full bg-primary px-3 py-1 text-xs font-semibold capitalize text-white sm:right-4 sm:top-4 sm:px-3 sm:py-1 sm:text-sm md:right-6 md:top-6 md:px-4 md:py-2">
          {tags[0]}
        </span>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-5 md:px-5 md:py-6 lg:p-6 xl:px-5 xl:py-6 2xl:p-7">
        {/* Title */}
        <h3>
          <Link
            href="/blog-details"
            className="mb-3 block text-lg font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl md:text-xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Link>
        </h3>

        {/* Paragraph */}
        <p className="mb-4 border-b border-body-color border-opacity-10 pb-4 text-sm font-medium text-body-color dark:border-white dark:border-opacity-10 sm:mb-5 sm:pb-5 sm:text-base md:mb-6 md:pb-6">
          {paragraph}
        </p>

        {/* Author and date - Hidden on mobile as per your request */}
        <div className="hidden md:flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
          {/* Author */}
          <div className="flex items-center border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
            <div className="mr-3 sm:mr-4">
              <div className="relative h-8 w-8 overflow-hidden rounded-full sm:h-9 sm:w-9 md:h-10 md:w-10">
                <Image 
                  src={author.image} 
                  alt={author.name} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full">
              <h4 className="text-xs font-medium text-dark dark:text-white sm:text-sm">
                By {author.name}
              </h4>
              <p className="text-[10px] text-body-color sm:text-xs">{author.designation}</p>
            </div>
          </div>

          {/* Date */}
          <div className="inline-block">
            <h4 className="text-xs font-medium text-dark dark:text-white sm:text-sm">
              Date
            </h4>
            <p className="text-[10px] text-body-color sm:text-xs">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;