import "../assets/style/skills.scss";
import SkillsList from "./SkillsList";
import skillsData from "./skillsData";
import { useEffect, useRef } from "react";

function Skills() {
  const data = useRef([]);
  const skillsRef = useRef(null);
  data.current = [...skillsData];

  const showSkills = () => {
    const skillsLists = skillsRef.current.querySelectorAll(".skillsList");
    const scrollY = window.scrollY;
    const listHeight = [];
    skillsLists.forEach(list => {
    })

    // console.log(skillsLists);
  };
  useEffect(() => {
    window.addEventListener("scroll", showSkills);
    return () => window.removeEventListener("scroll", showSkills);
  }, []);

  return (
    <article className="article_skills" ref={skillsRef}>
      <h3 className="headline">Skills</h3>
      {data.current.map((skills) => (
        <SkillsList key={skills.id} skills={skills} />
      ))}
    </article>
  );
}

export default Skills;
