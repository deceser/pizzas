import { useState } from "react";

const useInput = (value = "", error) => {
	const [val, setVal] = useState(value);

	const onChange = (e) => {
		setVal(e.target.value);
	};

	return { value: val, onChange, error };
};

export default useInput;
