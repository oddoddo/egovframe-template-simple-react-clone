import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { worker } from 'mocks/browser';

// 개발 환경에서만 worker를 시작합니다.
if (process.env.NODE_ENV === 'development') {
    worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
