import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";

const App = () => {
  return (
    <Router>
        <Routes >
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>} />
            <Route path="portfolio" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
