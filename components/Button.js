import React from "react";
import classNames from "classnames";

const Button = React.forwardRef((props, ref) => {
  const {
    as = "button",
    children,
    color = "white",
    icon = null,
    ...rest
  } = props;

  const Icon = icon;
  const Element = as;

  const buttonClasses = classNames(
    {
      ["bg-white border-gray-200 text-gray-900"]: color == "white",
      ["bg-blue-500 border-blue-600 text-white"]: color == "blue",
    },
    "border rounded-lg text-base font-semibold inline-flex py-3 px-4 shadow space-x-2 items-center"
  );
  return (
    <Element ref={ref} className={buttonClasses} {...rest}>
      {Icon ? (
        <>
          <Icon className="text-2xl" />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </Element>
  );
});

export default Button;
