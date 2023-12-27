import Link from "next/link";
import { navListConstant } from "../../utils/constant";
import { Container } from "../container";

export const Navigation = () => {
  return (
    <section>
      <nav className={"w-full fixed z-10"}>
        <Container>
          <div
            className={
              "flex justify-between bg-white w-full px-12 mt-10 rounded-lg border border-zinc-200 py-5"
            }
          >
            <div>
              <p className={"text-primary-100 font-bold text-[22px]"}>
                <Link href={"/"}> Foodify Shopping</Link>
              </p>
            </div>
            <div>
              <ul className={"flex mt-2"}>
                {navListConstant.map(({ value, link }, index) => {
                  return (
                    <li
                      key={`nav-${index}`}
                      className={
                        "px-3 text-sm text-zinc-500 hover:text-primary-100 hover:underline"
                      }
                    >
                      <Link href={link}>{value}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </section>
  );
};
