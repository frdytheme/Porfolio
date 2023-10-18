import { useEffect, useRef } from "react";

function WorksList({ setWorksIndex, workListData }) {
  const workRef = useRef(null);

  const checkedWorks = () => {
    const list = workRef.current.querySelectorAll(".workItem");
    list.forEach((item) => {
      item.addEventListener("click", (e) => {
        list.forEach((item) => item.classList.remove("checked"));
        e.currentTarget.classList.add("checked");
      });
    });
  };

  useEffect(() => {
    checkedWorks();
    window.addEventListener("click", checkedWorks);
    return () => {
      window.removeEventListener("click", checkedWorks);
    };
  }, []);

  return (
    <ul className="workList" ref={workRef}>
      {workListData.map((data) => {
        const { id, name, peoples, category } = data;
        return (
          <li
            className={`workItem ${id === 0 ? "checked" : ""}`}
            key={id}
            onClick={() => {
              setWorksIndex(id);
            }}>
            <h4>{name}</h4>
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
