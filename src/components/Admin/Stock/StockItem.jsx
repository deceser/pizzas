import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCheckbox } from "../../../hooks";
import {
  setPizzaAvailable,
  setPizzaNotAvailable,
  setPizzaSizeAvailable,
  setPizzaTypeAvailable,
} from "../../../redux/actions/admin";
import { Checkbox } from "../../ui";

const StockItem = ({
  id,
  name,
  sizes,
  types,
  availableSizes,
  availableTypes,
}) => {
  const dispatch = useDispatch();

  const isAllChecked =
    availableSizes.length === sizes.length - 1 &&
    availableTypes.length === types.length - 1;
  const availableInp = useCheckbox(isAllChecked);

  const isNoneSizeIncluded =
    availableSizes.length === 0 ||
    (availableSizes.length === 1 && availableSizes[0]?.name === "none");

  const isNoneTypeIncluded =
    availableTypes.length === 0 ||
    (availableTypes.length === 1 && availableTypes[0]?.name === "none");

  useEffect(() => {
    if (isAllChecked) {
      !availableInp.checked && availableInp.toggleChecked();
    } else {
      availableInp.checked && availableInp.toggleChecked();
    }
  }, [availableSizes, availableTypes]);

  const toggleAvailable = (e) => {
    availableInp.toggleChecked();
    if (e.target.checked) {
      dispatch(setPizzaAvailable(id, types, sizes));
    } else {
      dispatch(setPizzaNotAvailable(id));
    }
  };

  const onSizesChange = (sizeId, name, includes) => {
    dispatch(setPizzaSizeAvailable(id, name, sizeId, includes));
  };
  const onTypesChange = (typeId, name, includes) => {
    dispatch(setPizzaTypeAvailable(id, name, typeId, includes));
  };

  return (
    <tr className="stock">
      <td>
        <Checkbox
          checked={availableInp.checked}
          onChange={toggleAvailable}
          disabled={
            ((isNoneSizeIncluded || isNoneTypeIncluded) &&
              availableSizes.length === 1) ||
            availableTypes.length === 1
          }
        />
      </td>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {sizes.map((size) => {
          const includes = !!availableSizes.find(
            (item) => item.name === size.name
          );
          return (
            <div className="stock__checkbox flex flex-center" key={size.id}>
              <Checkbox
                checked={includes}
                onChange={() => onSizesChange(size.id, size.name, includes)}
                disabled={
                  (size.name === "none" && !isNoneSizeIncluded) ||
                  (size.name !== "none" &&
                    isNoneSizeIncluded &&
                    availableSizes.length === 1)
                }
              />
              <span>{size.name}</span>
            </div>
          );
        })}
      </td>
      <td>
        {types.map((type) => {
          const includes = !!availableTypes.find(
            (item) => item.name === type.name
          );
          return (
            <div className="stock__checkbox flex flex-center" key={type.id}>
              <Checkbox
                key={type.id}
                checked={includes}
                onChange={() => onTypesChange(type.id, type.name, includes)}
                disabled={
                  (type.name === "none" && !isNoneTypeIncluded) ||
                  (type.name !== "none" &&
                    isNoneTypeIncluded &&
                    availableTypes.length === 1)
                }
              />
              <span>{type.name}</span>
            </div>
          );
        })}
      </td>
    </tr>
  );
};

export default StockItem;
