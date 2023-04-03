import classNames from "classnames";
import React, { useState } from "react";
import { Button } from "./ui";
//import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  const [isCategoriesOppened, setIsCategoriesOppened] = useState(false);

  const toggleCategories = () => {
    setIsCategoriesOppened(!isCategoriesOppened);
  };

  const onChangeCategory = (index) => {
    onClickCategory(index);
    toggleCategories();
  };

  return (
    <div
      className={classNames("navbar", {
        "navbar--oppened": isCategoriesOppened,
      })}
    >
      <Button
        className="navbar__button button--default button--orange"
        onClick={toggleCategories}
      >
        <span>{activeCategory === null ? "All" : items[activeCategory]}</span>
      </Button>
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onChangeCategory(null)}
        >
          All
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onChangeCategory(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

/* Tabs.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.array(),
  onClickCategory: PropTypes.func,
};

Tabs.defaultProps = {
  activeCategory: null,
  items: [],
}; */

export default Categories;
