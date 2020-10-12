import React from "react";
import "./contact.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const style = { overflow: "auto" };
  const styleError = { color: "Red" };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    enquiry: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    alert(
      `Enquiry sent to email: ${values.email} with FirstName: ${values.firstName}, LastName: ${values.lastName}`
    );
    onSubmitProps.resetForm();
  };

  const ValidateSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    enquiry: Yup.string().min(2, "Too Short!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <>
      <div className="contact-container">
        <div className="contact-header">
          <h1> Contact Us</h1>
          <br />
          <p> PLEASE COMPLETE THE FORM BELOW: </p>
        </div>
      </div>

      <div className="contact-form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={ValidateSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="contact-form">
              <div>
                <p>Name *</p>
                <div className="contact-name">
                  <div className="contact-fill">
                    <Field type="text" id="firstName" name="firstName" />
                    {touched.firstName && errors.firstName && (
                      <div style={styleError}>{errors.firstName}</div>
                    )}
                    <label htmlFor="firstName">First Name </label>
                  </div>

                  <div className="contact-fill">
                    <Field type="text" id="lastName" name="lastName" />
                    {touched.lastName && errors.lastName && (
                      <div style={styleError}>{errors.lastName}</div>
                    )}
                    <label htmlFor="lastName">Last Name </label>
                  </div>
                </div>
              </div>

              <div className="contact-fill">
                <label htmlFor="email">Email Address * </label>
                <Field type="email" id="email" name="email" />
                {touched.email && errors.email && (
                  <div style={styleError}>{errors.email}</div>
                )}
              </div>

              <div className="contact-fill">
                <label htmlFor="subject">Subject </label>
                <Field type="text" id="subject" name="subject" />
                {touched.subject && errors.subject && (
                  <div style={styleError}>{errors.subject}</div>
                )}
              </div>

              <div className="contact-fill ">
                <label htmlFor="enquiry">Enquiry * </label>
                <Field
                  type="textarea"
                  id="enquiry"
                  name="enquiry"
                  style={style}
                />
                {touched.enquiry && errors.enquiry && (
                  <div style={styleError}>{errors.enquiry}</div>
                )}
              </div>
              <br />
              <input type="submit" value="Submit" className="contact-btn" />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Contact;
