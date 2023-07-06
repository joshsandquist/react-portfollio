import React, { useState } from 'react';

const Contact = () => {
    //Setting state for form data with default being empty strings
    const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
    });

    //Creating error state for each input so that they can all be set individually
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    
    //Submitted state that will render thank you message when submission is complete.
    const [submitted, setSubmitted] = useState(false);
  
    //Function to handle form state
    //Changes the state of the targeted form to the value entered
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    //function that will handle error messaging for blur (when a user leaves a selected input)
    //Checking each input for an empty string, and if empty, set the coresponding error
    const handleBlur = (e) => {
      if (e.target.value === '') {
        switch (e.target.name) {
          case 'name':
            setNameError('Name is required');
            break;
          case 'email':
            setEmailError('Email is required');
            break;
          case 'message':
            setMessageError('Message is required');
            break;
          default: 
            break;
        }
        //Switch statements to clear out error messaging when inputs corrected
      } else {
        switch (e.target.name) {
          case 'name':
            setNameError('');
            break;
          case 'email':
            setEmailError('');
            break;
          case 'message':
            setMessageError('');
            break;
          default:
            break;
        }
      }
    };
  
    //Form submit event handler
    const handleSubmit = (e) => {
    //preventing default refresh
      e.preventDefault();

      //creating a variable hasErrors as a boolean set to false to check for valid form submission
      let hasErrors = false;

      //Checking each input field for an empty string, and setting hasErrors to true if so
      //We want to prevent form submission if the user has not entered any data
      if (form.name === '') {
        setNameError('Name is required');
        hasErrors = true;
      }
      if (form.email === '') {
        setEmailError('Email is required');
        hasErrors = true;
      }
      if (form.message === '') {
        setMessageError('Message is required');
        hasErrors = true;
      }
      
      //Only excecuting form submission if hasErrors evaluates to a 'true' value.
      if (!hasErrors) {
        setForm({ name: '', email: '', message: '' });
        setSubmitted(true);
      }
    };
  
    return (
      <div className = 'contactPage'>
        
        {submitted ? (
          <div>
            <h2>Thank you for your message!</h2>
          </div>
        ) : (
        
          <div className='contactFormContainer'>
            <h2>
            Contact Me
            </h2>
              <form onSubmit={handleSubmit} className='contactForm'>
                <label>
                  Name:
                  <input
                    className='form-input name-input'
                    name="name"
                    type="text"
                    value={form.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </label>
                {nameError && <div className="error">{nameError}</div>}
                <label>
                  Email:
                  <input
                    className='form-input email-input'
                    name="email"
                    type="email"
                    value={form.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </label>
                {emailError && <div className="error">{emailError}</div>}
                <label>
                  Message:
                  <textarea
                    className='form-input name-input'
                    name="message"
                    value={form.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </label>
                {messageError && <div className="error">{messageError}</div>}
                <button type="submit" className='submit-button'>Submit</button>
              </form>
          </div>
        )}
      </div>
    );
  };
  
  export default Contact;