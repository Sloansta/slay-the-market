import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PLAYER } from "../utils/mutations";

import Auth from "../utils/auth";

import "../assets/page-css/auth.css";

function Signup() {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [addPlayer] = useMutation(ADD_PLAYER);

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
    //debugger;

    try {
      console.log("try 1");
      const mutationResponse = await addPlayer({
        variables: {
          //  userName: formState.userName,
          //  email: formState.email,
          //  password: formState.password,
          userName: "dummy",
          email: "dummy@dummy.com",
          password: "pass12344",
          maxHealth: 100,
          currentHealth: 100,
          deck: [],
        },
      });
      console.log("try 1.5");
      const token = mutationResponse.data.addPlayer.token;
      console.log("try 2");
      Auth.login(token);
      console.log("try 3");
    } catch (e) {
      console.error(e);
      console.log({ ...formState });
    }
  };

  return (
    <main>
      {/* <h4>Sign Up</h4> */}
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Your userName"
          name="userName"
          type="userName"
          value={formState.userName}
          onChange={handleChange}
        />
        <input
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button className="submit" type="submit">
          Register
        </button>
      </form>
      {<div>Signup Failed</div>}
    </main>
  );
}

export default Signup;
