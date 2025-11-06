'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SearchBar({ posts }: { posts: any[] }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(posts);

  useEffect(() => {
    const results = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.body.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(query ? results.slice(0, 5) : []);
  }, [query, posts]);

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {query && (
        <ul className="mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
          {filtered.length > 0 ? (
            filtered.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.id}`}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  {post.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results</li>
          )}
        </ul>
      )}
    </div>
  );
}