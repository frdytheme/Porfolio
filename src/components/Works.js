import { useState } from "react";
import "../assets/style/works.scss";
import workListData from "./workListData";
import WorksList from "./WorksList";
import WorksView from "./WorksView";

function Works() {
  const [worksIndex, setWorksIndex] = useState(1);

  return (
    <article className="article_works">
      <h3 className="headline">Works</h3>
      <div className="worksBox">
        <WorksList workListData={workListData} setWorksIndex={setWorksIndex} />
        {workListData.map((data) =>
          worksIndex === data.id ? <WorksView data={data} key={data.id} worksIndex={worksIndex} /> : null
        )}
      </div>
    </article>
  );
}

export default Works;
