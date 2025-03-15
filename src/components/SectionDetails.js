import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addSelectedStudent, fetchSectionById, removeAllSelectedStudents } from '../api/api';
import StudentDropdown from './StudentDropdown';
import Students from './Students';
import './styles/SectionDetails.css'
import StudentContext from '../context/StudentContext';

function SectionDetails() {
  const { id } = useParams();
  const [sectionData, setSectionData] = useState({});
  const { studentsToRemove } = useContext(StudentContext);

  const [selectedStudentId, setSelectedStudentId] = useState();

  const sectionStudentIds = sectionData?.students?.map(s => s.id);

  const fetchSection = () => {
    fetchSectionById(id)
        .then(response => setSectionData(response.data))
        .catch(err => console.error(err || "Error fetching section details"))
  }

  const handleAddSelectedStudent = async () => {
    try {
        if(!sectionStudentIds.includes(Number(selectedStudentId))) {
          await addSelectedStudent(id, selectedStudentId);
          fetchSection();
        } else {
          alert("Student already added to the section");
        }

    } catch(error) {
        console.error(error || "Error adding a student to the section")
    }
  }

  const handleRemoveStudents = async () => {
    try {
      await removeAllSelectedStudents(sectionData.id, studentsToRemove);
    } catch(err) {
      console.error("Error removing selected students")
    }
  }

  useEffect(() => {
    if(id) {
      fetchSection();
    }
  },[id])

  return (
    <div className='section-details'>
      <h3>SectionDetails</h3>
      <p>ID: {sectionData.id}</p>
      <p>Name: {sectionData.name}</p>
      <p>Term: {sectionData.term}</p>
      <p>Academic Year: {sectionData.academicYear}</p>

      <h4>Roster</h4>
      <Students id={sectionData.id} />

      <div className='footer'>
          <button 
            disabled={studentsToRemove.length === 0} 
            onClick={handleRemoveStudents}>Remove Selected</button>
          <div>
            <StudentDropdown 
              selectedStudentId={selectedStudentId} 
              setSelectedStudentId={setSelectedStudentId} /> 
            <button 
              onClick={handleAddSelectedStudent} 
              disabled={!selectedStudentId}>
                Add
            </button>
          </div>
          <Link className='btn-link' to="/sections">Back</Link>
      </div>
    </div>
  )
}

export default SectionDetails