import React, { useState } from "react";
import PropertyItemForm from "./PropertyItemForm";
import { Button } from "../../../ui";

const PropertyItem = ({
  properties,
  onChangeIssetItem,
  onAddItem,
  onDeleteItem,
}) => {
  const [addFormVisible, setAddFormVisible] = useState(false);

  const toggleAddForm = () => {
    setAddFormVisible(!addFormVisible);
  };

  const addButtonClick = () => {
    toggleAddForm();
  };

  const addItemHandler = (value) => {
    onAddItem(value);
    toggleAddForm();
  };

  return (
    <div className="properties__item">
      {properties.map(
        (item) =>
          item.name !== "none" && (
            <div className="properties__column" key={item.id}>
              <PropertyItemForm
                {...item}
                buttonName="Update"
                onSubmit={onChangeIssetItem}
                onDelete={onDeleteItem}
              />
            </div>
          )
      )}
      <div className="properties__column properties__add">
        {addFormVisible ? (
          <PropertyItemForm
            id={properties.length + 1}
            name=""
            price=""
            buttonName="Add"
            onSubmit={addItemHandler}
            onDelete={toggleAddForm}
          />
        ) : (
          <Button className="button--default" onClick={addButtonClick}>
            Add
          </Button>
        )}
      </div>
    </div>
  );
};

export default PropertyItem;
