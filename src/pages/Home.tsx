import Education from "@pages/Education";
import ExperiencePage from "@pages/Experience";
import Skills from "@pages/Skills";
import ProjectPage from "@pages/Projects";
import About from "@pages/About";
import ContactPage from "./ContactPage";

const Home: React.FC<Props> = () => {
  return (
    <>
      <About />
      <ExperiencePage />
      <Education />
      <Skills />
      <ProjectPage />
      <ContactPage />
    </>
  );
};

export default Home;
