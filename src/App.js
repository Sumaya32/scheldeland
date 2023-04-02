import React from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom'
import './App.css';
import { Dishes, Dish } from './gerechten/';
import { About } from './about/About'
import { Home } from './home/Home'
import { Contact } from './contact/Contact'

function App() {
  return (
  <Routes>
        <Route exact element={<Dish/>} path="/gerecht/:id"/>
    <Route element={<Home/>} path="/"/>
    <Route element={<Dishes/>} path="/menu"/>

    <Route element={<About/>} path="/about"/>
    <Route element={<Contact/>} path="/contact"/>
  </Routes>
  );
}

export default App;
