import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Title from 'react-document-title';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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
    <h3>Temp</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
</section>;

const Tapology = () => <section
  id='tapology'
  className='composition'>
  <hgroup>
    <h1>Tapology</h1>
    <h3>Temp</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
</section>;

const Finishers = () => <section
  id='finishers'
  className='composition'>
  <hgroup>
    <h1>Finishers</h1>
    <h3>Temp</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
</section>;

const GearPlan = () => <section
  id='gearplan'
  className='composition'>
  <hgroup>
    <h1>GearPlan</h1>
    <h3>Temp</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
</section>;

const YingYingLi = () => <section
  id='yingyingli'
  className='composition'>
  <hgroup>
    <h1>YingYingLi</h1>
    <h3>Temp</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
</section>;

const JeremySaks = () => <section
  id='jeremysaks'
  className='composition'>
  <hgroup>
    <h1>About This Site</h1>
    <h3>Temp</h3>
  </hgroup>
  <p className='major'>
    {lorem}
  </p>
</section>;

export default Projects;