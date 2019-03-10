import React, { useContext, useCallback, Dispatch } from "react";
import { ActionTypes, Actions } from "./actions";
import _ from "lodash";
import { RootContext } from "./Provider";
interface InputFieldFactoryProps {
  id?: string;
  label: string;
  prepend?: string;
  placeholder: string;
  onChange: (value: string, dispatch: Dispatch<Actions>) => void;
}
const InputFieldFactory = ({
  label,
  placeholder,
  prepend,
  id = _.uniqueId("input"),
  onChange
}: InputFieldFactoryProps) => () => {
  const { dispatch } = useContext(RootContext);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value, dispatch);
    },
    [onChange, dispatch]
  );

  return (
    <div className="form-group row">
      <label htmlFor={id} className="col-sm-3 col-form-label">
        {label}
      </label>
      <div className="input-group col-sm-9">
        {prepend && (
          <div className="input-group-prepend">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          onChange={handleChange}
          required
          className="form-control"
          id={id}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
export const UrlInputField = InputFieldFactory({
  label: "GitHub Repository URL:",
  placeholder: "naohirotamura/faasshell",
  prepend: "https://github.com/",
  onChange: (value, dispatch) => {
    dispatch({ type: ActionTypes.SET_URL, payload: value });
  }
});

export const TargetInputField = InputFieldFactory({
  label: "Commiter's search string:",
  placeholder: "fujitsu.com",
  onChange: (value, dispatch) => {
    dispatch({ type: ActionTypes.SET_TARGET, payload: value });
  }
});
