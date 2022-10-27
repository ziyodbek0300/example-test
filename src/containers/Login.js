import React, { useState } from "react";
import { loginUser } from "../redux/user/actions";
import { useDispatch } from "react-redux";
import { NavLink, redirect, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    dispatch(loginUser(formData));
  };

  return (
    <div className={"h-screen flex flex-col justify-between"}>
      <div className={"text-right p-6"}>
        <p>
          Don't have an account? &nbsp;
          <NavLink to="/register">Register here</NavLink>
        </p>
      </div>
      <div>
        <div className={"bg-gray-300 h-20 w-[450px] mx-auto mb-10"}></div>
        <div className={"text-center"}>
          <h1 className={"text-[40px] mb-12"}>Log In</h1>
          <div className={"w-[350px] mx-auto"}>
            <form onSubmit={handleSubmit}>
              <div className={"mb-3"}>
                <input
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder={"Email"}
                  aria-label={"email"}
                  className={
                    "w-full border outline-red-450 border-black rounded py-3 text-xl px-5"
                  }
                />
              </div>
              <div className={"mb-9"}>
                <input
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder={"Password"}
                  aria-label={"password"}
                  className={
                    "w-full border outline-red-450 border-black rounded py-3 text-xl px-5"
                  }
                />
              </div>
              <div className={"mb-3"}>
                <input
                  type="submit"
                  name="login"
                  value={"Log in"}
                  aria-label={"login"}
                  className={
                    "w-full bg-red-450 text-white active:opacity-90 hover:opacity-95 border-black rounded py-3 text-xl px-5"
                  }
                />
              </div>
            </form>
            <a
              href={"/"}
              className={"text-xl hover:underline active:text-red-450"}
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <div className={"mx-auto w-[1000px] my-8"}>
        <div className={"flex w-full items-center justify-between"}>
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className={"text-xl"}>
              Terms
            </a>
          </div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className={"text-xl"}>
              Privacy
            </a>
          </div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className={"text-xl"}>
              Help
            </a>
          </div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className={"text-xl"}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
