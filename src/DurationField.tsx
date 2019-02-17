import React, { useContext, useCallback } from 'react';
import { DatePicker } from 'antd';
import { RootContext } from './Provider';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
const { RangePicker } = DatePicker;
export const DurationField = () => {
  const { setDuration } = useContext(RootContext);
  const onChange = useCallback(
    (dates: RangePickerValue) => {
      const [sinceM, untilM] = dates;
      if (sinceM && untilM) {
        const since = sinceM.startOf('day').toISOString();
        const until = untilM.endOf('day').toISOString();
        setDuration({ since, until });
      }
    },
    [setDuration]
  );
  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label">
        Search Duration (Option)
      </label>
      <div className="col-sm-9">
        <RangePicker onChange={onChange} />
      </div>
    </div>
  );
};
