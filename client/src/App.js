import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LibraryPage from './LibraryPage';
import Info from './Info';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LibraryPage />} />
          <Route path="/book/:id" element={<Info/>} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
