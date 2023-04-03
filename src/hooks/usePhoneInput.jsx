import { useState } from "react";

const usePhoneInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

export default usePhoneInput;
