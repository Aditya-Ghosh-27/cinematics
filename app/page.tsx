import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch('');
  const movies = await response.json();
  return (
    <main className="grid grid-cols-4 gap-16">
      <h1>Hello from Next 13🔥</h1>
    </main>
  );
}
