import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Section.css'

function Section(props) {
  return (
    <div className='section'>
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <Link to={`/sections/${props.id}`} className='btn-link'>Section Details</Link>
    </div>
  )
}

export default Section