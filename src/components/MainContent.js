import { React, useState } from "react";

const MainContent = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="p-3">
      <h2>Welcome to My Website</h2>
      <p>This is the main content area in the center.</p>
    </div>
  );
};

export default MainContent;
