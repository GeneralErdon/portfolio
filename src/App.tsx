import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import About from "@pages/About";
import Education from "@pages/Education";
import { ROUTES } from "@utils/constants";
import Skills from "@pages/Skills";

const App = () => {
  return (
    <Router>
        <Routes >
          <Route path="/" element={<Layout />} >
            {/* <Route index element={<Home/>} /> */}
            <Route path={ROUTES.HOME} element={<Home/>} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.EDUCATION} element={<Education />} />
            <Route path={ROUTES.SKILLS} element={<Skills />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
