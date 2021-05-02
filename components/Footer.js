import React from "react";
import Link from "next/link";
import { HiHeart } from "react-icons/hi";

export default function Footer() {
  return (
    <div className="bg-white border-t border-gray-200 py-6">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center font-semibold text-gray-900">
          <Link href="mailto:mail@oguzhan.dev">
            <a target="_blank">mail@oguzhan.dev</a>
          </Link>
          <p className="flex items-center space-x-2">
            <span>Bu blog</span>
            <HiHeart className="text-red-500 text-xl" />
            <span>ile açık kaynak olarak kodlandı.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
