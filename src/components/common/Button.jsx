import React from "react";

function Button({ text }) {
  return (
    <button className="bg-primary-btnColor hover:bg-yellow-500 text-white font-robotoSlab rounded py-2 px-4 transition duration-300 ease-in-out">
      {text}
    </button>
  );
}

export default Button;
