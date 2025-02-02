import React from 'react';
import './App.css';
import './index.css';
import TodoList from './components/TodoList.js';
import PomodoroTimer from './components/PomodoroTimer.js';
import TabOrganizer from './components/TabOrganizer.js';

function App() {
  return (
    <div>
      <h1>Productivity Extension</h1>
      <TodoList />
      <PomodoroTimer />
      <TabOrganizer />
    </div>
  );
}

export default App;