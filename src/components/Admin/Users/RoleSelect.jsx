import React, { useState } from "react";
import ROLES, { ROLES_LIST } from "../../../utils/constants/roles";
import { SelectPopup } from "../../ui";

const RoleSelect = ({ activeItem, onSelectItem, className }) => {
	return (
		<SelectPopup
			items={[ROLES.user, ROLES.admin]}
			activeItem={activeItem}
			onSelectItem={onSelectItem}
			className={className}
		/>
	);
};

export default RoleSelect;
