import React from "react";

const WeaterExtraInfo = props => {
  const { humidity, wind } = props;
  return (
    <div>
      <span>{`${humidity} %`}</span>-<span>{`${wind} m/s`}</span>
    </div>
  );
};

export default WeaterExtraInfo;
