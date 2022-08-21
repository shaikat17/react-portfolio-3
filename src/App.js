import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/home/header/Header';
import HomePages from "./components/pageContent/HomePages";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
