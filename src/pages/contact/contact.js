import React from 'react';
import Header from '../../parts/header/header.js';
import Title from 'react-document-title';

const endpoint = '';

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

export default Contact;