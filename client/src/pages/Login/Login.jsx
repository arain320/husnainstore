import React from "react";
import "./Login.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { singInSchema } from "../../Schema/Schema";
import Header from "../../components/Header/Header";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: singInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <>
      <Header />
      <div className="login">
        <div className="login-container">
          <div className="heading">
            <h4>welcome</h4>
            <p>
              sign in to
              <span>
                <NavLink to="/">hasnainstore </NavLink>
              </span>
              or <NavLink to="/register">create an account</NavLink>
            </p>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="email form-item">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  placeholder="your email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>
              <div className="password form-item">
                <label htmlFor="password">password</label>
                <input
                  type={!show ? "password" : "text"}
                  placeholder="Password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                  {errors.password && touched.password ? <p>{errors.password}</p> : null}
                <i
                  className={
                    show ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
                  }
                  onClick={toggle}
                ></i>
              </div>
              <div className="button">
                <input type="submit" value="login" className="btn" />
              </div>
            </form>
          </div>
          <div className="line">
            <span>or</span>
          </div>
          <div className="google-login">
            <button className="btn">login with google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
