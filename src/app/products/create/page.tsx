import { createProduct } from "@/app/actions/createProduct";

export default function CreateProduct() {
  return (
    <div>
      <form
        action={createProduct}
        className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
          Create Product
        </h2>

        <div>
          <label
            htmlFor="title"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Product title"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Product price"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Product description"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="categoryId"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Category ID
          </label>
          <input
            type="number"
            name="categoryId"
            id="categoryId"
            placeholder="Category ID"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Image URL
          </label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-500 transition duration-200"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}
