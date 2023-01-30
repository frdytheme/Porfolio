function WorksView({ data, worksIndex }) {
  const {id, name, duration, peoples, category, description, video } = data;
  return (
    <>
      { id === worksIndex ?
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
              <p>{category}</p>
            </li>
            <li>
              <h4>Description</h4>
              <p>{description}</p>
            </li>
          </ul>
        </aside> : null
      }
    </>
  );
}

export default WorksView;
