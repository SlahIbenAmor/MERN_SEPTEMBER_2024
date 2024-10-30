import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="container">
      <h1 className='text-center fs-1'>Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<Navigate replace to="/authors" />} />
        <Route path="/authors" element={<Dashboard />} />
        <Route path="/authors/new" element={<Create />} />
        <Route path="/authors/:id/edit" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
