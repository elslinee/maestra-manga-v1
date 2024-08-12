"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import addUserApis from "../../_utils/addUserApis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCookie } from "nookies";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function LoginPage() {
  const [errorMess, setErrorMess] = useState("");
  const [submitting, setSubmitting] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline({});

    tl.to("header ", {
      opacity: 0,
      display: "none",
    })
      .from(".login-page  main ", {
        delay: 1.6,
        opacity: 0,
      })
      .from(".login-page  aside img ", {
        opacity: 0,
      });
  });
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const router = useRouter();

  const userLogin_ = async (userData) => {
    setSubmitting(true);

    try {
      const res = await addUserApis.userLogin(userData);
      const token = res?.data?.jwt;
      if (token) {
        // Set the token in a cookie
        setCookie(null, "token", token, {
          maxAge: 30 * 24 * 60 * 60, // 30 days
          path: "/",
        });
        window.location.href = "/"; // Redirect to the home page with a full page reload
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error?.message || "";
      if (errorMessage.includes("Invalid identifier or password")) {
        setErrorMess("اسم المستخدم او كلمة السر خطأ");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();
    userLogin_(formData);
  };
  return (
    <section className="login-page bg-[#121318] fixed w-screen h-screen z-[10000] ">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/Site_Background.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center flex-col justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <Link
            href="/"
            className="text-white sm:w-[425px] mb-8 flex justify-start"
          >
            الرجوع للصفحة الرئيسية
          </Link>
          <div className="max-w-xl lg:max-w-3xl">
            <div className="logo flex justify-center items-center">
              <a className="block" href="/">
                <Image src="/logo.svg" alt="logo" width={150} height={150} />
              </a>
            </div>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              مرحبا بكم فى مايسترا مانجا
            </h1>
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 ">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {`  اسم المستخدم او البريد الالكتروني`}
                </label>
                <input
                  type="text"
                  id="username"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  required
                  className="mt-1 py-3 px-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  كلمة السر
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 py-3 px-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                {submitting ? (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex shrink-0 opacity-50 rounded-md border border-[#621F9F] bg-[#621F9F] px-12 py-3 text-sm font-medium text-white transition  hover:text-[#621F9F] focus:outline-none hover:bg-[#54198b] dark:hover:text-white"
                  >
                    جاري تسجيل الدخول
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="mr-2 animate-spin"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-[#621F9F] bg-[#621F9F] px-12 py-3 text-sm font-medium text-white transition  hover:text-[#621F9F] focus:outline-none hover:bg-[#54198b] dark:hover:text-white"
                  >
                    تسجيل الدخول
                  </button>
                )}

                <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                  ليس لديك حساب ؟
                  <Link
                    href="/register"
                    className="text-gray-700 underline mr-4 dark:text-gray-200"
                  >
                    انشاء حساب
                  </Link>
                </p>
              </div>
              {
                <div className="text-red-700 font-medium text-xl text-nowrap">
                  {errorMess}
                </div>
              }
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default LoginPage;
