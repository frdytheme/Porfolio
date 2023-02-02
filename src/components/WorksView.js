import { useEffect, useRef } from "react";

function WorksView({ data }) {
  const { name, duration, peoples, category, description, video } = data;

  const viewRef = useRef(null);
  const videoRef = useRef(null);

  const moveViewBtn = (e) => {
    const cursor = viewRef.current;
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    cursor.style.left = mouseX - cursor.offsetWidth / 2 + "px";
    cursor.style.top = mouseY - cursor.offsetHeight / 2 + "px";

    const framePos = videoRef.current.getBoundingClientRect();
    const frameTop = framePos.y + window.scrollY;

    if (
      framePos.x < mouseX &&
      mouseX < framePos.x + framePos.width &&
      frameTop < mouseY &&
      mouseY < frameTop + framePos.height
    ) {
      viewRef.current.classList.add("on");
    } else {
      viewRef.current.classList.remove("on");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveViewBtn);
    return () => {
      window.removeEventListener("mousemove", moveViewBtn);
    };
  }, []);

  return (
    <>
      <aside className="worksView">
        <div className="videoFrame" ref={videoRef}>
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
        <div className="viewMore" ref={viewRef}>
          view more
        </div>
      </aside>
    </>
  );
}

export default WorksView;
