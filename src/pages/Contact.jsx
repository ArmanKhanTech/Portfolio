import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import useAlert from "../hooks/useAlert";
import { Alert } from "../components";

import StarsCanvas from "../components/Stars";
import EarthCanvas from "../models/Earth";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const isMobile = window.innerWidth < 640;

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
        }
      );
  };

  if(!isMobile) {
    return (
      <section className="relative z-0">
        <Navbar />
        <StarsCanvas />
        <section className='flex lg:flex-row flex-col max-container'>
          {alert.show && <Alert {...alert} />}
          <div className='flex-1 min-w-[40%] flex flex-col'>
          <h1 className='text-5xl'>
              <span className='font-bold orange-gradient-text font-bold'>
                  Contact
              </span>
          </h1>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='w-full flex flex-col gap-7 mt-14'>
              <label className='text-white-100 font-bold text-2xl'>
                Name
                <input
                  type='text'
                  name='name'
                  className='input'
                  placeholder='Arman Khan'
                  required
                  value={form.name}
                  onChange={handleChange} />
              </label>
              <label className='text-white-100 font-bold text-2xl'>
                Email
                <input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name='email'
                  className='input'
                  placeholder='arman@gmail.com'
                  required />
              </label>
              <label className='text-white-100 font-bold text-2xl'>
                Your Message
                <textarea
                  name='message'
                  rows='4'
                  className='textarea'
                  placeholder='Write your thoughts here...'
                  value={form.message}
                  onChange={handleChange} />
              </label>
              <button
                type='submit'
                disabled={loading}
                className='btn mb-10' >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
          <div className='min-w-[75%] h-[75vh] object-cover'>
            <EarthCanvas />
          </div>
        </section>
        <Footer />
      </section>
    );
  } else {
    return (
      <section className="relative z-0 overflow-y-scroll no-scrollbar">
        <Navbar />
        <StarsCanvas className='fixed'/>
        <section className='flex lg:flex-row flex-col max-container'>
          {alert.show && <Alert {...alert} />}
          <div className='flex-1 min-w-[40%] flex flex-col'>
          <h1 className='text-headingMobile'>
            <span className='orange-gradient-text font-bold text-headingMobile'>
              Get in Touch
            </span>
          </h1>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='w-full flex flex-col gap-7 mt-14'>
              <label className='text-white-100 font-bold text-xl'>
                Name
                <input
                  type='text'
                  name='name'
                  className='input'
                  placeholder='Arman Khan'
                  required
                  value={form.name}
                  onChange={handleChange} />
              </label>
              <label className='text-white-100 font-bold text-xl'>
                Email
                <input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name='email'
                  className='input'
                  placeholder='arman@gmail.com'
                  required />
              </label>
              <label className='text-white-100 font-bold text-xl'>
                Your Message
                <textarea
                  name='message'
                  rows='4'
                  className='textarea'
                  placeholder='Write your thoughts here...'
                  value={form.message}
                  onChange={handleChange} />
              </label>
              <button
                type='submit'
                disabled={loading}
                className='btn mb-10' >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </section>
    );
  }
};

export default Contact;
