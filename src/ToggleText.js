import React, { useState } from "react";

const ToggleText = ({ before, after, hidden }) => {
  const [showMore, toggleMore] = useState(false);

  return (
    <>
      {showMore ? hidden : <></>}
      <span className="show-more" onClick={() => toggleMore(!showMore)}>
        {showMore ? after : before}
      </span>
    </>
  );
};

export default ToggleText;
