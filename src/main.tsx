import React from 'react'; 
import { Toaster } from 'sonner';
import ReactDOM from 'react-dom/client';
// import { TodoApp } from './11-todo-app/TodoApp';
// import { App } from './App.tsx';
// import { Counter } from './01-use-state/Counter';
// import { CounterWithHook } from './01-use-state/CounterWithHook';
// import { SimpleForm } from './02-use-effect/SimpleForm';
// import { SimpleFormWithHook } from './02-use-effect/SimpleFormWithHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-use-ref/FocusScreen';
// import { Layout } from './05-use-layout-effect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './07-use-memo/MemoHook';
// import { CallbackHook } from './08-use-callback/CallbackHook';
// import { InstagramApp } from './12-use-optimistic/InstagramApp';
import { ClientInformation } from './13-use-suspense/ClientInformation';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Toaster />
        <ClientInformation />
    </React.StrictMode>,
)
