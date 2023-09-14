import validator from 'validator';

const innerText = document.querySelector('#input-text');
const submitButton = document.querySelector('#submitButton');
const validationResult = document.querySelector('#validation-result');

const validationFunctions = {
  email: validator.isEmail,
  password: validator.isStrongPassword,
  phone: validator.isMobilePhone,
  creditCard: validator.isCreditCard,
  date: validator.isDate,
};

submitButton.addEventListener('click', () => {
  const validatorType = document.querySelector('#validation-type').value;

  if (validationFunctions.hasOwnProperty(validatorType)) {
    const validationFunction = validationFunctions[validatorType];
    const isValid = validationFunction(innerText.value);

    if (isValid) {
      validationResult.innerText = `Esse ${validatorType} é válido`;
    } else {
      validationResult.innerText = `Esse ${validatorType} é inválido`;
    }
  } else {
    validationResult.innerText = 'Opção de validação inválida';
  }
});

submitButton.addEventListener('click', () => {
console.log("Hello Word");
});
