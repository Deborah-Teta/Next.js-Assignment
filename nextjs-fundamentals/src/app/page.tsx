import ClientClock from "@/components/ClientClock";

export default function HomePage() {
  return (
    <div className="text-center py-12">
      <h1 className="text-5xl font-bold mb-6">Welcome to MyBlog</h1>
      <p className="text-lg text-gray-300 mb-8">
        Exploring Next.js rendering strategies.
      </p>
      <div className="bg-gray-800 p-6 rounded-lg inline-block">
        <p className="text-2xl font-mono font-semibold">
           Clock
        </p>
        <ClientClock />
      </div>
    </div>
  );
}