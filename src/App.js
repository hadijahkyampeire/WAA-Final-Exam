import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PageRoutes from './PageRoutes';
import { StudentContextProvider } from './context/StudentContext';

function App() {
  return (
    <BrowserRouter>
      <StudentContextProvider>
        <div className="App">
          <h1>WAA 2nd Exam</h1>
          <PageRoutes />
        </div>
      </StudentContextProvider>
    </BrowserRouter>
  );
}

export default App;
