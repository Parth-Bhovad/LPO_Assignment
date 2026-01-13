const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[800px] flex items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Explore Vietnam
          </h1>
          <p className="sm:text-lg md:text-xl text-gray-100 max-w-xl">
            Discover emerald bays, vibrant streets, and unforgettable
            experiences crafted just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
            <p className="text-2xl sm:text-3xl font-bold text-white">
              From <span className="text-orange-400">₹99,999</span>
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
