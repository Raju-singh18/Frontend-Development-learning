
import { useState } from "react";

export default function StudentList({ students, onUpdate, onDelete }) {
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", age: "", email: "" });

  const handleEdit = (student) => {
    setEditId(student.id);
    setForm(student);
  };

  const handleUpdate = () => {
    onUpdate(editId, form);
    setEditId(null);
  };

  return (
    <div className="space-y-2">
      {students.map((s) => (
        <div key={s.id} className="flex items-center justify-between border p-2 rounded">
          {editId === s.id ? (
            <>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border p-1 mr-2"
              />
              <input
                type="number"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="border p-1 mr-2 w-16"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border p-1 mr-2"
              />
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditId(null)}
                className="bg-gray-400 text-white px-2 py-1 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span>{s.name} ({s.age}) - {s.email}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(s)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(s.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
