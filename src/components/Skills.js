import "../assets/style/skills.scss";
import SkillsList from "./SkillsList";
import skillsData from "../assets/data/skillsData";
import {  useRef } from "react";

function Skills() {
  const data = useRef([]);
  data.current = [...skillsData];

  return (
    <article className="article_skills">
      <h3 className="headline">Skills</h3>
      {data.current.map((skills) => (
        <SkillsList key={skills.id} skills={skills} />
      ))}
    </article>
  );
}

export default Skills;
