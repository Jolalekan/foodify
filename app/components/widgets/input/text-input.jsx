export const TextInput = ({
  type,
  name,
  placeholder,
  label,
  onChange,
  onBlur,
  value,
  error,
  className,
}) => {
  return (
    <>
      <div className={className ?? ""}>
        <label className={"text-sm"}>{label}</label>
        <div className={"border-b border-zinc-500"}>
          <input
            type={type ?? "text"}
            className={" py-3 text-sm outline-none w-full pr-3"}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        </div>
        {error && <p className={"mt-3 text-sm text-red-600"}>{error}</p>}
      </div>
    </>
  );
};
