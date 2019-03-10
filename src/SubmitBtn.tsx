import React, { useContext } from "react";
import { RootContext } from "./Provider";
import { Spin } from "antd";
export const SubmitBtn = () => {
  const {
    state: { waiting }
  } = useContext(RootContext);
  return (
    <div className="form-group row">
      <div className="col-sm-9 offset-sm-3">
        <button disabled={waiting} className="btn-info btn">
          Get Commit Count
        </button>
        <Spin className="ml-2" spinning={waiting} />
      </div>
    </div>
  );
};
