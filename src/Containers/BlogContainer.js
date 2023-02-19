import React from "react";
import { Outlet } from "react-router-dom";

const BlogContainer = (props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BlogContainer;
