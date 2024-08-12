"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SearchPage from "./SearchPage";
import useFullscreenStatus from "../_components/useFullscreenStatus";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import userApi from "../_utils/userApi";
import { destroyCookie, parseCookies } from "nookies";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState([]);
  const getUser_ = () => {
    userApi.getUser().then((res) => {
      console.log(res?.data);
      setUser(res?.data);
    });
  };
  useEffect(() => {
    getUser_();
  }, []);
  const toggleOpen = () => {
    setIsOpen(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
  };

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
  const menuLinks = [
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
    {
      name: "اضف اعمال او فصول",
      href: "/add_manga",
    },
  ];
  const pathName = usePathname();

  const isFullscreen = useFullscreenStatus();

  // const isFullScreen = () => {
  //   return (
  //     document.fullscreenElement != null ||
  //     document.mozFullScreenElement != null || // For Firefox
  //     document.webkitFullscreenElement != null || // For Chrome, Safari and Opera
  //     document.msFullscreenElement != null
  //   ); // For IE/Edge
  // };
  // const [isFullScreenMode, setIsFullScreenMode] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      header?.classList.toggle("activeHeader", window.scrollY > 0);
    });
  }, []);
  const openSearch = () => {
    gsap.to(".search-page", {
      zIndex: 2000,
      opacity: 1,
      display: "block",
    });
    gsap.to(".overlayBlur", {
      filter: "blur(25px)",
    });
  };

  const route = useRouter();

  const logOut = () => {
    destroyCookie(null, "token"); // Remove the token cookie
    route.push("/"); // Redirect to the home page
  };
  const cookies = parseCookies();
  const token = cookies.token;
  const openMenu = () => {
    gsap.to("header .menu .menuTab", {
      right: 0,
      display: "flex",
      zIndex: 9999999,
    });
  };
  const closeMenu = () => {
    gsap.to("header .menu .menuTab", {
      right: "-1000px",
      display: "none",
      zIndex: -9999999,
    });
  };

  return (
    <>
      {!isFullscreen ? (
        <header className="tr-4 z-[1000] w-full  top-0 right-0 fixed h-24 lg:h-28  ">
          <div className="container h-full flex justify-between">
            <div className="logo flex  h-full items-center  ">
              <a className="block lg:ml-12" href="/">
                <Image
                  src={"/logo.svg"}
                  alt={"logo"}
                  width={100}
                  height={100}
                />
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
                  onClick={() => openSearch()}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-11 searchIcon cursor-pointer text-white transition hover:text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                {token ? (
                  <div className="relative ">
                    <div
                      className=" "
                      onMouseEnter={() => toggleOpen()}
                      onMouseLeave={() => toggleClose()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#621f9f"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-11  cursor-pointer text-white transition  bg-primary rounded-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </div>
                    <div
                      className={`absolute 2xl:translate-x-[-50%]  translate-x-[-12%]   left-[50%]  hover:opacity-100 tr-4 flex justify-center items-center end-0 z-10 mt-2 w-56 rounded-md border border-gray-900  bg-background shadow-lg ${
                        isOpen ? ` opacity-100 ` : ` opacity-0 `
                      }`}
                      role="menu"
                    >
                      <div className="p-2">
                        <span className="  justify-center flex w-full  text-[22px] text-[#8029d1] px-4 py-2 rounded-lg">
                          {user?.username}
                        </span>
                        <Link
                          href="/add_manga"
                          className="block w-full rounded-lg px-4 py-2 text-md text-center text-white"
                          role="menuitem"
                        >
                          اضافة اعمال او فصول
                        </Link>
                        <a
                          href="/"
                          className="text-white w-full text-md px-4 py-2 text-center"
                          onClick={() => logOut()}
                        >
                          تسجيل الخروج
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a href="/login">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-11  cursor-pointer text-white transition hover:text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <div className="menu lg:hidden  h-full flex gap-6 justify-center items-center">
              <div className=" menuTab  h-screen w-[100%] flex-col justify-between  rounded-lg bg-background fixed right-[-1000px] hidden z-[-9999999] top-0">
                <div
                  onClick={() => closeMenu()}
                  className="text-white closeMenuTab text-4xl absolute left-0 top-0 p-6 "
                >
                  X
                </div>
                <div className="px-6 py-6 flex flex-col justify-center items-center h-full">
                  <a
                    className="flex justify-center items-center lg:ml-12"
                    href="/"
                  >
                    <Image
                      src={"/logo.svg"}
                      alt={"logo"}
                      width={100}
                      height={100}
                    />
                  </a>
                  <ul className="flex mt-8 flex-col items-center text-white gap-6  lg:text-[22px] text-nowrap ">
                    {menuLinks.map((link) => {
                      const isActive =
                        pathName === link.href ||
                        (pathName.startsWith(link.href) && link.href !== "/");
                      return (
                        <li
                          onClick={() => closeMenu()}
                          key={link.name}
                          className={isActive ? "active " : " "}
                        >
                          <Link href={link.href}>{link.name}</Link>
                        </li>
                      );
                    })}
                    <li>
                      {user.username ? (
                        <a
                          href="/"
                          className="text-white w-full text-md  text-center"
                          onClick={() => {
                            logOut();
                            closeMenu();
                          }}
                        >
                          تسجيل الخروج
                        </a>
                      ) : (
                        <Link
                          href={"/login"}
                          className="text-white w-full text-md  text-center"
                          onClick={() => closeMenu()}
                        >
                          تسجيل الدخول
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>

                <div className="sticky  user inset-x-0 bottom-0 ">
                  <a
                    href="#"
                    className="flex  items-center gap-2 bg-[#200b33] p-4 "
                  >
                    <div>
                      <p className="text-base  text-white">
                        <strong className="block font-medium">
                          {user?.username}
                        </strong>

                        <span> {user?.email} </span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <svg
                onClick={() => openSearch()}
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
                onClick={() => openMenu()}
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
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
