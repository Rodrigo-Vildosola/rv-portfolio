// app/(public)/about/page.tsx
import Navbar from "@/components/user/navbar";

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4">I am a passionate developer...</p>
      </div>
    </main>
  );
}
