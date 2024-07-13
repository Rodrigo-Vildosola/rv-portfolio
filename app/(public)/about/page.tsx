// app/(public)/about/page.tsx

export default function AboutPage() {
  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p>Cell: 9 6333-5146</p>
        <p>Email: <a href="mailto:vildosolarodrigo@gmail.com" className="text-blue-500">vildosolarodrigo@gmail.com</a></p>
        <p>Address: Camino la Capellania 1417, Santiago</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p><strong>Colegio del Verbo Divino</strong>, Class of 2019</p>
        <p><strong>Universidad De los Andes</strong></p>
        <p>Scholarship for academic excellence and member of the student council events committee</p>
        <p>Studying Software Engenieering, 2020 - Present</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <p><strong>Higher Bit Solutions (HBS)</strong></p>
        <p>July 2023 - May 2024</p>
        <p>Contact: <a href="mailto:pgrand@hbsolutions.cl" className="text-blue-500">pgrand@hbsolutions.cl</a></p>
        <p>Worked as a Full-Stack Developer on web applications, APIs, databases, and Machine Learning.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Programming: Python, JavaScript, C, C++, Ruby, C#, Django, React, Next.js, Ruby on Rails</li>
          <li>Machine Learning, Web Technologies, AWS</li>
          <li>Relational Databases (PostgreSQL) and NoSQL (MongoDB)</li>
          <li>Cybersecurity</li>
          <li>Data Processing and Analysis</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Languages</h2>
        <p>English: Advanced oral and bilingual fluency</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Tutoring Experience</h2>
        <p>Experience organizing private lessons in mathematics and programming.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I am a future Civil Engineer in Computing with almost a year of experience in software development and web technologies. I have skills in Machine Learning, cybersecurity, and data analysis. I am proactive, adaptable, and highly motivated in my work, with a notable ability to work in a team. I am currently seeking opportunities in a dynamic environment that promotes professional growth and technological innovation.
        </p>
      </section>
    </div>
  );
}
