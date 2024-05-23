import React from "react";
import { useFormik } from "formik";
import "./App.css";
import * as yup from "yup";

const initialValues = {
  email: "",
  name: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("FormData", values);
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  channel: yup.string().required("Required"),
});

const MyForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema, 
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="error">{formik.errors.name}</p>
          )}
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <label className="label" htmlFor="channel">
            Channel
          </label>
          <input
            className="input"
            type="text"
            id="channel"
            name="channel"
            value={formik.values.channel}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.channel && formik.errors.channel && (
            <p className="error">{formik.errors.channel}</p>
          )}
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
