'use client';

import { ReactNode } from 'react';
import './styles.css';

interface FieldCheckboxTagProps {
  id: string;
  name: string;
  checked: boolean;
  children: ReactNode;
  onChange: (checked: boolean) => void;
  badge?: string;
  label?: string;
  accentMsg?: string;
  footer?: string;
}

const FieldCheckboxTag = ({
  id,
  name,
  checked,
  children,
  onChange,
  badge,
  label,
  accentMsg,
  footer
}: FieldCheckboxTagProps) => {
  return (
    <fieldset className={`
      field-checkbox-tag
      ${checked ? 'field-checkbox-tag-checked' : ''}`
    }
    >
      {badge && <div className="field-checkbox-tag-badge">{badge}</div>}
      <input
        id={id}
        name={name}
        className="hidden"
        type="checkbox"
        onChange={evt => {
          onChange(evt.target.checked);
        }}
      />
      <label htmlFor={id}>
        <header>
          <span className="field-checkbox-tag-accent-msg">
            {accentMsg ?? ''}
          </span>
          <span>{label ?? ''}</span>
        </header>
        <div className="field-checkbox-tag-content">{children}</div>
        {footer && <footer>{footer}</footer>}
      </label>
    </fieldset>
  );
}

export default FieldCheckboxTag;