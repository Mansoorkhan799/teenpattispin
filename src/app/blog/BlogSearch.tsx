'use client';

import Link from 'next/link';
import { useState } from 'react';

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  featured: boolean;
};

export default function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.slug.toLowerCase().includes(query.toLowerCase())
      )
    : posts;

  const displayed = filtered.length > 0 ? filtered : posts;

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="mb-8">
        <div className="flex gap-2 max-w-xl">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blog posts..."
            className="flex-1 px-4 py-2 bg-secondary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            aria-label="Search blog posts"
          />
          <button
            type="submit"
            aria-label="Search blog posts"
            className="px-6 py-2 bg-accent hover:bg-accent/90 text-primary font-medium rounded-lg transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {query.trim() && (
        <p className="text-gray-400 mb-6">
          {filtered.length > 0
            ? `Showing ${filtered.length} result${filtered.length === 1 ? '' : 's'} for "${query}"`
            : `No results found for "${query}". Showing all posts.`}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayed.map((post) => (
          <div
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all ${post.featured ? 'border-2 border-[#FFA500]' : ''}`}
          >
            {post.featured && (
              <div className="inline-block bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                ⭐ FEATURED
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>📅 {post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read {post.title} →
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
