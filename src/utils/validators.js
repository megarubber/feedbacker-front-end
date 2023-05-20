export function validateEmptyAndLength3(value) {
  if(!value) {
    return 'This field is required!';
  }

  if(value.length < 3) {
    return 'This field requires at least 3 characters.';
  }

  return true;
}

export function validateEmptyAndEmail(value) {
  if(!value) {
    return 'This field is required!';
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value);
  if(!isValid) {
    return 'Invalid e-mail.';
  }

  return true;
}