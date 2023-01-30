import Cover from "./Cover";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";

function Main({ isScroll, mainRef }) {
 

  return (
    <main ref={mainRef}>
      <Cover />
      <Skills isScroll={isScroll} />
      <Works isScroll={isScroll} />
      <Contact isScroll={isScroll} />
    </main>
  );
}

export default Main;
