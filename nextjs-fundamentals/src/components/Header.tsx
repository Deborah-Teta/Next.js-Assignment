'use client';

import Link from "next/link";


export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          MyBlog
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
        
        </div>
      </nav>
    </header>
  );
}