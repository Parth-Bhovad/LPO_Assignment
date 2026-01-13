const Filters = ({ filters, setFilters }) => {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md border border-gray-100 mb-8">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Filter Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            Category
          </label>
          <select
            className="w-full border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 p-3 rounded-lg bg-white text-gray-700 transition-all duration-200 outline-none cursor-pointer hover:border-orange-400"
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          >
            <option value="">All Categories</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            Duration
          </label>
          <select
            className="w-full border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 p-3 rounded-lg bg-white text-gray-700 transition-all duration-200 outline-none cursor-pointer hover:border-orange-400"
            value={filters.maxDuration}
            onChange={(e) =>
              setFilters({ ...filters, maxDuration: e.target.value })
            }
          >
            <option value="">Any Duration</option>
            <option value="7">Up to 7 Days</option>
            <option value="10">Up to 10 Days</option>
            <option value="15">Up to 15 Days</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            Budget
          </label>
          <select
            className="w-full border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 p-3 rounded-lg bg-white text-gray-700 transition-all duration-200 outline-none cursor-pointer hover:border-orange-400"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })
            }
          >
            <option value="">Any Budget</option>
            <option value="150000">Up to ₹1.5L</option>
            <option value="250000">Up to ₹2.5L</option>
            <option value="300000">Up to ₹3L</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
