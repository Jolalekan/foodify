"use client"

import Link from "next/link";
import Pagination from "react-responsive-pagination";
import { Container } from "../container";
import { ShoppingCard } from "../card";

const categories = [
  {
    category: "Snacks",
    image: "",
    description:
      "In this category you will eat well and have a nice meal, feel free to share to others and you get something that works for all",
  },
  {
    category: "Nigerian Navtive food",
    image: "",
    description:
      "In this category you will eat well and have a nice meal, feel free to share to others",
  },
  {
    category: "Fruits",
    image: "",
    description:
      "In this category you will eat well and have a nice meal, feel free to share to others",
  },
];

export const Categories = () => {
  return (
    <section id={"produuct_categories"}>
      <Container>
        <div className={"py-20"}>
          <p className={"text-zinc-500 text-[23px]"}>
            Foodify Shopping categories
          </p>
          <div className={"flex justify-between"}>
            <div className={"w-[20%]"}>
              <p className={"mt-5 text-zinc-500 text-[18px] font-bold"}>
                Categories
              </p>
              <ul>
                {categories.map(({ category, description }, index) => {
                  return (
                    <li key={`category-${index}`} className={"mt-3"}>
                      <p
                        className={
                          "font-bold text-zinc-500 text-[15px] hover:text-primary-100 hover:underline"
                        }
                      >
                        <Link href={""}>{category}</Link>
                      </p>
                      <p className={"text-zinc-500 text-[14px]"}>
                        {description.length > 85
                          ? `${description.slice(0, 85)}...`
                          : description}
                      </p>
                    </li>
                  );
                })}
              </ul>
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
