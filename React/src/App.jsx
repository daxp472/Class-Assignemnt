import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Nav from './Components/Nav';
import Counter from './Tasks/Counter';
import TodoList from './Tasks/Todo';
import ShowHide from './Tasks/ShowHide';
import CharacterCount from './Tasks/CharacterCount';
import Search from './Tasks/Search';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<h2>Welcome to the React App!</h2>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/show-hide" element={<ShowHide />} />
        <Route path="/character-count" element={<CharacterCount />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
