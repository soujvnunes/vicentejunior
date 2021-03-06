import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import Typography from "../Typography";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import NavBase from "../GlobalStyle/Mixins/NavBase";
import PropTypes from "prop-types";

const NavLinkRoot = styled(NavLink)`
  ${NavBase};
  position: relative;
  margin: 0 calc(var(--ds) * 1px);
  min-width: calc(var(--ds) * 10px);
  text-align: center;

  ${down("tablet")} {
    margin: 0;
    min-width: 25%;
    flex-direction: column;
  }
`;

const NavLinkLabel = styled(Typography)`
  font-size: calc(var(--ds) * 1.25px);
  margin-top: calc(var(--ds) * 0.5px);

  ${down("tablet")} {
    margin-top: calc(var(--ds) * 1px);
  }
`;

export default function NavItem({ icon, primary, iconActive, ...other }) {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    if (hover) setHover(false);
    else setHover(true);
  };

  return (
    <NavLinkRoot
      {...other}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >
      <Icon name={icon} variant={iconActive || hover ? "active" : "default"} />
      <NavLinkLabel variant={"action"}>{primary}</NavLinkLabel>
    </NavLinkRoot>
  );
}

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  iconActive: PropTypes.bool.isRequired
};
