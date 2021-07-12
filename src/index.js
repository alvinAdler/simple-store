import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <svg style={{position: "absolute", top: 0, right: 0, left: 0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dbdad5" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,202.7C480,192,600,128,720,85.3C840,43,960,21,1080,37.3C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <App />
    <svg style={{position: "relative", bottom: 0, right: 0, left: 0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dbdad5" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,202.7C480,192,600,128,720,85.3C840,43,960,21,1080,37.3C1200,53,1320,107,1380,133.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
