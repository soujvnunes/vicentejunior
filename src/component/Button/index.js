import React from "react";
import Typography from "../Typography";
import Icon from "../Icon";
import classNames from "classnames";

export default props => {
  const className = classNames(
    "Button",
    {
      [`Button-${props.type}`]: props.type,
      [`Button-${props.type}-${props.state}`]: props.state
    },
    props.className
  );

  const large = (
    <div className={"Button-adornment"}>
      <div className={"Button-adornment-bar"} />
      <button
        className={"Button-adornment-ring Button-adornment-ring--left"}
        id={`button-${props.id}`}
        onClick={props.onClick}
      >
        <Icon name={props.icon} className={"Button-adornment-ring-icon"} />
      </button>
      <div className={"Button-adornment-bar Button-adornment-ring--right"} />
    </div>
  );

  const normal = (
    <React.Fragment>
      <Typography subject={props.label} className={"Button-label"} />
      <div className={"Button-adornment"}>
        <div className={"Button-adornment-bar"} />
        <button
          className={"Button-adornment-ring Button-adornment-ring--left"}
          id={`button-${props.id}`}
          onClick={props.onClick}
        >
          <Icon name={props.icon} className={"Button-adornment-ring-icon"} />
        </button>
        <div className={"Button-adornment-bar Button-adornment-ring--right"} />
      </div>
    </React.Fragment>
  );

  return (
    <label className={className} htmlFor={`button-${props.id}`}>
      {props.type === "large" && large}
      {props.type === "normal" && normal}
    </label>
  );
};
