import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Tasks/Home';       
import Counter from './Tasks/Counter';  
import Todo from './Tasks/Todo';        
import ShowHide from './Tasks/ShowHide'; 

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/show-hide" element={<ShowHide />} />
      </Routes>
    </Router>
  );
}

export default App;
