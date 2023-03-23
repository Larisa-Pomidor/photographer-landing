import React from 'react'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Portfolio from './components/Portfolio.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => (
  <Router>
    <header>
      <Header />
    </header>

    <main>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    <footer>
      <Footer />
    </footer>
  </Router>
);

export default App;
