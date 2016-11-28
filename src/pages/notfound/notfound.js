import React from 'react';
import {Link} from 'react-router';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Title from 'react-document-title';

const NotFound = () => <Title title='404 · Jeremy Saks'>
  <main id='notfound'>
    <Header/>
    <section
      id='fourofour'
      className='composition'>
      <hgroup>
        <h1>404</h1>
        <h3>Sorry, the page you requested was not found.</h3>
      </hgroup>
      <p className='minor'>
        <Link to='/'>Home</Link>
      </p>
    </section>
    <Footer/>
  </main>
</Title>;

export default NotFound;