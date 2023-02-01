import Cover from "./Cover";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import { useMediaQuery } from "react-responsive";

function Main({ mainRef }) {
  const isMobile = useMediaQuery({
    query: "(min-width:320px) and (max-width:768px)",
  });

  return (
    <main ref={mainRef}>
      <Cover />
      <Skills />
      {isMobile || <Works />}
      <Contact />
    </main>
  );
}

export default Main;
