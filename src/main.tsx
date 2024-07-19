// import React from 'react'; 
import ReactDOM from 'react-dom/client';
// import { App } from './App.tsx';
// import { Counter } from './01-use-state/Counter';
// import { CounterWithHook } from './01-use-state/CounterWithHook';
// import { SimpleForm } from './02-use-effect/SimpleForm';
import { SimpleFormWithHook } from './02-use-effect/SimpleFormWithHook';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <SimpleFormWithHook />
  // </React.StrictMode>,
)
