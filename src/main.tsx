// import React from 'react'; 
import ReactDOM from 'react-dom/client';
// import { App } from './App.tsx';
// import { Counter } from './01-use-state/Counter';
// import { CounterWithHook } from './01-use-state/CounterWithHook';
// import { SimpleForm } from './02-use-effect/SimpleForm';
// import { SimpleFormWithHook } from './02-use-effect/SimpleFormWithHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-use-ref/FocusScreen';
// import { Layout } from './05-use-layout-effect/Layout';
import { Memorize } from './06-memos/Memorize';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Memorize />
  // </React.StrictMode>,
)
