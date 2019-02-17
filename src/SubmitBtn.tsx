import React from 'react';
import { useWait } from 'react-use';
import { Spin } from 'antd';
export const SubmitBtn = () => {
  const { isWaiting } = useWait();
  const loading = isWaiting('fetch');

  return (
    <div className="form-group row">
      <div className="col-sm-9 offset-sm-3">
        <button disabled={loading} className="btn-info btn">
          Get Commit Count
        </button>
        <Spin className="ml-2" spinning={loading} />
      </div>
    </div>
  );
};
