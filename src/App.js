import "./App.css";
import { Routes, Route } from "react-router-dom";

//Pages
import CreateBlog from "./Pages/CreateBlog/Index";
import HomePage from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
