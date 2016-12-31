import React from 'react';
import lifecycle from 'recompose/lifecycle.js';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Title from 'react-document-title';

const text = `
  I'm a full stack web and mobile application developer in New York City. 
  I build graceful, scalable and performant systems for founders, startups and growth companies.
  I love working with free thinkers, innovators and iconoclasts. If you're interested, drop me a line!
`;

const quote = `"Many a false step was made by standing still."`;

const Home = () => <Title title='Jeremy Saks'>
  <main id='home'
    itemScope
    itemType='http://schema.org/ProfilePage'>
    <Header/>
    <Splash/>
    <Footer/>
  </main>
</Title>;

const live = lifecycle({
  componentDidMount(){
    const {splash} = this.refs;
    setTimeout(() => splash.classList.add('arrived'), 0);
  }
});

const Splash = live(() => <section
  id='splash'
  className='composition'
  ref='splash'
  itemProp='mainContentOfPage'>
  <hgroup>
    <h1 itemProp='name'>jeremy saks</h1>
    <h3 itemProp='description'>Web & Mobile Developer, New York, New York</h3>
  </hgroup>
  <p className='major' itemProp='about'>{text}</p>
  <p className='minor'>{quote}</p>
</section>);

export default Home;