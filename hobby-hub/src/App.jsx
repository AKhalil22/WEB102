// Import: Functionality
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import: Components
import Navbar from './components/NavBar';

// Import: Pages
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailPage from "./pages/PostDetailPage";
import EditPostPage from "./pages/EditPostPage";

// Import: CSS
import './App.css'

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Navbar/>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/create" element={<CreatePostPage/>}/>
            <Route path="/read" element={<PostDetailPage/>}/>
            <Route path="/post/:id" element={<EditPostPage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;