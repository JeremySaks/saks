import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Title from 'react-document-title';

const Projects = () => <Title title='Projects · Jeremy Saks'>
  <main id='projects'
    itemScope
    itemType='http://schema.org/CollectionPage'>
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
  itemScope
  itemType='http://schema.org/Website'
  id='atopolis'
  className='composition'>
  <hgroup>
    <h1 itemProp='name'>Atopolis</h1>
    <h3 itemProp='dateCreated'>In Development · {new Date().getFullYear()}</h3>
  </hgroup>
  <p className='major' itemProp='description'>
    A live multiplayer collectible card game app set in a dystopian near future. Built for web & mobile, Atopolis is Hearthstone for grownups. Coming soon!
  </p>
  <p className='major' itemProp='about'>
    Node · React · React Native · Redux · Immutable · Redis · MongoDB · ES2015 · Semantic UI · Radium · SASS
  </p>
  <p className='minor'>
    Coming Soon
  </p>
</section>;

const Finishers = () => <section
  itemScope
  itemType='http://schema.org/Website'
  id='finishers'
  className='composition'>
  <hgroup>
    <h1 itemProp='name'>Finishers</h1>
    <h3 itemProp='dateCreated'>2015</h3>
  </hgroup>
  <p className='major' itemProp='description'>
    Finishers mixed martial arts fantasy game. A live multiplayer gaming platform featuring a patented real time game play system, two-way payment processing and live chat.
  </p>
  <p className='major' itemProp='about'>
    Node · Meteor · Stripe · Stripe Connect · MongoDB · ES2015 · Blaze · SASS
  </p>
  <p className='minor'>
    <a
      href='https://finishers.com/'
      itemProp='url'>
      Visit Finishers.com
    </a>
    <span className='triangle'>▸</span>
  </p>
</section>;

const GearPlan = () => <section
  itemScope
  itemType='http://schema.org/Website'
  id='gearplan'
  className='composition'>
  <hgroup>
    <h1 itemProp='name'>GearPlan</h1>
    <h3 itemProp='dateCreated'>2016</h3>
  </hgroup>
  <p className='major' itemProp='description'>
    AirBnB for musicians, GearPlan is a live platform for renting musical equipment, sound space and instruments. Built with Meteor for web & mobile.
  </p>
  <p className='major' itemProp='about'>
    Node · Meteor · Blaze · Elasticsearch · Google Maps API · Braintree · Bootstrap · LESS 
  </p>  
  <p className='minor'>
    <a
      href='https://gearplan.com/'
      itemProp='url'>
      Visit Gearplan.com
    </a>
    <span className='triangle'>▸</span>
  </p>
</section>;

const Tapology = () => <section
  itemScope
  itemType='http://schema.org/Website'
  id='tapology'
  className='composition'>
  <hgroup>
    <h1 itemProp='name'>Tapology</h1>
    <h3 itemProp='dateCreated'>2010</h3>
  </hgroup>
  <p className='major' itemProp='description'>
    Founded in 2010, Tapology is the world's largest online resource for local, regional & international mixed martial arts. The most trusted source for data on over one hundred thousand fighters, events, promotions & gyms. Featuring discussion forums, fight prediction, user rankings and a full suite of custom made social networking tools.
  </p>
  <p className='major' itemProp='about'>
    Ruby on Rails · PostgreSQL · Redis · jQuery · jQueryUI · HTML5 · CSS3
  </p>
  <p className='minor'>
    <a
      href='http://www.tapology.com/'
      itemProp='url'>
      Visit Tapology.com
    </a>
    <span className='triangle'>▸</span>
  </p>
</section>;

const YingYingLi = () => <section
  itemScope
  itemType='http://schema.org/Website'
  id='yingyingli'
  className='composition'>
  <hgroup>
    <h1 itemProp='name'>YingYingLi</h1>
    <h3 itemProp='dateCreated'>2016</h3>
  </hgroup>
  <p className='major' itemProp='description'>
    A static brand site for actress, model and writer Ying Ying Li. Blogging subdomain with Ghost.
  </p>
  <p className='major' itemProp='about'>
    React · React Router · Webpack · SASS · AWS Lambda · Ghost
  </p>
  <p className='minor'>
    <a
      href='http://yingyingli.com/'
      itemProp='url'>
      Visit YingYingLi.com
    </a>
    <span className='triangle'>▸</span>
  </p>  
</section>;

const JeremySaks = () => <section
  itemScope
  itemType='http://schema.org/Website'
  id='jeremysaks'
  className='composition'>
  <hgroup>
    <h1 itemProp='name'>This Site</h1>
    <h3 itemProp='dateCreated'>2016</h3>
  </hgroup>
  <p className='major' itemProp='description'>
    Here you are, so thanks for visiting! If you're interested in the source code for my static personal site, follow the link below. It's open sourced to use, copy & share. Built with React.
  </p>
  <p className='major' itemProp='about'>
    React · React Router · Webpack · SASS · AWS Lambda
  </p>
  <p className='minor'>
    <a
      href='https://github.com/JeremySaks/saks'
      itemProp='url'>
      View Source
    </a>
    <span className='triangle'>▸</span>
  </p>  
</section>;

export default Projects;