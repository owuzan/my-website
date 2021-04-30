import React from "react";
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

export default function Header() {
  const menus = [
    {
      name: "Ana Sayfa",
      url: "/",
      icon: <HiOutlineHome />,
    },
    {
      name: "Hakkımda",
      url: "/hakkimda",
      icon: <HiOutlineUser />,
    },
    {
      name: "Blog",
      url: "/blog",
      icon: <HiOutlinePencil />,
    },
    {
      name: "Projeler",
      url: "/projeler",
      icon: <HiOutlinePresentationChartLine />,
    },
    {
      name: "Faydalı Bağlantılar",
      url: "/faydali-baglantilar",
      icon: <HiOutlineLink />,
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
  return (
    <header>
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
            <h2 className="text-3xl font-bold text-gray-900">Oğuzhan Yılmaz</h2>
          </div>
          {/* Social */}
          <div className="flex items-center space-x-4 text-2xl">
            {social.map((item, index) => {
              return (
                <Link key={index} href={item.url}>
                  <a
                    target="_blank"
                    className="w-12 h-12 rounded-lg border border-gray-200 bg-white text-gray-900 shadow flex items-center justify-center"
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
                  <a className="flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                </Link>
              );
            })}
          </nav>
          {/* Actions */}
          <div>
            <Button Icon={HiOutlineSun}>Temayı değiştir</Button>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500"></div>
    </header>
  );
}
