import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from "./components/home/Footer";
import Header from './components/home/header/Header';
import HomePages from "./components/pageContent/HomePages";
import Pages from "./components/pages/Pages";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/pages" element={<Pages />} />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
