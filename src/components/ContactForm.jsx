import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const serviveId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const ContactForm = () => {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault(); 
    
        emailjs.sendForm(serviveId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result)
            // ?add a success message
        }, (error) => {
            console.log(error)// ?add showing the user an error
        });
    };
    
    return (
        <div className='form'>
            <h3 className='contact-me'>Contact Me</h3>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
        </div>
    );       
};

export default ContactForm;