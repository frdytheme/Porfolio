import { useEffect, useRef } from "react";

function WorksView({ data }) {
  const { name, duration, peoples, category, description, video } = data;

  // const random360 = Math.trunc(Math.random() * 361);
  // const randomRGB = Math.trunc(Math.random() * 256);
  // const randomRGB2 = Math.trunc(Math.random() * 257);
  // const randomRGB3 = Math.trunc(Math.random() * 258);
  // const randomRGB4 = Math.trunc(Math.random() * 255);
  // const randomRGB5 = Math.trunc(Math.random() * 254);
  // const randomRGB6 = Math.trunc(Math.random() * 253);
  // const randomGradient = {
  //   backgroundImage: `linear-gradient(${random360}deg, rgb(${randomRGB},${randomRGB2},${randomRGB3}), rgb(${randomRGB4},${randomRGB5},${randomRGB6}))`,
  // };

  const viewRef = useRef(null);
  const videoRef = useRef(null);

  const moveViewBtn = (e) => {
    const cursor = viewRef.current;
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    cursor.style.left = mouseX - cursor.offsetWidth / 2 + "px";
    cursor.style.top = mouseY - cursor.offsetHeight / 2 + "px";

    const framePos = videoRef.current.getBoundingClientRect();
    const frameLeft = framePos.x;
    const frameTop = framePos.y + window.scrollY;
    const frameWidth = framePos.width;
    const frameHeight = framePos.height;

    if (
      frameLeft < mouseX &&
      mouseX < frameLeft + frameWidth &&
      frameTop < mouseY &&
      mouseY < frameTop + frameHeight
    ) {
      viewRef.current.classList.add("on");
    } else {
      e.target.classList.remove("on");
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
