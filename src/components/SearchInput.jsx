import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "./ui";

export const SearchInput = () => {
  return (
    <Input icon={<AiOutlineSearch />} className="admin-dashboard__input" />
  );
};
