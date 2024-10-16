"use client";

import React from "react";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to console (you can replace this with an API call to Formspree or another service)
    console.log("Form submitted:", formData);

    // Simulate a successful submission (you can send this data to a service instead)
    setSubmitted(true);
  };
  return (
    <>
      <div
        className="form-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "black",
        }}
      >
        {submitted ? (
          <div
            style={{
              padding: "2rem",
              borderRadius: "10px",
              background: "transparent",
            }}
          >
            <h3>Thank you for your message!</h3>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#000",
              width: "800px",
              padding: "2rem",
              borderRadius: "10px",
            }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  marginBottom: "1rem",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  marginBottom: "1rem",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  marginBottom: "1rem",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#e84c57",
                color: "#fff",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              SEND ME
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Contact;
