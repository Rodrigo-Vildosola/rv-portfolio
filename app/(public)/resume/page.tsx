// app/(public)/resume/page.tsx
import CV from "@/assets/cv.pdf"

export default function ResumePage() {
  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>
      <div className="mb-8">
        <embed src={CV} type="application/pdf" width="100%" height="800px" className="rounded-lg shadow-md" />
      </div>
      <a href="/assets/cv.pdf" download className="text-blue-500 hover:underline">
        Download Resume
      </a>
    </div>
  );
}
