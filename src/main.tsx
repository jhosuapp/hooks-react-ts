import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App.tsx';
// import { Counter } from './01-use-state/Counter';
import { CounterWithHook } from './01-use-state/CounterWithHook';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterWithHook />
  </React.StrictMode>,
)
