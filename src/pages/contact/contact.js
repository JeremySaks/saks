import React from 'react';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import Title from 'react-document-title';

const Contact = () => <Title title='Contact · Jeremy Saks'>
  <main id='contact'>
    <Header/>
    <Leader/>
    <Form/>
    <Footer/>
  </main>
</Title>;

const Leader = () => <section
  id='leader'
  className='composition'>
  <hgroup>
    <h1>contact</h1>
    <h3>Drop me a line with questions, ideas & projects.</h3>
  </hgroup>
</section>;

const Form = React.createClass({
  submit(event){
    event.preventDefault();
  },
  render(){
    return <section id='form'>
      <form name='contact' onSubmit={e => this.submit(e)}>
        <div className='field'>
          <input
            ref='name'
            type='text'
            placeholder='Name*'
            minLength='2'
            maxLength='40'
            required='true'/>
        </div>
        <div className='field'>
          <input
            ref='email'
            type='email'
            placeholder='Email*'
            minLength='5'
            maxLength='40'
            required='true'/>
        </div>
        <div className='field'>
          <textarea
            ref='message'
            minLength='5'
            maxLength='2000'
            placeholder='Message*'/>
        </div>
        <div className='field submit'>
          <button
            type='submit'
            onClick={e => this.submit(e)}>
            Submit
          </button>
        </div>
      </form>
    </section>;
  }
});

export default Contact;