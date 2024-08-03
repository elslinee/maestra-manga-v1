"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

function Header() {
  const navLinks = [
    {
      name: "الرئيسية",
      href: "/",
    },
    {
      name: "قائمة الأعمال",
      href: "/manga_list",
    },
    {
      name: "الإنضمام لنا",
      href: "/join_us",
    },
    {
      name: "إدعمنا",
      href: "/support_us",
    },
  ];
  const pathName = usePathname();
  console.log(pathName);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      header.classList.toggle("activeHeader", window.scrollY > 0);
    });
  }, []);
  return (
    <header className="tr-4 z-[1000] w-full  top-0 right-0 fixed h-24 lg:h-28  ">
      <div className="container h-full flex justify-between">
        <div className="logo flex  h-full items-center  ">
          <a className="block lg:ml-12" href="/">
            <Image src={"/logo.svg"} alt={"logo"} width={100} height={100} />
          </a>
          <nav aria-label="Global" className="hidden lg:block">
            <ul className="flex items-center gap-10  lg:text-[22px] text-nowrap ">
              {navLinks.map((link) => {
                const isActive =
                  pathName === link.href ||
                  (pathName.startsWith(link.href) && link.href !== "/");
                return (
                  <li key={link.name} className={isActive ? "active" : " "}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="searchLabel lg:flex relative  hidden justify-end items-center  w-[300px]  ">
          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 cursor-pointer text-white transition hover:text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 cursor-pointer text-white transition hover:text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          {/* <label htmlFor="Search" className=""></label>
          <input
            type="text"
            id="Search"
            placeholder="بحث"
            className="w-full  placeholder:text-white/75  tr-4 text-[18px]  pl-12 py-2.5 pr-4 shadow-sm  bg-background text-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#c3c4c5"
            className="size-6 absolute left-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg> */}
        </div>
        <div className="menu lg:hidden  h-full flex gap-4 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-11 cursor-pointer text-white transition hover:text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-10 cursor-pointer text-white transition hover:text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
