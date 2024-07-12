// app/(public)/about/page.tsx

export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4">[Extended bio]</p>
      <h2 className="text-2xl font-bold mt-6">Education</h2>
      <p className="mt-2">[Your education details]</p>
      <h2 className="text-2xl font-bold mt-6">Hobbies and Interests</h2>
      <p className="mt-2">[Your hobbies and interests]</p>
      <h2 className="text-2xl font-bold mt-6">Career Goals</h2>
      <p className="mt-2">[Your career goals]</p>
    </div>
  );
}
