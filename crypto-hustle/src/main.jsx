import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Layout from "./routes/Layout"
import DetailView from './routes/DetailView'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />}/>
          <Route path="/coinDetails/:symbol" element={<DetailView />}/>
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
                <Link style={{ color: "white" }} to="/">
                  Back to Home
                </Link>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
