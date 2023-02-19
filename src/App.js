import "./App.css";
import { Routes, Route } from "react-router-dom";

//Containers
import BlogContainer from "./Containers/BlogContainer";

//Pages

import HomePage from "./Pages/Home";
import CreateBlog from "./Pages/CreateBlog/Index";
import MyBlogs from "./Pages/MyBlogs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog/:entryName" element={<BlogContainer />}>
          <Route index element={<MyBlogs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
