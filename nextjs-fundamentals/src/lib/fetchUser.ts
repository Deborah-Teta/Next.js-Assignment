// lib/fetchUser.ts
export async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}