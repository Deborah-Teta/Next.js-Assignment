import { fetchUser } from "@/lib/fetchUser";

export const revalidate = 0; 

export default async function AboutPage() {
  const user = await fetchUser();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About the Author</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">@{user.username}</p>
        <p className="mt-4">{user.email}</p>
        <p className="mt-2 text-sm text-gray-500">Company: {user.company.name}</p>
        <p className="mt-4 italic">&quot;{user.company.catchPhrase}&quot;</p>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Know more about me <strong>Here</strong>.
      </p>
    </div>
  );
}