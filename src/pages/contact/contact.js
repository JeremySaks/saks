import React from 'react';
import Header from '../../parts/header/header.js';
import Title from 'react-document-title';

const endpoint = '';

const Contact = () => <Title title='Contact · Jeremy Saks'>
  <main id='contact'>
    <Header/>
    <Leader/>
    <Form/>
    <Sent/>
    <Error/>
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
  getInitialState(){
    return {
      error: false,
      sending: false,
      sent: false,
      valid: true
    };
  },
  submit(event){
    event.preventDefault();
    const {form} = this.refs;
    const valid = form.checkValidity();
    this.setState({valid});
    if (!valid) return;
    const params = JSON.stringify({
      name: this.refs.name.value.slice(0, 40),
      email: this.refs.email.value.slice(0, 40),
      message: this.refs.message.value.slice(0, 2000)
    });
    this.setState({sending: true});
    form.reset();
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      switch(req.readyState){
        case 4:
          if (req.status === 200){
            this.setState({
              sending: false,
              sent: true
            });
          } else {
            this.setState({
              sending: false,
              error: true
            });
          }
          break;
        default: break;
      }
    }
    req.open('POST', endpoint, true);
    req.send(params);
  },
  render(){
    return <section
      id='form'
      className='composition'>
      <form
        ref='form'
        name='contact'
        onSubmit={e => this.submit(e)}>
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
        <p className='minor'>* Required</p>
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

const Sent = () => <div
  id='sent'
  className='notice'>
  <i className='icon sent'>
    <svg id='icon-sent' viewBox='0 0 40 40'>
      <g>
        <path d='m17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m9 11.6c0.1 0 0.1-0.1 0.1-0.2s0-0.2-0.1-0.3l-2.4-1.9c-0.1-0.1-0.3-0.1-0.4-0.1s-0.1 0-0.2 0.1l-8.7 11.2s-3.4-3.3-3.5-3.4-0.3-0.2-0.4-0.2-0.3 0.2-0.4 0.2l-2 2.1c-0.1 0-0.1 0.2-0.1 0.3s0 0.1 0.1 0.2l0.2 0.1s6.1 5.8 6.1 5.9 0.3 0.3 0.4 0.3 0.3-0.2 0.4-0.3z'/>
      </g>
    </svg>
  </i>
  <p>Your message is sent. Thanks!</p>
</div>;

const Error = () => <div
  id='error'
  className='notice'>
  <i className='icon error'>
    <svg id='icon-error' viewBox='0 0 40 40'>
      <g>
        <path d='m34.8 33c0.2 0.4 0.4 1 0.1 1.4s-0.6 0.6-1.1 0.6h-32.6c-0.5 0-0.9-0.2-1.1-0.6s-0.1-1 0.1-1.4l16.2-27.3c0.2-0.4 0.6-0.7 1.1-0.7s0.9 0.3 1.1 0.7z m-14.8-1.7v-3.8h-5v3.8h5z m0-6.3v-11.2h-5v11.2h5z'/>
      </g>
    </svg>
  </i>
  <p>Sorry, there was an error processing your message.</p>
</div>;

export default Contact;