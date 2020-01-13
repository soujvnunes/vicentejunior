import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const SkewRoot = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: skewX(var(--skew-X)) skewY(0deg);
  transition: var(--transition);
  border-radius: var(--radius);

  ${props =>
    props.variant === "text" &&
    css`
      opacity: 0;
      background-color: currentColor;

      &:hover {
        opacity: 0.25;
      }

      &:active {
        opacity: 0.5;
      }
    `}
  
  ${props =>
    props.variant === "outlined" &&
    css`
      opacity: 0.5;
      border: var(--border);

      &:hover {
        opacity: 0.75;
      }

      &:active {
        background-color: currentColor;
      }
    `}

  ${props =>
    props.variant === "contained" &&
    css`
      background-color: currentColor;
    `}
  
  ${props =>
    props.variant === "underlined" &&
    css`
      background-color: currentColor;
      height: calc(var(--spacing) * 0.25px);
      top: auto;
    `}
`;

export default function Skew(props) {
  let { className, variant } = props;
  return <SkewRoot className={className} variant={variant} />;
}

Skew.propTypes = {
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  variant: PropTypes.oneOf(["text", "outlined", "contained", "underlined"])
};