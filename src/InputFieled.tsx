import React, { useContext, useCallback } from 'react';
import _ from 'lodash';
import { RootContext } from './Provider';
interface InputFieldFactoryProps {
  id?: string;
  label: string;
  prepend?: string;
  setter: 'setUrl' | 'setTarget';
  placeholder: string;
}
const InputFieldFactory = ({
  label,
  placeholder,
  prepend,
  setter,
  id = _.uniqueId('input')
}: InputFieldFactoryProps) => () => {
  const { [setter]: setValue } = useContext(RootContext);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
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
          onChange={onChange}
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
  label: 'GitHub Repository URL:',
  placeholder: 'naohirotamura/faasshell',
  prepend: 'https://github.com',
  setter: 'setUrl'
});

export const TargetInputField = InputFieldFactory({
  label: "Commiter's search string:",
  placeholder: 'fujitsu.com',
  setter: 'setTarget'
});
