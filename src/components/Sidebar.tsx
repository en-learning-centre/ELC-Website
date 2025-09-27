import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside
      id="sidebar"
      className="w-72 min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white p-4 shadow-xl fixed overflow-y-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-center">📚 ELC Documents</h2>

      <input
        type="text"
        id="search"
        placeholder="🔍 Search documents..."
        className="w-full p-2 mb-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <nav>
        <ul id="doc-list" className="space-y-4 text-sm">

          {/* Preschool */}
          {["Preschool 1","Preschool 2","Preschool 3"].map((level) => (
            <li key={level}>
              <strong className="block text-yellow-300">{level}</strong>
              <ul className="ml-3 space-y-1">
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/literacy.md`} className="hover:text-yellow-200">Literacy</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/numeracy.md`} className="hover:text-yellow-200">Numeracy</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/arts.md`} className="hover:text-yellow-200">Arts</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/science.md`} className="hover:text-yellow-200">Science</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/teachers-guide.md`} className="hover:text-yellow-200">Teachers Guide</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/questions.md`} className="hover:text-yellow-200">Questions</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/answers.md`} className="hover:text-yellow-200">Answers</a></li>
              </ul>
            </li>
          ))}

          {/* Primary 1–6 */}
          {Array.from({ length: 6 }, (_, i) => `Primary ${i + 1}`).map((level) => (
            <li key={level}>
              <strong className="block text-yellow-300">{level}</strong>
              <ul className="ml-3 space-y-1">
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/english.md`} className="hover:text-yellow-200">English</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/mathematics.md`} className="hover:text-yellow-200">Mathematics</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/science.md`} className="hover:text-yellow-200">Science</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/social-studies.md`} className="hover:text-yellow-200">Social Studies</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/arts.md`} className="hover:text-yellow-200">Arts</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/teachers-guide.md`} className="hover:text-yellow-200">Teachers Guide</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/questions.md`} className="hover:text-yellow-200">Questions</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/answers.md`} className="hover:text-yellow-200">Answers</a></li>
              </ul>
            </li>
          ))}

          {/* Junior Secondary 1–3 */}
          {Array.from({ length: 3 }, (_, i) => `JSS ${i + 1}`).map((level) => (
            <li key={level}>
              <strong className="block text-yellow-300">{level}</strong>
              <ul className="ml-3 space-y-1">
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/english.md`} className="hover:text-yellow-200">English</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/mathematics.md`} className="hover:text-yellow-200">Mathematics</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/science.md`} className="hover:text-yellow-200">Science</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/social-studies.md`} className="hover:text-yellow-200">Social Studies</a></li>
              </ul>
            </li>
          ))}

          {/* Senior Secondary 1–3 */}
          {Array.from({ length: 3 }, (_, i) => `SSS ${i + 1}`).map((level) => (
            <li key={level}>
              <strong className="block text-yellow-300">{level}</strong>
              <ul className="ml-3 space-y-1">
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/english.md`} className="hover:text-yellow-200">English</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/mathematics.md`} className="hover:text-yellow-200">Mathematics</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/biology.md`} className="hover:text-yellow-200">Biology</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/chemistry.md`} className="hover:text-yellow-200">Chemistry</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/physics.md`} className="hover:text-yellow-200">Physics</a></li>
              </ul>
            </li>
          ))}

          {/* Youth Education 1–3 */}
          {Array.from({ length: 3 }, (_, i) => `Youth Education ${i + 1}`).map((level) => (
            <li key={level}>
              <strong className="block text-yellow-300">{level}</strong>
              <ul className="ml-3 space-y-1">
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/subjects.md`} className="hover:text-yellow-200">Subjects</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/teachers-guide.md`} className="hover:text-yellow-200">Teachers Guide</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/questions.md`} className="hover:text-yellow-200">Questions</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/answers.md`} className="hover:text-yellow-200">Answers</a></li>
              </ul>
            </li>
          ))}

          {/* Parenting 1–3 */}
          {Array.from({ length: 3 }, (_, i) => `Parenting ${i + 1}`).map((level) => (
            <li key={level}>
              <strong className="block text-yellow-300">{level}</strong>
              <ul className="ml-3 space-y-1">
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/guides.md`} className="hover:text-yellow-200">Guides</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/teachers-guide.md`} className="hover:text-yellow-200">Teachers Guide</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/questions.md`} className="hover:text-yellow-200">Questions</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/answers.md`} className="hover:text-yellow-200">Answers</a></li>
              </ul>
            </li>
          ))}

          {/* Professional 1–2 */}
          {Array.from({ length: 2 }, (_, i) => `Professional ${i + 1}`).map((level) => (
            <li key={level}>
              <strong className="block text-yellow-300">{level}</strong>
              <ul className="ml-3 space-y-1">
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/skills.md`} className="hover:text-yellow-200">Skills</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/teachers-guide.md`} className="hover:text-yellow-200">Teachers Guide</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/questions.md`} className="hover:text-yellow-200">Questions</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/answers.md`} className="hover:text-yellow-200">Answers</a></li>
              </ul>
            </li>
          ))}

          {/* Extracurricular 1–6 */}
          {Array.from({ length: 6 }, (_, i) => `Extracurricular ${i + 1}`).map((level) => (
            <li key={level}>
              <strong className="block text-yellow-300">{level}</strong>
              <ul className="ml-3 space-y-1">
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/activities.md`} className="hover:text-yellow-200">Activities</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/teachers-guide.md`} className="hover:text-yellow-200">Teachers Guide</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/questions.md`} className="hover:text-yellow-200">Questions</a></li>
                <li><a href={`docs/CURRICULUM/${level.toLowerCase().replace(" ","")}/answers.md`} className="hover:text-yellow-200">Answers</a></li>
              </ul>
            </li>
          ))}

          {/* Other Sections */}
          <li className="pt-4 border-t border-blue-500">
            <a href="#video1" className="hover:text-yellow-200">🎥 Intro Video</a>
          </li>
          <li>
            <a href="#donation" className="hover:text-yellow-200">💖 Donate</a>
          </li>
          <li>
            <a href="#faq" className="hover:text-yellow-200">❓ FAQ</a>
          </li>
          <li>
            <a href="#signup" className="hover:text-yellow-200">✍️ Sign Up</a>
          </li>
          <li>
            <a href="#login" className="hover:text-yellow-200">🔑 Login</a>
          </li>
          <li>
            <a href="#impressum" className="hover:text-yellow-200">ℹ️ Impressum</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
