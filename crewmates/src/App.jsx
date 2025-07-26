import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar';

import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import SummaryPage from "./pages/SummaryPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";

import './App.css'

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Navbar/>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<CreatePage/>}/>
            <Route path="/read" element={<SummaryPage/>}/>
            <Route path="/detail/:id" element={<DetailPage/>}/>
            <Route path="/update/:id/edit" element={<EditPage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;