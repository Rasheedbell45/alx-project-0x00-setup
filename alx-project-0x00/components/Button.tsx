import React from "@interfaces/index.tsx";

const Button = ({ title, styles }) => {
  return (
    <button className={`px-4 py-2 font-semibold text-white bg-blue-600 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
