import Cover from "./Cover";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import { useMediaQuery } from "react-responsive";
import WorksMobile from "./WorksMobile";

function Main({ mainRef }) {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return (
    <main ref={mainRef}>
      <Cover />
      <Skills />
      {isMobile ? <WorksMobile /> : <Works />}
      <Contact />
    </main>
  );
}

export default Main;
