import React, { useState } from 'react';
import './App.css';

const initialStudents = [
  { id: 1, name: 'Ravi', present: true },
  { id: 2, name: 'Khushi', present: false },
  { id: 3, name: 'Aman', present: true },
  { id: 4, name: 'Divya', present: false },
  { id: 5, name: 'Neha', present: true },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState('All');

  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  const getFilteredStudents = () => {
    if (filter === 'Present') return students.filter((s) => s.present);
    if (filter === 'Absent') return students.filter((s) => !s.present);
    return students;
  };

  const presentCount = students.filter((s) => s.present).length;

  return (
    <div className="App">
      <h2>Attendance Manager</h2>

      <div className="filter">
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      <ul className="student-list">
        {getFilteredStudents().map((student) => (
          <li
            key={student.id}
            className={student.present ? 'present' : 'absent'}
          >
            {student.name} - {student.present ? 'Present' : 'Absent'}
            <button onClick={() => toggleAttendance(student.id)}>Toggle</button>
          </li>
        ))}
      </ul>

      <h3>Total Present: {presentCount}</h3>
    </div>
  );
}

export default App;
