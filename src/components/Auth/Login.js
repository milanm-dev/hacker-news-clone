import React, { useState } from "react";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

function Login(props) {
  const [login, setLogin] = useState(true);
  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin);

  return (
    <div>
      <h2 className="mv3">{login ? "Login" : "Create an account"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-column">
        {!login && (
          <input
            type="text"
            placeholder="Your name"
            autoComplete="off"
            onChange={handleChange}
            value={values.name}
            name="name"
          />
        )}
        <input
          type="email"
          onBlur={handleBlur}
          placeholder="Your email"
          autoComplete="off"
          onChange={handleChange}
          value={values.email}
          name="email"
          className={errors.email && "error-input"}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          type="password"
          placeholder="Choose a secure password"
          autoComplete="off"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          name="password"
          className={errors.password && "error-input"}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <div className="flex mt3">
          <button
            type="submit"
            className="button pointer mr2"
            disabled={isSubmitting}
            style={{ background: isSubmitting ? "gray" : "orange" }}
          >
            Submit
          </button>
          <button
            type="button"
            className="pointer button"
            onClick={() => setLogin((prevLogin) => !login)}
          >
            {login ? "Need to create an account?" : "Already have an account?"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
