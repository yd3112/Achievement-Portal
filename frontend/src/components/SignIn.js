import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../loginsignup.css'
const host = "http://localhost:4000";

const SignIn = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: "", password: "" });

    // updates state as form input value changes
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    // handle submit event when form is submitted
    const handleSubmit = async (evt) => {
        console.log(user);  
        evt.preventDefault(); // prevent default form submission
        const { username, password } = user;
        // proceed if all fields are filled
        if (username && password) {
            try {
                const data = await fetch(`${host}/api/auth/login`, {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const response = await data.json();
                console.log(response);
                if (response.success) {
                    localStorage.setItem("token", JSON.stringify(response.authToken)); // save JSON web token in local storage for later use
                    localStorage.setItem("user", JSON.stringify(response.user));
                    navigate("/");
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("Some fields are empty");
        }
    };
    return (
        // submit form using handleSubmit() instead of default form submit
        <form className="flex flex-col space-y-6 my-4 px-10" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-semibold" htmlFor="username">
                    USERNAME
                </label>
                <input
                    onChange={handleChange}
                    name="username"
                    className="bg-transparent border-b-[1px] border-b-gray-800 py-1 mb-1 w-full placeholder:text-sm placeholder:text-gray-800 focus:border-blue-500 focus:placeholder:text-blue-500 focus:outline-none"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
            </div>
            <div>
                <label className="block text-sm font-semibold" htmlFor="">
                    PASSWORD
                </label>
                <input
                    onChange={handleChange}
                    className="bg-transparent border-b-[1px] border-b-gray-800 py-1 mb-1 w-full placeholder:text-sm placeholder:text-gray-800 focus:border-blue-500 focus:placeholder:text-blue-500 focus:outline-none"
                    type="password"
                    name="password"
                    placeholder="Set a strong password"
                />
            </div>
            <button className="mx-auto text-white bg-blue-500 text-sm px-6 py-2 my-32 block font-semibold rounded-full hover:bg-white hover:text-blue-500 shadow-md hover:shadow-blue-400 hover:scale-110 transition-all duration-200">
                Sign In
            </button>
        </form>
    );
};

export default SignIn;
