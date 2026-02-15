export const validateForm = (data) => {
  const errors = {};
  if (data.name.length < 3) errors.name = "Min 3 characters";
  if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = "Invalid email";
  if (!/^\d{10}$/.test(data.phone)) errors.phone = "Phone must be 10 digits";
  if (!data.session) errors.session = "Select session";
  return errors;
};
