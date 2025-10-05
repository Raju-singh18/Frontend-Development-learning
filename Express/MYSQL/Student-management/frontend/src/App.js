import { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const API = "http://localhost:5000/students";

  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (student) => {
    await axios.post(API, student);
    fetchStudents();
  };

  const updateStudent = async (id, student) => {
    await axios.put(`${API}/${id}`, student);
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchStudents();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">🎓 Student Management System</h1>
      <StudentForm onAdd={addStudent} />
      <StudentList students={students} onUpdate={updateStudent} onDelete={deleteStudent} />
    </div>
  );
}

export default App;
