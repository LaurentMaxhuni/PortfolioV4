import React, { useState, useEffect } from "react";
import contact from "../assets/icons/contact.svg";
import send from "../assets/icons/send.svg";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let emailRegex =
    /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.init({
      publicKey: "GFa9MEUh1moHnmmX_",
    });

    if (emailRegex.test(email) && name !== "" && message !== "") {
      emailjs
        .send("service_rnnr27e", "template_3ze7uhb", templateParams)
        .then(function (response) {
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Email sent successfully!",
              showConfirmButton: false,
              iconColor: "var(--primary)",
              background: "var(--secondary)",
              color: "var(--text)",
              timer: 1500,
              timerProgressBar: true,
            });
            setName("");
            setEmail("");
            setMessage("");
          } else {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Email failed to send!",
              showConfirmButton: false,
              iconColor: "var(--primary)",
              background: "var(--secondary)",
              color: "var(--text)",
              timer: 1500,
              timerProgressBar: true,
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please fill out all fields and enter a valid email address.",
        showConfirmButton: false,
        iconColor: "var(--primary)",
        background: "var(--secondary)",
        color: "var(--text)",
        timer: 1500,
        timerProgressBar: true,
      });
    }
  };

  function handleKeyDown(e) {
    if(e.key === "Enter") {
      handleSubmit();
    }
  }

  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <section id="contact" className="my-5 py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-6 tw-flex tw-flex-col">
            <h1
              className="tw-text-5xl md:tw-text-7xl tw-font-bold"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Got a project in <br />{" "}
              <span className="tw-text-[var(--primary)]">mind?</span>
            </h1>
            <img src={contact} alt="" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" />
          </div>
          <div className="col-12 col-lg-6 col-xl-6 tw-h-fit lg:tw-h-auto mt-5 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
            <form onSubmit={handleSubmit} className="tw-h-full lg:tw-ms-5 tw-w-full ">
              <div className="d-flex flex-row justify-content-between">
                <div className="tw-flex tw-flex-col tw-w-80">
                  <label htmlFor="name" className="tw-font-bold mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Name"
                    className="tw-p-3 tw-rounded-md tw-w-full tw-bg-[var(--secondary)] placeholder-shown:tw-font-bold
                     tw-outline-1 tw-outline-[var(--primary)]"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="tw-flex tw-flex-col tw-w-80 tw-ml-4">
                  <label htmlFor="email" className="tw-font-bold mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    className="tw-p-3 tw-rounded-md tw-w-full tw-bg-[var(--secondary)] placeholder-shown:tw-font-bold
                     tw-outline-1 tw-outline-[var(--primary)]"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex flex-column mt-3 tw-h-[75%]">
                <label htmlFor="message" className="tw-font-bold mb-2">
                  Your message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  placeholder="Message"
                  className="tw-p-3 tw-rounded-md tw-w-full tw-bg-[var(--secondary)] placeholder-shown:tw-font-bold
                     tw-outline-1 tw-outline-[var(--primary)] tw-h-full"
                  onChange={(e) => setMessage(e.target.value)}
                  autoCorrect="on"
                  onKeyDown={() => handleKeyDown(event)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="tw-bg-[var(--primary)] tw-pt-3 tw-pb-1 tw-px-4 tw-rounded-full mt-3 tw-flex tw-flex-row tw-justify-center tw-align-center hover:tw-bg-[color-mix(in srgb, var(--primary) 80%, var(--black) 20%)]"
              >
                Send Message
                <img src={send} alt="" className="tw-ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
