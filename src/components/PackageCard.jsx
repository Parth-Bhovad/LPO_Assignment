const PackageCard = ({ pkg }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={pkg.image.length > 0 ? pkg.image : null}
          alt={pkg.title}
          className="h-48 sm:h-52 md:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-semibold text-orange-600">{pkg.category}</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-3">
        <h3 className="font-bold text-lg sm:text-xl text-gray-800 min-h-[3.5rem]">
          {pkg.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">{pkg.duration} Days</span>
          <span className="text-gray-400">·</span>
          <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-medium">{pkg.country}</span>
        </div>

        <div className="flex items-baseline justify-between pt-2">
          <div>
            <p className="text-xs text-gray-500 mb-1">Starting from</p>
            <p className="text-2xl font-bold text-gray-900">
              ₹{pkg.price.toLocaleString()}
            </p>
          </div>
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg mt-4">
          Request a Call
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
