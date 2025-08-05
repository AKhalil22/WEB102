// Import: Functionality
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import: Pages
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailPage from "./pages/PostDetailPage";

// Import: CSS
import './App.css'

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/create" element={<CreatePostPage/>}/>
            <Route path="/read/:id" element={<PostDetailPage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;