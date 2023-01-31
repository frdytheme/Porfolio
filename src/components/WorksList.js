function WorksList({ setWorksIndex, workListData }) {
  return (
    <ul className="workList">
      {workListData.map((data) => {
        const { id, name, peoples, category } = data;
        return (
          <li className="workItem" key={id} onClick={() => setWorksIndex(id)}>
            <h4>
              {name}
            </h4>
            <p>{peoples}</p>
            <ul>
              {category.slice(0, 2).map((skills, idx) => {
                return (
                  <li className="usedSkills" key={idx}>
                    {skills}
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default WorksList;
