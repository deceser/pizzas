import { useLocale } from "../../../hooks";
import { Checkbox } from "../../ui";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCallBack } from "../../../redux/actions/admin";
import parsePhoneNumber from "libphonenumber-js";

const CallBackItem = ({ id, User, createdAt }) => {
  const dispatch = useDispatch();
  const locale = useLocale();

  const parsedDate = new Date(createdAt);

  const [doneChecked, setDoneChecked] = useState(false);

  const handleDoneChange = (e) => {
    setDoneChecked(e.target.checked);
    if (e.target.checked) {
      dispatch(deleteCallBack(id));
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{parsePhoneNumber("+" + User.phoneNumber).formatInternational()}</td>
      <td>{parsedDate.toLocaleString(locale)}</td>
      <td>
        <Checkbox value={doneChecked} onChange={handleDoneChange} />
      </td>
    </tr>
  );
};

export default CallBackItem;
