export const passwordPattern =
  /^(?!.*[;|&%=+\-<>\\])((?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])|(?=.*\d)(?=.*[^a-zA-Z0-9]))[a-zA-Z\d!@#$*_?]+$/;

export const phoneNumberPattern = /^(010)([0-9]){4}([0-9]){4}/;

export const phoneNumberMaxPattern = /^\d{11}$/;

export const certiNumberPattern = /^\d{6}$/;
