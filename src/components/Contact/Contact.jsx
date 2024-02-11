import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import "./Contact.css";
import contactAnimation from "/public/animation/contact-us.json";
import successAnimation from "/public/animation/successful.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mleqgojj");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const successMessage = document.querySelector(".success-message-content");
      if (successMessage) {
        successMessage.remove();
      }
    }, 3000);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <section className="contact-section my-4">
      <header>
        <h1 className="section-title">
          <i className="fa-solid fa-envelope"></i>
          Contact
        </h1>
        <p className="section-subtitle">Contact me for more information</p>
      </header>

      <div className="row">
        <div className="col-lg-6 col-md-12  mb-4">
          <form onSubmit={handleSubmit}>
            <div className="form-content  p-3">
              <div className="email w-100 mb-3">
                <label htmlFor="email" className="mb-2"> Email Address: </label>
                <input
                  autoComplete="off"
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="message w-100 mb-3">
                <label htmlFor="message" className="mb-2">Your Message: </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  placeholder="Message..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
              {state.succeeded && (
                     <div className="success-message-content d-flex align-items-center ">
                     <Lottie
                       animationData={successAnimation}
                       className="success-animation me-2 "
                     />
                     <h4 className="success-message ">
                       Your message sent successfully{" "}
                     </h4>
                   </div>
              )}
              <ul className="social-links d-flex gap-5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/marwan-magdy72"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MarwanMagdy72"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/marawan.magdy.58910/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:marawanmagdy389@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <i className="fas fa-envelope "></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/1559559573"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </form>

        </div>
        <div className="  contact-animation col-lg-6 col-md-12  mb-4">
          <Lottie animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
