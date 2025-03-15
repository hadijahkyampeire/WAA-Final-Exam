import React, { useEffect, useState } from 'react'
import { fetchAllStudents } from '../api/api';

function StudentDropdown({ selectedStudentId,setSelectedStudentId }) {
  const [students, setStudents] = useState([]);
  
  const fetchStudents = () => {
    fetchAllStudents()
      .then(res => setStudents(res.data))
      .catch(err => console.error(err || "Error fetch students"))
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  const selectOptions = students?.map(s => ({ label: s.name, value: s.id })) || [];

  return (
    <select value={selectedStudentId} onChange={(e) => setSelectedStudentId(e.target.value)}>
      <option value="">Select a student</option>
      {selectOptions?.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  )
}

export default StudentDropdown