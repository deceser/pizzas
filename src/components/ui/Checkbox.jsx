import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ inputRef, ...rest }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" {...rest} ref={inputRef} />
    </div>
  );
};

Checkbox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default Checkbox;
