import { Link, useNavigate } from "react-router-dom";
import { LabelledInput } from "./LabelledInput";
import { useState } from "react";
import axios from "axios";

import { BACKEND_URL } from "../config";
import { SignupInput } from "@vinnii09/common";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, SetpostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {   
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postInputs);
      const random = response.data;
      const res=random.jwt;
      localStorage.setItem("token", res);
      navigate("/blogs");
    } catch (e) { 
      console.log(e)
     }
  }

  return (
    <div className=" h-screen flex justify-center flex-col ">
      <div className="flex justify-center">
        <div>
          <div className="px-12">
            <div className=" text-3xl font-extrabold">
              {type === "signin" ? "Log In" : "Create an account"}
            </div>
            <div className="text-slate-400 pt-2">
              {type === "signin"
                ? "Don't have an account "
                : "Already have an account ?"}
              <Link
                className="underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign Up" : "Sign In"}
              </Link>
            </div>
          </div>
          <div>
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Vineet"
                onChange={(e) => {
                  SetpostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}
            <LabelledInput
              label="Username"
              placeholder="Vineet@abc.com"
              onChange={(e) => {
                SetpostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="..."
              onChange={(e) => {
                SetpostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <div className="pt-8">
              <button
                onClick={sendRequest}
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full "
              >
                {type === "signup" ? "Sign up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
