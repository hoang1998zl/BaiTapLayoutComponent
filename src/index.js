import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <div className='container py-5'>
      <div className='row'>
        <Main />
      </div>
    </div>
    <Footer />
  </>
);