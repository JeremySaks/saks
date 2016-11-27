import React from 'react';
import lifecycle from 'recompose/lifecycle.js';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Title from 'react-document-title';

const text = `
  I'm a full stack web and mobile application developer in New York City. 
  I specialize in modern apps for founders, startups and growth companies seeking graceful, scalable and performant systems. 
  I work with builders, free thinkers and iconoclasts.
`;
const quote = `"Many a false step was made by standing still."`;

const Home = () => <Title title='Jeremy Saks'>
  <main id='home'>
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
  ref='splash'>
  <hgroup>
    <h1>jeremy saks</h1>
    <h3>Web & Mobile Developer, New York, New York</h3>
  </hgroup>
  <p className='major'>{text}</p>
  <p className='minor'>{quote}</p>
</section>);

export default Home;