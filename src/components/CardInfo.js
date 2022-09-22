import React from "react";
import Cleave from "cleave.js/react";

export default function CardInfo({
  handleChange,
  values,
  errors,
  handleFormSubmit,
}) {
  return (
    <form className="mt-[80px] w-full font-bold px-7 truncate lg:flex lg:flex-col lg:justify-center lg:w-[370px]">
      <div className="flex flex-col lg:w-full">
        <label>CARDHOLDER NAME</label>
        <input
          className="focus:outline-none p-2 border rounded-md border-gray-400"
          type="text"
          name="cardname"
          maxLength="32"
          onChange={handleChange}
          value={values.cardname}
          placeholder="e.g. Jane Appleseed"
        />
      </div>
      {errors.cardname && (
        <p className="error text-red-600">{errors.cardname}</p>
      )}
      <div className="flex flex-col mt-4 lg:w-full">
        <label>CARD NUMBER</label>
        <Cleave
          className="input focus:outline-none p-2 border rounded-md border-gray-400"
          options={{ creditCard: true, blocks: [4] }}
          name="cardnumber"
          onChange={handleChange}
          value={values.cardnumber}
          placeholder="e.g. 1234 5678 9123 000"
        />
      </div>
      {errors.cardnumber && (
        <p className="error text-red-600">{errors.cardnumber}</p>
      )}
      <div className="flex mt-4 justify-between lg:grid lg:grid-cols-2">
        <div className="">
          <label>EXP. DATE (MM/YY)</label>
          <div className="flex gap-1">
            <div>
              <Cleave
                className="input focus:outline-none p-2 border rounded-md border-gray-400 w-[75px]"
                placeholder="MM"
                options={{ date: true, datePattern: ["m"] }}
                value={values.expmonth}
                onChange={handleChange}
                name="expmonth"
              />
              {errors.expmonth && (
                <p className="error text-red-600">{errors.expmonth}</p>
              )}
            </div>

            <div>
              <input
                className="focus:outline-none p-2 border rounded-md border-gray-400 w-[75px]"
                type="text"
                maxLength="2"
                placeholder="YY"
                onChange={handleChange}
                name="expyear"
              />
              {errors.expyear && (
                <p className="error text-red-600">{errors.expyear}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:ml-3">
          <label>CVC</label>
          <input
            className="focus:outline-none p-2 border rounded-md border-gray-400 w-[160px] lg:w-[142px]"
            type="text"
            maxLength="4"
            placeholder="e.g. 123"
            onChange={handleChange}
            name="cardpin"
          />
          {errors.cardpin && (
            <p className="error text-red-600">{errors.cardpin}</p>
          )}
        </div>
      </div>

      <button
        className="w-full flex text-white justify-center items-center bg-purple-800 p-2 mt-5 rounded-lg"
        type="submit"
        onClick={handleFormSubmit}
      >
        Confirm
      </button>
    </form>
  );
}
