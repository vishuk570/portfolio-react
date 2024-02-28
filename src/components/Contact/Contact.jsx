import React, { useContext, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        debugger;
        const res = await fetch(
          "https://namanmalhan-portfolio-default-rtdb.firebaseio.com/userDataRecords.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (res.ok) {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          alert("Thank you for your valuable time ❤️. I'll get back to you shortly 💯.");
        } else {
          alert("Failed to store data. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="contact-form row" id="contact">
      <div className="w-left col">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right col">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group" id="spacebottom">
                  <label htmlFor="name" className="col-sm-4 control-label">
                    Name
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>
                </div>
                <div className="form-group" id="spacebottom">
                  <label htmlFor="email" className="col-sm-8 control-label">
                    Email address
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="form-group" id="spacebottom">
                  <label htmlFor="message" className="col-sm-8 control-label">
                    Message
                  </label>
                  <div className="col-sm-8 mb-2" style={{}}>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    {errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>
                </div>
                <div className="form-group" id="spacebottom">
                  <div className="col-sm-offset-4 col-sm-8">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
