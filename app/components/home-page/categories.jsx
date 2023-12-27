"use client";

import Link from "next/link";
import Pagination from "react-responsive-pagination";
import { useFetchCategories } from "../../hooks/product";
import { Container } from "../container";
import { ShoppingCard } from "../card";

export const Categories = () => {
  const { loading, categories } = useFetchCategories();
  console.log(categories);
  return (
    <section id={"produuct_categories"}>
      <Container>
        <div className={"py-20"}>
          <p className={"text-zinc-500 text-[17px] font-bold"}>
            Foodify Shopping categories
          </p>
          <div className={"flex justify-between"}>
            <div className={"w-[20%]"}>
              <p className={"mt-5 text-zinc-500 text-[18px] font-bold"}>
                Categories
              </p>
              {categories.results && (
                <>
                  {loading ? (
                    <p className={"text-zinc-500 text-[13px]"}>Fetching categories...</p>
                  ) : (
                    <ul>
                      {categories.results.map(
                        ({ name, description }, index) => {
                          return (
                            <li key={`category-${index}`} className={"mt-3"}>
                              <p
                                className={
                                  "font-bold text-zinc-500 text-[15px] hover:text-primary-100 hover:underline"
                                }
                              >
                                <Link href={""}>{name}</Link>
                              </p>
                              <p className={"text-zinc-500 text-[14px]"}>
                                {description.length > 85
                                  ? `${description.slice(0, 85)}...`
                                  : description}
                              </p>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  )}
                </>
              )}
            </div>
            <div className={"w-[75%]"}>
              <div className={"flex mt-6 w-full gap-3 flex-wrap"}>
                <ShoppingCard
                  image={"/food-1.jpg"}
                  price={3000}
                  title={"Apple"}
                  className={"mt-3"}
                  description={
                    "This is the best thing that can happen to someone in this place"
                  }
                />
                <ShoppingCard
                  image={"/food-2.jpg"}
                  price={3000}
                  title={"Apple"}
                  className={"mt-3"}
                  description={
                    "This is the best thing that can happen to someone in this place"
                  }
                />
                <ShoppingCard
                  image={"/food-2.jpg"}
                  price={3000}
                  title={"Apple"}
                  className={"mt-3"}
                  description={
                    "This is the best thing that can happen to someone in this place"
                  }
                />
                <ShoppingCard
                  image={"/food-1.jpg"}
                  price={3000}
                  title={"Apple"}
                  className={"mt-3"}
                  description={
                    "This is the best thing that can happen to someone in this place"
                  }
                />
              </div>

              <div className={"flex justify-center mt-10"}>
                <Pagination
                  current={1}
                  total={5}
                  onPageChange={(value) => console.log(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
