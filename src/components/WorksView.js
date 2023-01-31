
function WorksView({ data }) {
  const { name, duration, peoples, category, description, video } = data;
  return (
    <>
      <aside className="worksView">
        <div className="videoFrame">
          <video src={video} autoPlay loop muted></video>
        </div>
        <ul className="workInfo">
          <li>
            <h4>Project Name</h4>
            <p>{name}</p>
          </li>
          <li>
            <h4>Duration</h4>
            <p>{duration}</p>
          </li>
          <li>
            <h4>Peoples</h4>
            <p>{peoples}</p>
          </li>
          <li>
            <h4>Category</h4>
            {category.map((use, idx) => {
              return <p key={idx}>{use}</p>;
            })}
          </li>
          <li>
            <h4>Description</h4>
            <p>{description}</p>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default WorksView;
