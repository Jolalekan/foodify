import Image from "next/image";

export const ImageRatio = ({
  src,
  className,
  priority,
  unoptimized,
  imgClass,
}) => {
  return (
    <div
      className={`${"relative aspect-4/3 overflow-hidden"} ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={"Image"}
        className={imgClass ?? "object-cover"}
        priority={priority}
        fill
        unoptimized={unoptimized}
      />
    </div>
  );
};
