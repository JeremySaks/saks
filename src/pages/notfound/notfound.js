import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Title from 'react-document-title';

const NotFound = () => <Title title='404 · Jeremy Saks'>
  <main id='notfound'>
    <Header/>
    <Footer/>
  </main>
</Title>;

export default NotFound;