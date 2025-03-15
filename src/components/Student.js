import React, { useContext } from 'react';
import './styles/Student.css';
import { StudentContext } from '../context/StudentContext'

function Student(props) {
  const { studentsToRemove, setStudentsToRemove } = useContext(StudentContext);
  console.log(studentsToRemove, "STUDNTE");

  const handleCheckBoxToggle = (e) => {
    if(studentsToRemove.includes(props.id)) {
      const filteredList = studentsToRemove.filter(s => s !== props.id)
      setStudentsToRemove(filteredList);
    } else {
      setStudentsToRemove([...studentsToRemove, props.id ]);
    }
  }

  return (
    <div className='student-card'>
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <input type="checkbox" onChange={handleCheckBoxToggle}/>
    </div>
  )
}

export default Student