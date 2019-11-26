import React from "react";
import Typography from "../Typography";
import Button from "../Button";

export default props => (
  <article className={"Description"}>
    <Typography title={props.title} className={"Description-title"} />
    <Typography subject={props.subtitle} className={"Description-subject"} />
    {props.text && (
      <Typography paragraph={props.text} className={"Description-paragraph"} />
    )}
    {props.children}
    <Button
      id={"events"}
      className={"Description-button"}
      label={props.actionLabel}
      icon={"chevronRight"}
      type={"normal"}
      onClick={props.action}
      state={props.description === "expanded" && "expanded"}
    />
  </article>
);
