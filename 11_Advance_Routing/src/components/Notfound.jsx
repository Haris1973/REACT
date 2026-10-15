import { Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl w-full text-center">
        
        {/* Icon with rings */}
        <div className="relative flex justify-center mb-8">
          <div className="absolute w-64 h-64 border border-gray-100 rounded-full"></div>
          <div className="absolute w-48 h-48 border border-gray-100 rounded-full"></div>
          <div className="absolute w-32 h-32 border border-gray-100 rounded-full"></div>

          <div className="relative z-10 w-20 h-20 border border-gray-300 rounded-lg flex items-center justify-center bg-white">
            <Search size={32} className="text-gray-700" strokeWidth={2} />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-4">404 error</h1>

        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
          Try searching our site:
        </p>

        <div className="flex gap-3 max-w-lg mx-auto">
          <div className="relative flex-grow">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search our site"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;