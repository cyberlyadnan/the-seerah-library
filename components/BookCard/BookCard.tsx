
import { SeerahBook } from "@/types/seerahBook";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: SeerahBook }) => {
  console.log("BookCard Props:", book); // Debugging line
  // Destructure properties from the book object
    const { 
        id,
        title, 
        coverImage, 
        description, 
        author, 
        tags, 
        publishDate,
        genre 
      } = book;
  return (
    <div className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-bg-color shadow-one duration-300 dark:bg-dark" data-wow-delay=".1s">
      {/* Image with tag - Changed to portrait aspect ratio */}
      <Link href={`/book-details/${id}`} className="relative block aspect-[2/3] w-full">
        <span className="absolute right-3 top-3 z-20 inline-flex items-center justify-center rounded-full bg-primary px-3 py-1 text-xs font-semibold capitalize text-white sm:right-4 sm:top-4 sm:px-3 sm:py-1 sm:text-sm md:right-6 md:top-6 md:px-4 md:py-2">
          {tags[0]}
        </span>
        <Image 
          src={coverImage} 
          alt={title} 
          fill 
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </Link>

      {/* Content */}
      <div className="p-2 sm:p-5 md:px-5 md:py-6 lg:p-3 xl:px-5 xl:py-4">
        {/* Title */}
        <h3>
          <Link
            href={`/book-details/${id}`}
            className="mb-3 block text-sm font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-sm md:text-xl "
          >
            {title}
          </Link>
        </h3>

        {/* Paragraph */}
        <p className="mb-2 border-b border-body-color italic border-opacity-10 pb-2 text-sm md:text-sm font-medium text-body-color dark:border-white dark:border-opacity-10 sm:mb-5 sm:pb-2 sm:text-base md:mb-2 md:pb-2">
          {description?.slice(0,50)}...
        </p>

        {/* Author and date - Hidden on mobile as per your request */}
        <div className="hidden md:flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
          {/* Author */}
          <div className="flex items-center border-opacity-10 pb-4 dark:border-white dark:border-opacity-10 sm:pb-0 sm:pr-4">
            <div className="w-full">
              <h4 className="text-xs font-semibold text-dark dark:text-white sm:text-sm mb-1">
                By {author.name}
              </h4>
              <p className="text-[10px] text-body-color sm:text-xs">{author.designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;