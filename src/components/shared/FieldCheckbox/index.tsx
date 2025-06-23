'use client';

import './styles.css';

export interface FieldCheckboxProps {
  id: string;
  name: string;
  value?: string;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
}

const FieldCheckbox = ({
  label,
  error,
  onChange,
  ...inputProps
}: FieldCheckboxProps) => (
  <fieldset className={`
    field-checkbox
    ${inputProps.disabled ? 'field-checkbox-disabled' : ''}
    ${inputProps.checked ? 'field-checkbox-checked' : ''}`
  }>
    <input
      type="checkbox"
      {...inputProps}
      onChange={evt => {
        onChange(evt.target.checked);
      }}
    />
    <label htmlFor={inputProps.id}>{label ?? ''}</label>
    {error && <p className="error-message">{error}</p>}
  </fieldset>
);

export default FieldCheckbox;
