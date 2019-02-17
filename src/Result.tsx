import React, { useContext } from 'react';
import { RootContext } from './Provider';
import { Card } from 'antd';
export const Result = () => {
  const {
    state: { result }
  } = useContext(RootContext);
  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label">Result</label>
      <div className="input-group col-sm-9">
        <Card>{result}</Card>
      </div>
    </div>
  );
};
