import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="dummy"
      onClick={e => {
        e.preventDefault();
        onClick(); // onClickはcontainerで定義される
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
