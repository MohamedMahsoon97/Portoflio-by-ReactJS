import React , { useRef , useState} from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import Phone from "../../Images/phone.png";
import Email from "../../Images/email.png";
import Address from "../../Images/address.png";

function Contact() {
      const formRef = useRef();
      const [done , setDone] = useState(false);
      const sendEmail = (e) => {
            e.preventDefault();
            emailjs
                  .sendForm(
                        'service_fs554t9', 
                        'template_v9zb7le', 
                        formRef.current, 
                        'user_1opjeCCCCGk9B4sPEqj2m'
                  )
                  .then((result) => {
                        console.log(result.text);
                        setDone(true);
                  }, (error) => {
                        console.log(error.text);
                  });
            };

      return (
            <div className="contact">
                  <div className="contact-bg"></div>
                  <div className="contact-wrapper">
                        <div className="contact-left">
                              <h1 className="contact-title">Let's discuss your project</h1>
                              <div className="contact-info">
                                    <div className="contact-info-item">
                                          <img src={Phone} alt="" className="contact-icon" />
                                          +1 1234 556 75
                                    </div>
                                    <div className="contact-info-item">
                                          <img className="contact-icon" src={Email} alt="" />
                                          contact@lama.dev
                                    </div>
                                    <div className="contact-info-item">
                                          <img className="contact-icon" src={Address} alt="" />
                                          245 King Street, Touterie Victoria 8520 Australia
                                    </div>
                              </div>
                        </div>
                        <div className="contact-right">
                              <p className="contact-desc">
                                    <b>What’s your story?</b> Get in touch. Always available for
                                    freelancing if the right project comes along. me.
                              </p>
                              <form ref={formRef} onSubmit={sendEmail}>
                                    <input type="text" placeholder="Name" name="user_name" />
                                    <input type="text" placeholder="Subject" name="user_subject" />
                                    <input type="text" placeholder="Email" name="user_email" />
                                    <textarea rows="5" placeholder="Message" name="message" />
                                    <button>Submit</button>
                                    <span className="sent">{done && "sent Successful"}</span>
                              </form>
                        </div>
                  </div>
            </div>
      )
}
export default Contact;