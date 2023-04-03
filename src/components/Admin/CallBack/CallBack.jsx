import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCallBacks } from "../../../redux/actions/admin";
import CallBackItem from "./CallBackItem";

const CallBack = () => {
  const dispatch = useDispatch();

  const { callBacks } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getCallBacks());
  }, []);

  return (
    <div>
      {callBacks.length ? (
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>phone</th>
                  <th>date</th>
                  <th>done</th>
                </tr>
              </thead>
              <tbody>
                {callBacks.map((item) => (
                  <CallBackItem key={item.id} {...item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        "There isn't call backs"
      )}
    </div>
  );
};

export default CallBack;
