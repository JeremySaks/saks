import React from 'react';
import Header from '../../parts/header/header.js';
import Title from 'react-document-title';

const endpoint = 'https://yznhh31gfa.execute-api.us-east-1.amazonaws.com/production';

const Contact = () => <Title title='Contact · Jeremy Saks'>
  <main id='contact'>
    <Header/>
    <Leader/>
    <Form/>
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
    const {sending, sent, valid, error} = this.state;
    switch(true){
      case sending: return <Sending/>;
      case sent: return <Sent/>;
      case error: return <Error/>;
      default: return <section
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
              spellCheck='false'
              placeholder='Name*'
              minLength='2'
              maxLength='40'
              required='true'/>
          </div>
          <div className='field'>
            <input
              ref='email'
              type='email'
              spellCheck='false'
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
              required='true'
              placeholder='Message*'/>
          </div>
          {!valid && <div className='field invalid'>
            There was a problem with one or more fields.
          </div>}
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
  }
});

const Sending = () => <div
  id='sending'
  className='notice'>
  <i className='icon sending'>
    <svg id='icon-sending' viewBox='0 0 40 40'>
      <g>
        <path d='m33.8 18.8c0.7 0 1.2 0.5 1.2 1.2s-0.5 1.3-1.2 1.3h-6.3c-0.7 0-1.2-0.6-1.2-1.3s0.5-1.2 1.2-1.2h6.3z m-20 1.2c0 0.7-0.6 1.3-1.3 1.3h-6.2c-0.8 0-1.3-0.6-1.3-1.3s0.5-1.2 1.3-1.2h6.2c0.7 0 1.3 0.5 1.3 1.2z m6.2 6.3c0.7 0 1.3 0.5 1.3 1.2v6.3c0 0.7-0.6 1.2-1.3 1.2s-1.2-0.5-1.2-1.2v-6.3c0-0.7 0.5-1.2 1.2-1.2z m0-21.3c0.7 0 1.3 0.5 1.3 1.3v6.2c0 0.7-0.6 1.3-1.3 1.3s-1.2-0.6-1.2-1.3v-6.2c0-0.8 0.5-1.3 1.2-1.3z m5.4 11.9c-0.3-0.6-0.2-1.4 0.5-1.7l5.4-3.2c0.6-0.3 1.4-0.1 1.7 0.5s0.1 1.4-0.5 1.7l-5.4 3.1c-0.6 0.4-1.4 0.2-1.7-0.4z m-10.8 6.2c0.3 0.7 0.2 1.4-0.5 1.7l-5.3 3.2c-0.7 0.3-1.5 0.1-1.8-0.5s-0.1-1.4 0.5-1.7l5.4-3.1c0.6-0.4 1.4-0.2 1.7 0.4z m10.2 2.8l3.2 5.3c0.3 0.7 0.1 1.5-0.5 1.8s-1.4 0.1-1.7-0.5l-3.1-5.4c-0.4-0.6-0.2-1.4 0.4-1.7s1.4-0.2 1.7 0.5z m-10.6-18.4l3.1 5.4c0.4 0.6 0.2 1.4-0.4 1.7s-1.4 0.2-1.7-0.5l-3.2-5.3c-0.3-0.7-0.1-1.5 0.5-1.8s1.4-0.1 1.7 0.5z m8.9 7.1c-0.6-0.3-0.8-1.1-0.4-1.7l3.1-5.4c0.3-0.6 1.1-0.8 1.7-0.5s0.8 1.1 0.5 1.8l-3.2 5.3c-0.3 0.7-1 0.8-1.7 0.5z m-6.2 10.8c0.6 0.3 0.8 1.1 0.4 1.7l-3.1 5.4c-0.3 0.6-1.1 0.8-1.7 0.5s-0.8-1.1-0.5-1.7l3.2-5.4c0.3-0.7 1-0.8 1.7-0.5z m15.6 0.4c0.6 0.3 0.8 1.1 0.5 1.7s-1.1 0.8-1.7 0.5l-5.4-3.2c-0.7-0.3-0.8-1.1-0.5-1.7s1.1-0.8 1.7-0.4z m-25-11.6c-0.6-0.3-0.8-1.1-0.5-1.7s1.1-0.8 1.8-0.5l5.3 3.2c0.7 0.3 0.8 1.1 0.5 1.7s-1.1 0.8-1.7 0.4z'/>
      </g>
    </svg>
  </i>
  <p>Sending...</p>
</div>;

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
  <p>Your message is sent!</p>
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
  <p>Sorry, there was an error sending your message.</p>
</div>;

export default Contact;