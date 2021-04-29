import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex flex-col space-y-8 py-9 container mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <figure className="h-16 w-16">
              <img
                src="/avatar.png"
                alt="Oğuzhan Yılmaz"
                className="object-cover rounded-full"
              />
            </figure>
            <h2 className="text-3xl font-bold">Oğuzhan Yılmaz</h2>
          </div>
          <div>2</div>
        </div>
        <div>navbar</div>
      </div>
      <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500"></div>
    </header>
  );
}
