import { useState } from 'react';
import AnimatedGif from './components/animatedGif';
import Login from './pages/Login';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './pages/Quiz';
import Score from './pages/Score';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login/>}></Route>
        <Route path="/Quiz" element={<Quiz/>}></Route>
        <Route path='/Score' element={<Score/>}> </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
