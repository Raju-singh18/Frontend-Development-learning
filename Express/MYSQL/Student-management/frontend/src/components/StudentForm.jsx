
import { useState } from "react";

export default function StudentForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", age: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.email) return;
    onAdd(form);
    setForm({ name: "", age: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Name"
        className="border p-2 flex-1 rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        className="border p-2 w-20 rounded"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 flex-1 rounded"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
