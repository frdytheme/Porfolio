import { useState } from "react";
import "../assets/style/works.scss";
import workListData from "../assets/data/workListData";
import WorksList from "./WorksList";
import WorksView from "./WorksView";
import { useEffect, useRef } from "react";

function Works() {
  const [worksIndex, setWorksIndex] = useState(1);

  const viewRef = useRef(null);
  const videoRef = useRef(null);

  const moveViewBtn = (e) => {
    const cursor = viewRef.current;
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

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
    <article className="article_works">
      <h3 className="headline">Works</h3>
      <div className="worksBox">
        <WorksList workListData={workListData} setWorksIndex={setWorksIndex} />
        {workListData.map((data) =>
          worksIndex === data.id ? (
            <WorksView
              data={data}
              key={data.id}
              worksIndex={worksIndex}
              videoRef={videoRef}
            />
          ) : null
        )}
      </div>
      <div className="viewMore" ref={viewRef}>
        view more
      </div>
    </article>
  );
}

export default Works;
