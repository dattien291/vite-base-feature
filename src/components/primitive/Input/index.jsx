import { default as classNames } from "classnames";

export const Input = ({
  type,
  value,
  onChange = () => null,
  onBlur = () => null,
  placeholder,
  className,
  disabled,
  required,
  readOnly,
  autoFocus,
  name,
  id,
  hidden,
  accept,
}) => {
  return (
    <input
      type={type}
      id={id}
      className={classNames("input", className)}
      onChange={!disabled ? (e) => onChange({ name: e.target.name, value: e.target.value, files: e.target.files }) : () => null}
      onBlur={!disabled ? (e) => onBlur({ name: e.target.name, value: e.target.value }) : () => null}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      autoComplete="off"
      autoFocus={autoFocus}
      name={name}
      value={value}
      hidden={hidden}
      accept={accept}
    />
  );
};

Input.defaultProps = {
  type: "text",
  onChange: () => null,
  onBlur: () => null,
  autoFocus: false,
  readOnly: false,
  required: false,
  disabled: false,
};
