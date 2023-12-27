import Link from "next/link";
import { Button } from "../widgets/button";

export const Banner = () => {
  return (
    <div
      className={
        "w-full h-screen bg-center bg-cover flex justify-center items-center"
      }
      style={{ backgroundImage: "url(/banner.jpg)" }}
    >
      <div>
        <p className={"text-white font-bold text-[80px]"}>@Foodify shopping</p>
        <p className={"text-white font-bold text-[25px] text-center"}>
          We provide 100% customer satisfaction.
        </p>
        <div className={"flex justify-center"}>
          <Link href={"/#produuct_categories"}>
            <Button
              label={"Make an order"}
              className={"border border-white w-[20px] mt-10"}
              style={{ width: "200px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
