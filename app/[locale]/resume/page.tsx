// app/(public)/resume/page.tsx

export default function ResumePage() {
  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>
      <div className="mb-8">
        <embed src="/cv.pdf" type="application/pdf" width="100%" height="800px" className="rounded-lg shadow-md" />
      </div>
      <a href="/cv.pdf" download className="text-blue-500 hover:underline">
        Download Resume
      </a>
    </div>
  );
}
