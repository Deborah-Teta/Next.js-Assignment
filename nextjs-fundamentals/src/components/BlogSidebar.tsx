import SearchBar from "./SearchBar";
import { fetchPosts } from "@/lib/fetchPosts";

export default async function BlogSidebar() {
  const posts = await fetchPosts();

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-fit sticky top-24">
      <h3 className="text-lg font-semibold mb-4">Search</h3>
      <SearchBar posts={posts} />

      <h3 className="text-lg font-semibold mt-8 mb-4">Categories</h3>
      <ul className="space-y-2">
        {["Tech", "Lifestyle", "Education", "Travel"].map((cat) => (
          <li key={cat}>
            <button className="text-blue-600 dark:text-blue-400 hover:underline">
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}