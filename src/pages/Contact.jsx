import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import { Alert } from "../components";
import StarsCanvas from "../models/Stars";
import EarthCanvas from "../models/Earth";
import Footer from "../components/Footer";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const { alert, showAlert, hideAlert } = useAlert();

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
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        },
      );
  };

  return (
    <section className="fixed inset-0 z-0">
      <div className="fixed w-full h-full inset-0 z-[-1] bg-[#1B1212]">
        <StarsCanvas />
        <EarthCanvas />
      </div>
      <div className="relative w-full h-full overflow-y-auto">
        <div className="max-container absolute inset-0">
          {alert.show && <Alert {...alert} />}
          <div className="flex flex-col justify-center lg:border-white lg:border lg:rounded-xl lg:flex-row lg:p-10 gap-6 lg:gap-20">
            <div className="flex flex-col lg:w-1/2">
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
            <div className="flex flex-col justify-start border backdrop-blur-sm border-orange-600 p-5 rounded-md items-start lg:w-1/2 lg:items-start">
              <p className="text-white-100 text-2xl font-semibold orange-gradient-text">
                Additional Details
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <p className="text-white-100">
                  <span className="font-light text-lg">Email:</span>
                  <br />
                  <a
                    href="mailto:ak2341776@gmail.com"
                    className="orange-gradient-text font-semibold text-xl"
                  >
                    {" "}
                    ak2341776@gmail.com
                  </a>
                </p>
                <p className="text-white-100">
                  <span className="font-light text-lg">Location:</span>
                  <p className="orange-gradient-text font-semibold text-xl">
                    India
                  </p>
                </p>
                <p className="text-white-100">
                  <span className="font-light text-lg">Phone:</span>
                  <p className="orange-gradient-text font-semibold text-xl">
                    +91 91754 16203
                  </p>
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
