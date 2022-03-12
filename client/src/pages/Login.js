import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_PLAYER } from "../utils/mutations";

import Auth from "../utils/auth";
//import { QUERY_PLAYER } from '../utils/queries';
//import { useQuery } from '@apollo/client';

import "../assets/page-css/auth.css";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_PLAYER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });

      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main>
      <div>
        <div>
          {/* <h4>Login</h4> */}
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                placeholder="Your email"
                name="email"
                type="text"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                placeholder="*****"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="submit" type="submit">
                Login
              </button>
            </form>

            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
