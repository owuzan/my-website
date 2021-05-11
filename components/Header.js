import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlinePencil,
  HiOutlinePresentationChartLine,
  HiOutlineLink,
  HiMail,
  HiOutlineSun,
} from "react-icons/hi";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Button from "./Button";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const menus = [
    {
      name: "Ana Sayfa",
      url: "/",
      icon: <HiOutlineHome className="h-6 w-6" />,
    },
    {
      name: "Hakkımda",
      url: "/hakkimda",
      icon: <HiOutlineUser className="h-6 w-6" />,
    },
    {
      name: "Blog",
      url: "/blog",
      icon: <HiOutlinePencil className="h-6 w-6" />,
    },
    {
      name: "Projeler",
      url: "/projeler",
      icon: <HiOutlinePresentationChartLine className="h-6 w-6" />,
    },
    {
      name: "Faydalı Bağlantılar",
      url: "/faydali-baglantilar",
      icon: <HiOutlineLink className="h-6 w-6" />,
    },
  ];
  const social = [
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/owuzan_",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/owuzan",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/owuzan",
    },
    {
      icon: <HiMail />,
      url: "mailto:ooguzhanyilmazz41@gmail.com",
    },
  ];

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(localStorage.theme);
  }, []);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.theme = "light";
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(() => {
      return theme == "dark" ? "light" : "dark";
    });
  };

  return (
    <header className="bg-gray-50 dark:bg-black transition">
      <div className="flex flex-col space-y-8 py-9 px-4 container mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <figure className="h-16 w-16">
              <img
                src="/avatar.png"
                alt="Oğuzhan Yılmaz"
                className="object-cover rounded-full"
              />
            </figure>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 transition">
              Oğuzhan Yılmaz
            </h2>
          </div>
          {/* Social */}
          <div className="flex items-center space-x-4 text-2xl">
            {social.map((item, index) => {
              return (
                <Link key={index} href={item.url}>
                  <a
                    target="_blank"
                    className="w-12 h-12 rounded-lg border border-gray-200 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800 shadow flex items-center justify-center transition"
                  >
                    {item.icon}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <nav className="flex space-x-4 items-center font-semibold text-gray-500">
            {menus.map((item, index) => {
              return (
                <Link key={index} href={item.url}>
                  <a
                    className={`flex items-center space-x-2 py-3 px-4 transition ${
                      router.route == item.url
                        ? "text-gray-900 dark:text-gray-100 "
                        : ""
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                </Link>
              );
            })}
          </nav>
          {/* Actions */}
          <div>
            <Button icon={HiOutlineSun} onClick={changeTheme}>
              Temayı değiştir
            </Button>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500"></div>
    </header>
  );
}
