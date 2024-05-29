import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes location="/">
          <Route path="/" Component={Home} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
