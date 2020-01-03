import React, { useState } from "react";
import classNames from "classnames";
import Skew from "../Skew";
import IconButton from "../IconButton";

export default function Line(props) {
  const [state, setState] = useState({
    expand: false
  });
  let { expand } = state;
  let { className, children, primary, secondary, icon, hidden } = props;

  const classes = {
    root: [classNames("Line", className)],
    header: [classNames("Line-header")],
    content: [
      classNames("Line-content", {
        [`Line-content--expand`]: expand
      })
    ]
  };

  let { root, header, content } = classes;

  const handleExpand = () => {
    if (expand) setState({ ...state, expand: false });
    else setState({ ...state, expand: true });
  };

  return (
    <>
      {hidden ? (
        ""
      ) : (
        <li className={root}>
          <div className={header}>
            <div className={"Line-header-info"}>
              <span className={"Line-header-info-title"}>{primary}</span>
              <span className={"Line-header-info-secondary"}>{secondary}</span>
              <Skew curve={"left"} outlined />
            </div>
            <IconButton
              className={"Line-header-button"}
              type={"large"}
              icon={expand ? "remove" : icon}
              onClick={handleExpand}
              skewCurve={"left"}
            />
          </div>
          <div className={content}>{children}</div>
        </li>
      )}
    </>
  );
}
