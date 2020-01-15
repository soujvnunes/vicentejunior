import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import As from "../../util/Mixins/As";

const CardRoot = styled.article`
  transition: var(--a);
  border: var(--sb);
  border-radius: var(--sr);

  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-position: center 40%;
      height: calc(var(--ds) * 40px);
      border-radius: var(--sr);

      ${props.zoom &&
        css`
          background-size: cover;
          box-shadow: inset 0 calc(var(--ds) * -24px) calc(var(--ds) * 8px)
            calc(var(--ds) * -8px) hsla(var(--ctd), 0.75);
        `}
    `};

  &:hover {
    color: hsla(var(--ctl), 1);
  }
`;

export default function Card(props) {
  let { children, image, zoom, title, href, ...other } = props;

  return (
    <CardRoot
      zoom={zoom}
      image={image}
      title={title}
      href={href}
      {...As(`${href ? "a" : "article"}`)}
      {...other}
    >
      {children}
    </CardRoot>
  );
}

Card.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  zoom: PropTypes.bool
};
