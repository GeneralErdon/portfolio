import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import { ROUTES } from "@utils/constants";

const App = () => {
  return (
    <Router>
        <Routes >
          <Route path="/" element={<Layout />} >
            {/* <Route index element={<Home/>} /> */}
            <Route path={ROUTES.HOME} element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
