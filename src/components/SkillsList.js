function SkillsList({ skills }) {
  return (
    <div className="skillsList">
      <h4>{skills.title}</h4>
      <ul>
        {skills.skill.map((list) => (
          <li key={list.no}>{list.list}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
