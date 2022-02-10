import React, { useState  } from 'react';
import { validateEmail } from '../../utils/helpers';
import { FaHeart } from 'react-icons/fa';

function ContactForm() {

    // JSX
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        console.log(formState);
        
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name] : e.target.value})
        }
        
   console.log('errorMessage', errorMessage);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        alert('User ' + formState.name + ' has sent message!') 
        setFormState({name: '', email: '', message: ''})
        console.log(formState);
    }

    return (
        <>
    
        <section>
            
        <FaHeart />
            <h1>Contact me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                </div>    
                {errorMessage && (
                    <div>
                        <p className='error-test'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
           
        </section>
        </>
    );
    
 
}

export default ContactForm;