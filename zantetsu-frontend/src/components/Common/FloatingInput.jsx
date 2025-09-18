/**
 * Props:
 * - id (optional)
 * - name
 * - label
 * - type (default "text")
 * - value, onChange (for controlled usage)
 * - textarea (boolean) -> renders a textarea when true
 * - rows (for textarea)
 * - className (extra input classes)
 */
export default function FloatingInput({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder = " ",
  textarea = false,
  rows = 3,
  className = "",
  required = false,
  ...props
}) {
  const inputId = id || name;

  const container = "relative bg-bgMuted rounded-2xl px-6 py-3";
  const baseInput = `peer w-full bg-transparenttext-bgLight text-sm focus:outline-none ${className}`;

  const labelClasses = `absolute left-6 top-2 text-xs text-bgLight/50 transition-all duration-200 transform
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-bgLight/50
          peer-focus:top-2 peer-focus:text-xs peer-focus:text-accentGold`;

  return (
    <div className={container}>
      {textarea ? (
        <>
          <textarea
            id={inputId}
            name={name}
            value={value}
            onChange={onchange}
            placeholder={placeholder}
            rows={rows}
            required={required}
            className={baseInput + " resize-none"}
            {...props}
          />
          {label && (
            <label htmlFor={inputId} className={labelClasses}>
              {label}
            </label>
          )}
        </>
      ) : (
        <>
          <input
            id={inputId}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={baseInput}
            {...props}
          />
          {label && (
            <label htmlFor={inputId} className={labelClasses}>
              {label}
            </label>
          )}
        </>
      )}
    </div>
  );
}
