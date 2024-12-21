import React, { useState } from "react";
import contact from "../assets/icons/contact.svg";
import send from "../assets/icons/send.svg";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

    emailjs.send("service_rnnr27e", "template_3ze7uhb", templateParams).then(
      function (response) {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Email sent successfully",
            showConfirmButton: false,
            iconColor: "var(--primary)",
            background: "var(--secondary)",
            color: "var(--text)",
            timer: 1500,
            timerProgressBar: true,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Email failed to send",
            showConfirmButton: false,
            iconColor: "var(--primary)",
            background: "var(--secondary)",
            color: "var(--text)",
            timer: 1500,
            timerProgressBar: true,
          });
        }
      });
  };

  return (
    <section id="contact" className="my-5 py-5 tw-h-[100dvh]">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-6 tw-flex tw-flex-col">
            <h1 className="tw-text-5xl md:tw-text-7xl tw-font-bold">
              Got a project in <br />{" "}
              <span className="tw-text-[var(--primary)]">mind?</span>
            </h1>
            <img src={contact} alt="" />
          </div>
          <div className="col-12 col-lg-6 col-xl-6">
            <form onSubmit={handleSubmit} className="tw-h-full ms-3">
              <div className="d-flex flex-row justify-content-between">
                <div className="tw-flex tw-flex-col tw-w-80">
                  <label htmlFor="name" className="tw-font-bold">
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
                  <label htmlFor="email" className="tw-font-bold">
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
                <label htmlFor="message" className="tw-font-bold">
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
                ></textarea>
              </div>
              <button type="submit" className="tw-bg-[var(--primary)] tw-pt-3 tw-pb-1 tw-px-4 tw-rounded-full mt-3 tw-flex tw-flex-row tw-justify-center tw-align-center hover:tw-bg-[color-mix(in srgb, var(--primary) 80%, var(--black) 20%)]">Send Message<img src={send} alt="" className="tw-ml-2" /></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
