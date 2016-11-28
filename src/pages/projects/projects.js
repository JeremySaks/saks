import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Title from 'react-document-title';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

const Projects = () => <Title title='Projects · Jeremy Saks'>
  <main id='projects'>
    <Header/>
    <Atopolis/>
    <Finishers/>
    <GearPlan/>
    <Tapology/>
    <YingYingLi/>
    <JeremySaks/>
    <Footer/>
  </main>
</Title>;

const Atopolis = () => <section
  id='atopolis'
  className='composition'>
  <hgroup>
    <h1>Atopolis</h1>
    <h3>In Production &middot; {new Date().getFullYear()}</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
  <p className='major'>
    ES2015 · Node · React · Redux · Immutable · MongoDB · Redis · Semantic UI · SASS
  </p>
  <p className='minor'>
    Coming Soon
  </p>
</section>;

const Finishers = () => <section
  id='finishers'
  className='composition'>
  <hgroup>
    <h1>Finishers</h1>
    <h3>2015</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
  <p className='major'>
    ES2015 · Node · Meteor · MongoDB · Blaze · SASS
  </p>
  <p className='minor'>
    <a href='https://finishers.com/'>Visit Finishers.com</a>
    <span className='triangle'>▸</span>
  </p>
</section>;

const GearPlan = () => <section
  id='gearplan'
  className='composition'>
  <hgroup>
    <h1>GearPlan</h1>
    <h3>2016</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
  <p className='major'>
    Node · Meteor · Blaze · Elasticsearch · Google Maps API · Bootstrap · LESS 
  </p>  
  <p className='minor'>
    <a href='https://gearplan.com/'>Visit Gearplan.com</a>
    <span className='triangle'>▸</span>
  </p>
</section>;

const Tapology = () => <section
  id='tapology'
  className='composition'>
  <hgroup>
    <h1>Tapology</h1>
    <h3>2010</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
  <p className='major'>
    Ruby on Rails · PostgreSQL · Redis · jQuery/UI · HTML5 · CSS3
  </p>
  <p className='minor'>
    <a href='http://www.tapology.com/'>Visit Tapology.com</a>
    <span className='triangle'>▸</span>
  </p>
</section>;

const YingYingLi = () => <section
  id='yingyingli'
  className='composition'>
  <hgroup>
    <h1>YingYingLi</h1>
    <h3>2016</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
  <p className='major'>
    React · React Router · Webpack · SASS · AWS Lambda
  </p>
  <p className='minor'>
    <a href='http://yingyingli.com/'>Visit YingYingLi.com</a>
    <span className='triangle'>▸</span>
  </p>  
</section>;

const JeremySaks = () => <section
  id='jeremysaks'
  className='composition'>
  <hgroup>
    <h1>About This Site</h1>
    <h3>2016</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
  <p className='major'>
    React · React Router · Webpack · SASS · AWS Lambda
  </p>
  <p className='minor'>
    <a href='https://github.com/JeremySaks/saks'>View Source</a>
    <span className='triangle'>▸</span>
  </p>  
</section>;

export default Projects;