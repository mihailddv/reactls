const regexpString = /^[a-z]+$/i;
const regexpCvv = /[0-9]{3}/;
const regexpCardNumber = /[0-9]{8}/;

const validateName = value => value && regexpString.test(value);
const validateCvv = value => value && value.length === 3 && regexpCvv.test(value);
const validateNumber = value => value && value.length === 8 && regexpCardNumber.test(value);

const mapMessageInvalid = {
  cvv: "CVV состоит из 3 цифр",
  cardName: "Только буквы латинского алфавита",
  cardNumber: "Номер карты должен состоять из 8 цифр"
};

const mapValidator = {
  cardName: validateName,
  cardNumber: validateNumber,
  cvv: validateCvv,
  expDate: () => {
  }
};

export const myValidator = (values) => {
  const errors = {};
  const errorEmptyMessage = "Это обязательное поле";
  Object.keys(mapValidator).forEach((item) => {
    const value = values[item];
    if (!mapValidator[item](value)) {
      errors[item] = mapMessageInvalid[item];
    }
    if (!value) {
      errors[item] = errorEmptyMessage;
    }
  });
  return errors;
};