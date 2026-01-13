import { usePackageContext } from "../context/PackageContext";

const AddPackageForm = () => {
  const { setPackages } = usePackageContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newPackage = {
      id: Date.now(),
      title: form.title.value,
      country: form.country.value,
      category: form.category.value,
      duration: Number(form.duration.value),
      price: Number(form.price.value),
      image: form.image.value,
    };

    if (!newPackage.title || !newPackage.price) return;

    setPackages((prev) => [newPackage, ...prev]);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 mb-10"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-100 p-2 rounded-lg">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Add New Package
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            Package Title *
          </label>
          <input
            placeholder="e.g., 7-Day Vietnam Tour"
            required
            name="title"
            type="text"
            pattern="[A-Za-z0-9\s\-\.,']+"
            className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 p-3 rounded-lg bg-white transition-all duration-200 outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            Country *
          </label>
          <input
            placeholder="e.g., Vietnam"
            required
            className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 p-3 rounded-lg bg-white transition-all duration-200 outline-none placeholder:text-gray-400"
            name="country"
            type="text"
            pattern="[A-Za-z\s\-]+"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            Category *
          </label>
          <select
            className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 p-3 rounded-lg bg-white transition-all duration-200 outline-none cursor-pointer"
            name="category"
            required
          >
            <option value="">Select Category</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            Duration (days)*
          </label>
          <input
            type="number"
            name="duration"
            required
            min="1"
            placeholder="e.g., 7"
            className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 p-3 rounded-lg bg-white transition-all duration-200 outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            Price (₹) *
          </label>
          <input
            type="number"
            min="0"
            required
            name="price"
            placeholder="e.g., 110999"
            className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 p-3 rounded-lg bg-white transition-all duration-200 outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 block">
            Image URL
          </label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 p-3 rounded-lg bg-white transition-all duration-200 outline-none placeholder:text-gray-400"
            pattern="https?://.+"
            name="image"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
        <button
          type="submit"
          className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Add Package
        </button>
        <p className="text-sm text-gray-500 flex items-center">
          <span className="hidden sm:inline">* Required fields</span>
        </p>
      </div>
    </form>
  );
};

export default AddPackageForm;
