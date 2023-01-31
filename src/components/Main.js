import Cover from "./Cover";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";

function Main({ mainRef }) {


  return (
    <main ref={mainRef}>
      <Cover />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
}

export default Main;
