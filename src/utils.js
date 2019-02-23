export const findAge = dateStr => {
  var today = new Date();
  var birthDate = new Date(dateStr);
  var age = today.getFullYear() - birthDate.getFullYear();

  return age;
};
