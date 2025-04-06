import { FiArrowRight } from 'react-icons/fi'; // Using Feather Icons

const ExploreButton = () => {
  return (
    <button className=" group relative inline-flex items-center justify-center px-6 py-3 text-lg font-mediumtext-whitebg-gradient-to-r from-primary-500 to-primary-600 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <span className="relative z-10 flex items-center">
        Explore More
        <FiArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
      </span>
      
      {/* Animated background elements */}
      <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="absolute top-0 left-0 w-full h-0.5 bg-white opacity-20 group-hover:opacity-40 transition-opacity duration-500"></span>
    </button>
  );
};

export default ExploreButton;