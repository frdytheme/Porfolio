function WorksView({ data, videoRef }) {
  const { name, duration, peoples, category, description, video, img, page, id } = data;

  return (
    <>
      <aside className="worksView">
        {id === 2 ? (
          <a href={page} target="_blank" className="portfolioLink" ref={videoRef} rel="noreferrer">
            <img src={img} alt={name} />
          </a>
        ) : (
          <a className="videoFrame" ref={videoRef} href={page} target="_blank" rel="noreferrer">
            <video src={video} autoPlay loop muted />
          </a>
        )}

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
            {description.split("/").map((string, idx) => {
              return <p key={idx}>{string}</p>;
            })}
          </li>
        </ul>
      </aside>
    </>
  );
}

export default WorksView;
