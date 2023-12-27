export const Container = ({ children, className }) => {
  return (
    <div className={`flex justify-center ${className ?? ""}`}>
      <div className={"w-[80%]"}>{children}</div>
    </div>
  );
};
