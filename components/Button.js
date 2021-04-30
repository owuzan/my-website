import React from "react";

export default function Button({ children, Icon = null }) {
  return (
    <button className="bg-white border border-gray-200 rounded-lg text-base font-semibold text-gray-900 inline-flex py-3 px-4 shadow space-x-2 items-center">
      {Icon ? (
        <>
          <Icon className="text-2xl" />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
