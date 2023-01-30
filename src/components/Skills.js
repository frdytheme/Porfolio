import "../assets/style/skills.scss";
import SkillsList from "./SkillsList";
import skillsData from "./skillsData";
import { useEffect, useState } from "react";

function Skills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(skillsData);
  }, []);
  return (
    <article className="article_skills headline">
      <h3>Skills</h3>

      {data.map((skills) => (
        <SkillsList key={skills.id} skills={skills} />
      ))}
    </article>
  );
}

export default Skills;
