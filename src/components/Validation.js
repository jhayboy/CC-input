const Validation = (values) => {
  let errors = {};

  if (!values.cardname) {
    errors.cardname = "Card holder name required.";
  }
  if (!values.cardnumber) {
    errors.cardnumber = "Card number is required";
  } else if (values.cardnumber.length < 16) {
    errors.cardnumber = "Invalid card number";
  }
  if (!values.expmonth) {
    errors.expmonth = "MM";
  }
  if (!values.expyear) {
    errors.expyear = "YY";
  }
  if (!values.cardpin) {
    errors.cardpin = "Invalid cvv";
  }

  return errors;
};
export default Validation;
