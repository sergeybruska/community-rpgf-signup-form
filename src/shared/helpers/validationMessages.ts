export const validationMessage = {
  required: 'Required field',
  invalidWithFormat: 'Invalid width format',
  invalidShortPassword: 'The password must contain at least 8 characters',
  invalidEmail: 'Enter a valid email address',
  invalidUrl: 'Enter the correct link',
  noEmptyCategory: 'Category must have at least one item',
};

export const validationRegEx = {
  price: /^(?!-)-?(?!0\d)\d+(?:\.\d{1,2})?$/,
  emailFormat: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
};
