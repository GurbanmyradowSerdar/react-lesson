import { useState } from "react";

export default function FormComponent() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleFormChange(e, key) {
    setForm({
      ...form,
      [key]: e.target.value,
    });
  }

  return (
    <form action="#">
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => handleFormChange(e, "firstName")}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => handleFormChange(e, "lastName")}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => handleFormChange(e, "email")}
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </form>
  );
}
