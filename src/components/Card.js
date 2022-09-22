import React, { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import Validation from "./Validation";
import Success from "./Success";

export default function Card() {
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  });

  const submitForm = () => [setFormSubmit(true)];

  const [formSubmit, setFormSubmit] = useState(false);

  // preventing form from submitting
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
  };

  // if the data is correct let the form submit if not let it remain in form

  // set value useState
  const [values, setValues] = useState({
    cardname: "",
    cardnumber: "",
    expmonth: "",
    expyear: "",
    cardpin: "",
  });

  const [errors, setErrors] = useState({});

  // when the user changes any value it keeps track of it
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  // setting from to true
  // usestate fro setting form to true or false

  return (
    <div className="max-width-[375px] flex justify-center items-center flex-col lg:grid lg:grid-cols-2">
      <div>
        <div className="bg-MobileBg lg:bg-DesktopBg lg:h-[100vh] w-[375px] h-[242px] relative">
          <div className="bg-CardBack lg:h-[210px] lg:w-[340px] shadow-2xl shadow-gray-900/60 w-[300px] px-2 h-[170px] rounded-lg absolute lg:top-[410px] lg:left-[230px] top-[50px] right-3">
            <h6 className="flex mt-10 w-full justify-end text-white">
              {!values.cardpin ? "000" : values.cardpin}
            </h6>
          </div>
          <div className="bg-CardFront w-[300px] h-[170px] lg:h-[210px] lg:w-[340px] rounded-lg absolute top-[120px] lg:top-[170px] left-3 lg:left-[170px] shadow-2xl shadow-gray-900/60">
            <div className="flex flex-col p-4 h-full w-full justify-between">
              <div className="flex items-center">
                <div className="w-[25px] h-[25px] bg-white border rounded-full"></div>
                <div className="w-[13px] h-[13px] bg-transparent border ml-2 rounded-full border-white"></div>
              </div>
              <div className="text-white">
                <p className="mb-3 text-xl tracking-widest">
                  {!values.cardnumber
                    ? "0000 0000 0000 0000"
                    : values.cardnumber}
                </p>
                <div className="flex justify-between">
                  <p className="text-sm">
                    {!values.cardname ? "JANE APPLESEED" : values.cardname}
                  </p>
                  <p className="text-sm">
                    {!values.expmonth ? "00" : values.expmonth}/
                    {!values.expyear ? "00" : values.expyear}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!formSubmit ? (
        <CardInfo
          handleChange={handleChange}
          values={values}
          errors={errors}
          handleFormSubmit={handleFormSubmit}
        />
      ) : (
        <Success />
      )}
    </div>
  );
}
