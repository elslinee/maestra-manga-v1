"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { parseCookies, setCookie } from "nookies";
import Image from "next/image";
import Link from "next/link";
import addUserApis from "../../_utils/addUserApis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const RegisterPage = () => {
  const [submitting, setSubmitting] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({});

    tl.to("header ", {
      opacity: 0,
      display: "none",
    })
      .from(".register-page  main ", {
        delay: 1.6,
        opacity: 0,
      })
      .from(".register-page  aside img ", {
        opacity: 0,
      });
  });

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const addUser_ = async (userData) => {
    setSubmitting(true);
    try {
      const res = await addUserApis.addUser(userData);
      const token = res?.data?.jwt;
      if (token) {
        // Set the token in a cookie
        setCookie(null, "token", token, {
          maxAge: 30 * 24 * 60 * 60, // 30 days
          path: "/",
        });
        router.push("/add_manga");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error?.message || "";
      if (errorMessage.includes("password must be at least 6 characters")) {
        setPasswordError("كلمة السر يجب ان لا تنقص عن 6 احرف");
      } else {
        setPasswordError("");
      }
      if (errorMessage.includes("Email or Username are already taken")) {
        setEmailError("البريد الالكتروني او اسم المستخدم موجود بالفعل");
        setUsernameError("البريد الالكتروني او اسم المستخدم موجود بالفعل");
      } else {
        setEmailError("");
        setUsernameError("");
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
    e.preventDefault();
    addUser_(formData);
  };
  return (
    <section className="register-page bg-[#121318] fixed w-screen h-screen z-[10000] ">
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
                  {` اسم المستخدم ( اللقب )`}
                  <span className="mr-4 text-red-700">{usernameError}</span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className={
                    usernameError ===
                    "البريد الالكتروني او اسم المستخدم موجود بالفعل"
                      ? `mt-1 py-3 px-2 w-full rounded-md  border-red-700 border border-solid bg-white text-sm text-gray-700 shadow-sm   dark:bg-gray-800 dark:text-gray-200`
                      : `mt-1 py-3 px-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`
                  }
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {`البريد الالكتروني`}
                  <span className="mr-6 text-red-700">{emailError}</span>
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={
                    emailError ===
                    "البريد الالكتروني او اسم المستخدم موجود بالفعل"
                      ? `mt-1 py-3 px-2 w-full rounded-md  border-red-700 border border-solid bg-white text-sm text-gray-700 shadow-sm   dark:bg-gray-800 dark:text-gray-200`
                      : `mt-1 py-3 px-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`
                  }
                />
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  كلمة السر
                  <span className="mr-6 text-red-700">{passwordError}</span>
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={
                    passwordError === "كلمة السر يجب ان لا تنقص عن 6 احرف"
                      ? `mt-1 py-3 px-2 w-full rounded-md  border-red-700 border border-solid bg-white text-sm text-gray-700 shadow-sm   dark:bg-gray-800 dark:text-gray-200`
                      : `mt-1 py-3 px-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200`
                  }
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                {submitting ? (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex shrink-0 opacity-50 rounded-md border border-[#621F9F] bg-[#621F9F] px-12 py-3 text-sm font-medium text-white transition  hover:text-[#621F9F] focus:outline-none hover:bg-[#54198b] dark:hover:text-white"
                  >
                    جاري انشاء الحساب
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
                    انشاء الحساب
                  </button>
                )}

                <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                  لديك حساب بالفعل؟
                  <Link
                    href="/login"
                    className="text-gray-700 underline mr-4 dark:text-gray-200"
                  >
                    تسجيل الدخول
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default RegisterPage;
