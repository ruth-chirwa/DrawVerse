import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';

import HomePage from './components/Home';
import AboutPage from './components/About';


function App() {
  return (
    <>
      <Router> {/*creates url paths from components*/}
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<div>Gallery</div>} />
          </Routes>
        </div>
      </Router>

      <div>
        <h1>Hello</h1>
        <Link to="/navigate">Go here</Link> {/*advanced version of a tag*/}
      </div>
    </>
  )
}

export default App
