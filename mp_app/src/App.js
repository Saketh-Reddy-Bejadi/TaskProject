import React from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import "./App.css"

export const App = () => {


  return (
    <div >
      <Header/>
      <TaskList/>
      <Footer/>
    </div>
  )
  
}
