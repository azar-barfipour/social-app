import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
