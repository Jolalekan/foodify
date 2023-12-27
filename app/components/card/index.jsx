import { ImageRatio } from "../widgets/image-ratio";
import { Button } from "../widgets/button"

export const ShoppingCard = ({
  title,
  image,
  description,
  price,
  className,
}) => {
  return (
    <div
      className={`w-full sm:w-full md:w-[31%] rounded-lg border border-primary-100 flex flex-col ${
        className ?? ""
      }`}
    >
      <ImageRatio
        unoptimized={false}
        src={image}
        className={"w-full h-[200px] rounded-tl-lg rounded-tr-lg"}
      />
      <div className={"mt-auto px-3 py-6"}>
        <p className={"text-[15px] text-zinc-700 font-bold"}>{title}</p>
        <p className={"text-[13px] text-zinc-700 mt-3"}>{description}</p>
        <p className={"text-primary-100 font-bold text-[13px] mt-5"}>Price: ₦{price}</p>
        <div className={"flex justify-between mt-4"}>
          <Button label={"Order now"} style={{ width: "48%" }} className={"py-1 text-[11px] font-bold"} />
          <Button label={"Add to cart"} style={{ width: "48%" }} className={"py-1 text-[11px] font-bold"} inverse />
        </div>
      </div>
    </div>
  );
};
