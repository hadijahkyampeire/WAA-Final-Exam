import React, { createContext, useState } from 'react'

export const StudentContext = createContext();

export const StudentContextProvider = ({ children }) => {
  const [studentsToRemove, setStudentsToRemove] = useState([]);
  return (
    <StudentContext.Provider value={{ studentsToRemove, setStudentsToRemove }}>
      {children}
    </StudentContext.Provider>
  )
}

export default StudentContext