import React from "react";
import classNames from "classnames";

export default props => {
  let { className, children } = props;
  const classes = classNames("LineSet", className);

  return <ul className={classes} children={children} />;
};
