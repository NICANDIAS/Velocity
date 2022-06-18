import React from "react";

import BlogContent from "../BlogContent";
import SideContent from "../SideContent";

function HomeContent() {
  return (
    <div className="container">
      <BlogContent />
      <SideContent />
    </div>
  );
}

export default HomeContent;
