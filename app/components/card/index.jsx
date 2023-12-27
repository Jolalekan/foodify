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
        <p className={"text-[17px] text-zinc-700 font-bold"}>{title}</p>
        <p className={"text-[15px] text-zinc-700"}>{description}</p>
        <p className={"text-primary-100 font-bold text-[15px]"}>Price: ₦{price}</p>
        <div className={"flex justify-between mt-4"}>
          <Button label={"Order now"} style={{ width: "48%" }} className={"py-1.5"} />
          <Button label={"Add to cart"} style={{ width: "48%" }} className={"py-1.5"} inverse />
        </div>
      </div>
    </div>
  );
};
