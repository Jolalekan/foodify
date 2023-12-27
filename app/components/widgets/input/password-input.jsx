import { useState } from "react";
import { Eye, EyeSlash } from "../../icons";

export const PasswordInput = ({
  name,
  placeholder,
  label,
  onChange,
  onBlur,
  value,
  error,
  className,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={className ?? ""}>
        <label className={"text-sm"}>{label}</label>
        <div className={"border-b border-zinc-500 flex justify-between w-full"}>
          <input
            type={open ? "text" : "password"}
            className={" py-3 text-sm outline-none w-full pr-3"}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
          <button onClick={() => setOpen(!open)} type={"button"}>
            {open ? <EyeSlash /> : <Eye />}
          </button>
        </div>
        {error && <p className={"mt-3 text-sm text-red-600"}>{error}</p>}
      </div>
    </>
  );
};
