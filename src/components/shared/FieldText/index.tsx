'use client';

import './styles.css';

export interface FieldTextProps {
  id: string;
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

const FieldText = ({
  id,
  name,
  value,
  label,
  placeholder,
  error,
  onChange
}: FieldTextProps) => (
  <fieldset className="field-text">
    {label && <label htmlFor={id}>{label}</label>}
    <input
      id={id}
      name={name}
      className={error ? 'error' : undefined}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={evt => { onChange(evt.target.value); }}
    />
    {error && <p className="error-message">{error}</p>}
  </fieldset>
);

export default FieldText;