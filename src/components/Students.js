import React, { useState, useEffect } from 'react';
import { fetchSectionStudents } from '../api/api';
import Student from './Student';
import './styles/Students.css'

function Students(props) {
  console.log(props, 'props')
  const [students, setStudents] = useState([]);
    const fetchStudents = () => {
      fetchSectionStudents(props.id)
        .then(res => setStudents(res.data))
        .catch(err => console.error(err || "Error fetch students"))
    }
  
    useEffect(() => {
      if(props.id) {
        fetchStudents();
      }
    }, [props.id]);

  return (
    <div className='students-container'>
      {students.map(student => <Student key={student.id} name={student.name} id={student.id} />)}
    </div>
  )
}

export default Students