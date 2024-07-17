import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App.tsx';
import { Counter } from './01-use-state/Counter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
)
