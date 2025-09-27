import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <>
      <aside className={styles.sidebarContainer}>
        <h2>ELC Documents</h2>
        <input type="text" id="search" placeholder="Search documents..." className={styles.search} />
        <nav>
          <ul className={styles.docList}>

            {/* Preschool Levels */}
            <li><strong>Preschool 1</strong>
              <ul>
                <li><a href="docs/CURRICULUM/preschool1/literacy.md">Literacy</a></li>
                <li><a href="docs/CURRICULUM/preschool1/numeracy.md">Numeracy</a></li>
                <li><a href="docs/CURRICULUM/preschool1/arts.md">Arts</a></li>
                <li><a href="docs/CURRICULUM/preschool1/science.md">Science</a></li>
                <li><a href="docs/CURRICULUM/preschool1/teachers-guide.md">Teachers Guide</a></li>
                <li><a href="docs/CURRICULUM/preschool1/questions.md">Questions</a></li>
                <li><a href="docs/CURRICULUM/preschool1/answers.md">Answers</a></li>
              </ul>
            </li>
            <li><strong>Preschool 2</strong>
              <ul>
                <li><a href="docs/CURRICULUM/preschool2/literacy.md">Literacy</a></li>
                <li><a href="docs/CURRICULUM/preschool2/numeracy.md">Numeracy</a></li>
                <li><a href="docs/CURRICULUM/preschool2/arts.md">Arts</a></li>
                <li><a href="docs/CURRICULUM/preschool2/science.md">Science</a></li>
                <li><a href="docs/CURRICULUM/preschool2/teachers-guide.md">Teachers Guide</a></li>
                <li><a href="docs/CURRICULUM/preschool2/questions.md">Questions</a></li>
                <li><a href="docs/CURRICULUM/preschool2/answers.md">Answers</a></li>
              </ul>
            </li>
            <li><strong>Preschool 3</strong>
              <ul>
                <li><a href="docs/CURRICULUM/preschool3/literacy.md">Literacy</a></li>
                <li><a href="docs/CURRICULUM/preschool3/numeracy.md">Numeracy</a></li>
                <li><a href="docs/CURRICULUM/preschool3/arts.md">Arts</a></li>
                <li><a href="docs/CURRICULUM/preschool3/science.md">Science</a></li>
                <li><a href="docs/CURRICULUM/preschool3/teachers-guide.md">Teachers Guide</a></li>
                <li><a href="docs/CURRICULUM/preschool3/questions.md">Questions</a></li>
                <li><a href="docs/CURRICULUM/preschool3/answers.md">Answers</a></li>
              </ul>
            </li>

            {/* Primary Levels */}
            {["primary1","primary2","primary3","primary4","primary5","primary6"].map(level => (
              <li key={level}><strong>{level.toUpperCase()}</strong>
                <ul>
                  <li><a href={`docs/CURRICULUM/${level}/english.md`}>English</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/mathematics.md`}>Mathematics</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/science.md`}>Science</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/social-studies.md`}>Social Studies</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/arts.md`}>Arts</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/teachers-guide.md`}>Teachers Guide</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/questions.md`}>Questions</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/answers.md`}>Answers</a></li>
                </ul>
              </li>
            ))}

            {/* Junior Secondary Levels */}
            {["jss1","jss2","jss3"].map(level => (
              <li key={level}><strong>{level.toUpperCase()}</strong>
                <ul>
                  <li><a href={`docs/CURRICULUM/${level}/subjects.md`}>Subjects</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/teachers-guide.md`}>Teachers Guide</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/questions.md`}>Questions</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/answers.md`}>Answers</a></li>
                </ul>
              </li>
            ))}

            {/* Senior Secondary Levels */}
            {["sss1","sss2","sss3"].map(level => (
              <li key={level}><strong>{level.toUpperCase()}</strong>
                <ul>
                  <li><a href={`docs/CURRICULUM/${level}/subjects.md`}>Subjects</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/teachers-guide.md`}>Teachers Guide</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/questions.md`}>Questions</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/answers.md`}>Answers</a></li>
                </ul>
              </li>
            ))}

            {/* Youth Education Levels */}
            {["youth-education1","youth-education2","youth-education3"].map(level => (
              <li key={level}><strong>{level.replace("-", " ").toUpperCase()}</strong>
                <ul>
                  <li><a href={`docs/CURRICULUM/${level}/subjects.md`}>Subjects</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/teachers-guide.md`}>Teachers Guide</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/questions.md`}>Questions</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/answers.md`}>Answers</a></li>
                </ul>
              </li>
            ))}

            {/* Parenting Levels */}
            {["parenting1","parenting2","parenting3"].map(level => (
              <li key={level}><strong>{level.toUpperCase()}</strong>
                <ul>
                  <li><a href={`docs/CURRICULUM/${level}/guides.md`}>Guides</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/teachers-guide.md`}>Teachers Guide</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/questions.md`}>Questions</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/answers.md`}>Answers</a></li>
                </ul>
              </li>
            ))}

            {/* Professional Levels */}
            {["professional1","professional2"].map(level => (
              <li key={level}><strong>{level.toUpperCase()}</strong>
                <ul>
                  <li><a href={`docs/CURRICULUM/${level}/skills.md`}>Skills</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/teachers-guide.md`}>Teachers Guide</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/questions.md`}>Questions</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/answers.md`}>Answers</a></li>
                </ul>
              </li>
            ))}

            {/* Extracurricular Levels */}
            {["extracurricular1","extracurricular2","extracurricular3","extracurricular4","extracurricular5","extracurricular6"].map(level => (
              <li key={level}><strong>{level.toUpperCase()}</strong>
                <ul>
                  <li><a href={`docs/CURRICULUM/${level}/activities.md`}>Activities</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/teachers-guide.md`}>Teachers Guide</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/questions.md`}>Questions</a></li>
                  <li><a href={`docs/CURRICULUM/${level}/answers.md`}>Answers</a></li>
                </ul>
              </li>
            ))}

            {/* Media & Other Sections */}
            <li><a href="#video1">Intro Video</a></li>
            <li><a href="#audio1">Sample Audio</a></li>
            <li><a href="#image1">Gallery Image</a></li>
            <li><a href="#donation">Donate</a></li>
            <li><a href="#faq">Q&A / FAQ</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#signup">Sign Up</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#impressum">Impressum</a></li>

          </ul>
        </nav>
      </aside>

      <main className={styles.content}>
        <h1>Welcome to EducateMeSL</h1>
        <p>This is your central hub for accessing all curriculum, lesson plans, and resources.</p>
        <section id="video1">
          <h2>Intro Video</h2>
          <video controls>
            <source src="media/sample-video.mp4" type="video/mp4" />
          </video>
        </section>
        <section id="audio1">
          <h2>Sample Audio</h2>
          <audio controls>
            <source src="media/sample-audio.mp3" type="audio/mp3" />
          </audio>
        </section>
        <section id="image1">
          <h2>Gallery Image</h2>
          <img src="media/sample-image.jpg" alt="Gallery" />
        </section>
      </main>
    </>
  );
};

export default Sidebar;
