import React, { useEffect, useState } from 'react'
import { fetchAllSections } from '../api/api';
import Section from './Section';
import './styles/Sections.css'

function Sections() {
  const [sectionsData, setSectionsData] = useState([]);

  const fetchSections = () => {
    fetchAllSections()
      .then(response => setSectionsData(response.data))
      .catch(error => console.error(error || "Error fetching sections"));
  }

  useEffect(() => {
    fetchSections();
  }, []);

  return (
    <div className='sections'>
      <h3>Sections</h3>
      {sectionsData.length > 0 ? (
        <div>
          {sectionsData.map(section => <Section key={section.id} id={section.id} name={section.name} />)}
        </div>
      ): <p>No sections found</p>}
    </div>
  )
}

export default Sections