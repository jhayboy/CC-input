import React from "react";

export default function Succsess() {
  return (
    <div className="mt-[100px] px-5 flex flex-col justify-center items-center lg:grid-cols-2 lg:mr-52 lg:mb-5">
      <div className="bg-Correct w-[80px] h-[80px]"></div>
      <h2 className="text-lg font-bold py-5 tracking-wider">THANK YOU!</h2>
      <p className="font-bold pb-5 text-gray-500 tracking-wider">
        We've added your card details
      </p>
      <form className="w-full flex justify-center items-center">
        <button
          type="submit"
          className="font-bold text-white lg:w-[375px] lg:py-3 text-lg bg-purple-800 w-full py-2 lg:pr-4 rounded-lg"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
