
const InputField = ({ placeholder, style, label, value, type, onChange, max, className, required, error }: any) => {
  return (
    <div className={"input"}>
      <label className={"input__label"} >
        {label}
      </label>
      <input
        required={required}
        className={className}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        style={style}
        value={value}
        max={max}
        onChange={onChange}
      />
      {error}
    </div>
  );
};


export {
  InputField,
};
