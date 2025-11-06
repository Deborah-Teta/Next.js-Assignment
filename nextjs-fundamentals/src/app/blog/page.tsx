import Link from "next/link";
import { fetchPosts } from "@/lib/fetchPosts";
import { Key } from "react";

export const revalidate = false; // Full SSG at build time

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.slice(0, 6).map((post: { id: Key | null | undefined; title: string | number | bigint | boolean ; body: string; }) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {post.body.substring(0, 100)}...
            </p>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-500">
        This page uses <strong>Static Site Generation (SSG)</strong>.
      </p>
    </div>
  );
}