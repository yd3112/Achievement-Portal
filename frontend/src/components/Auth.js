import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth(props) {
    const [signup, setSignup] = useState(props.signup); // stores current form mode is signup or not
    const changeForm = (evt) => {
        let notCurr = evt.target.classList.contains("border-transparent"); // if target contains border-transparent class then it is not selected
        setSignup(signup && notCurr ? false : true);
    };
    return (
        <div className="grid grid-cols-2 h-screen">
            <div className="flex flex-col justify-around bg-gradient-to-b from-gray-700 via-gray-900 to-black col-span-1">
                <h1 className="text-center font-medium text-slate-100 text-6xl px-10 leading-tight">
                    {signup ? "Already have an account?":"Create new account"}
                </h1>
                <button
                    onClick={changeForm}
                    className="mx-auto h-fit px-6 py-2 relative flex justify-center rounded-full border border-transparent bg-blue-600 text-sm font-medium text-white hover:bg-blue-700"
                >
                    {!signup ? "Sign Up" : "Sign In"}
                </button>
            </div>
            <div className="bg-gradient-to-b from-indigo-200 via-red-200 to-yellow-100 col-span-1">
                <div className="p-20">
                    <h1 className="text-6xl my-7 text-center font-semibold">{signup ? "Sign Up" : "Sign In"}</h1>
                    {signup ? <SignUp /> : <SignIn />}
                </div>
            </div>
        </div>
    );
}