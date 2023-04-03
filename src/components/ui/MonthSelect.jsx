import React from "react";
import MONTHS, { MONTHS_LIST } from "../../utils/constants/months";
import SelectPopup from "./SelectPopup/SelectPopup";

const MonthSelect = ({ activeItem, onSelectItem }) => {
  const onSelectMonth = (monthName) => {
    onSelectItem(MONTHS[monthName]);
  };

  return (
    <SelectPopup
      items={MONTHS_LIST}
      activeItem={MONTHS_LIST[activeItem - 1]}
      onSelectItem={onSelectMonth}
      height={200}
    />
  );
};

export default MonthSelect;
