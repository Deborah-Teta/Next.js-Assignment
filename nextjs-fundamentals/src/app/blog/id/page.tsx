// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import { fetchPost } from "@/lib/fetchPost";

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts.slice(0, 10).map((post: any) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  let post;
  try {
    post = await fetchPost(params.id);
  } catch {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        By <em>User {post.userId}</em>
      </p>
      <div className="prose dark:prose-invert max-w-none">
        <p>{post.body}</p>
      </div>
      <p className="mt-8 text-sm text-gray-500">
        This page uses <strong>Incremental Static Regeneration (ISR)</strong> – revalidates every 60s.
      </p>
    </article>
  );
}