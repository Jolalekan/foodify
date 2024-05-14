"use client"

import Link from "next/link";
import { navListConstant } from "../../utils/constant";
import { Container } from "../container";
import AuthContext from "../AppContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export const Navigation = () => {
  const router = useRouter()
  const { signOut, auth } = useContext(AuthContext)

  const handleSignOut = () => {
    signOut()
    router.push("/login")
  }


  return (
    <section>
      <nav className={"w-full fixed z-10"}>
        <Container>
          <div
            className={
              "flex justify-between bg-white w-full px-12 mt-10 rounded-lg border-2 border-zinc-200 py-5"
            }
          >
            <div>
              <p className={"text-primary-100 font-bold text-[16px]"}>
                <Link href={"/"}> Foodify Shopping</Link>
              </p>
            </div>
            <div>
              <ul className={"flex mt-1"}>
                {navListConstant.map(({ value, link }, index) => {
                  return (

                    <li
                      key={`nav-${index}`}
                      className={
                        "px-2 text-[13px] text-zinc-500 hover:text-primary-100 hover:underline"
                      }
                    >
                      <Link href={link}>{value}</Link>

                    </li>
                  );
                })}
              </ul>
              <div>
                {auth ? ( // If logged in (auth exists)
                  <>
                  {console.log("login", auth)}
                    {/* Links or components for logged-in users */}
                    <button onClick={signOut} >signOut</button>
                  </>
                ) : (
                  <>  {/* If not logged in (auth is null) */}
                    <Link href="/register">Register</Link>
                    <Link href="/login">Login</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </section>
  );
};

