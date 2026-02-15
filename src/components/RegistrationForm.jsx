import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRegistration } from "../features/registrations/registrationThunks";
import { validateForm } from "../utils/validation";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    session: "",
    type: "Online"
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length) return setErrors(errs);

    dispatch(addRegistration(form));
    setForm({ name: "", email: "", phone: "", session: "", type: "Online" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      {errors.name && <p>{errors.name}</p>}

      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}

      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      {errors.phone && <p>{errors.phone}</p>}

      <select name="session" value={form.session} onChange={handleChange}>
        <option value="">Select Session</option>
        <option value="React">React</option>
        <option value="Redux">Redux</option>
        <option value="Node">Node</option>
      </select>
      {errors.session && <p>{errors.session}</p>}

      <select name="type" value={form.type} onChange={handleChange}>
        <option>Online</option>
        <option>Offline</option>
      </select>

      <button type="submit">Add Registration</button>
    </form>
  );
}
