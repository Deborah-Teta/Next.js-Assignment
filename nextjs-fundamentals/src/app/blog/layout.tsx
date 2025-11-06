import BlogSidebar from "@/components/BlogSidebar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <aside className="md:col-span-1">
        <BlogSidebar />
      </aside>
      <section className="md:col-span-3">{children}</section>
    </div>
  );
}