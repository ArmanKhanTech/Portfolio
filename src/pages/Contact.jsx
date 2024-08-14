import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import useAlert from "../hooks/useAlert";
import { Alert } from "../components";

import StarsCanvas from "../components/Stars";
import EarthCanvas from "../models/Earth";

import Footer from "../components/Footer";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Arman Khan",
          from_email: form.email,
          to_email: "ak2341776@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        },
      );
  };

  return (
    <section className="relative z-0">
      <StarsCanvas />
      <section className="max-container">
        {alert.show && <Alert {...alert} />}
        <div className="flex flex-col justify-center lg:border-white lg:border lg:rounded-xl lg:flex-row lg:py-10">
          <div className="flex flex-col lg:min-w-[40%] lg:pl-10">
            <h1 className="text-5xl">
              <span className="font-bold orange-gradient-text font-semibold">
                Contact
              </span>
            </h1>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-6 mt-14"
            >
              <label className="text-white-100 text-2xl">
                Name
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Arman Khan"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label className="text-white-100 text-2xl">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  className="input"
                  placeholder="arman@gmail.com"
                  required
                />
              </label>
              <label className="text-white-100 text-2xl">
                Your Message
                <textarea
                  name="message"
                  rows="4"
                  className="textarea"
                  placeholder="Write your thoughts here..."
                  value={form.message}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" disabled={loading} className="btn">
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
          <div className="hidden lg:flex lg:min-w-[60%] lg:h-[75vh] lg:object-cover lg:m-auto">
            <EarthCanvas />
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
