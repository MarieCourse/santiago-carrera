import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/main.sass';
// import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <AppRouter />
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>
);
