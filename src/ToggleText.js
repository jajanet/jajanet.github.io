import React, { useState, Fragment } from "react";

import {hiddenStyle} from "./ImgChangeLogic"

const ToggleText = ({ before, after, hidden }) => {
  const [showMore, toggleMore] = useState(false);

  return (
    <Fragment>
      <span style= {hidden ? hiddenStyle(showMore) : {}}>
       {hidden}
       </span>
      <span className="show-more" onClick={() => toggleMore(!showMore)}>
        {showMore ? after : before}
      </span>
    </Fragment>
  );
};

export default ToggleText;
