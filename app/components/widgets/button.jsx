export const Button = ({ label, type, className, loading, inverse, ...props }) => {
  return (
    <button
      {...props}
      type={type ?? "button"}
      disabled={loading}
      className={`w-full py-3 px-5 text-sm ${
        inverse
          ? "border border-primary-100 text-primary-100"
          : "bg-primary-100 text-white"
      } ${className ?? ""}`}
    >
      <span>{loading ? "Loading..." : label}</span>
    </button>
  );
};
