import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const host = "http://localhost:4000";

const SignUp = (props) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        user: {
            fname: "",
            lname: "",
            username: "",
            mobile: "",
            email: "",
            password: "",
            profession: "",
        },
    });

    // updates state as form input value changes
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setState({
            user: {
                ...state.user,
                [name]: value,
            },
        });
    };

    // handle submit event when form is submitted
    const handleSubmit = async (evt) => {
        evt.preventDefault(); // prevent default form submission
        const { fname, lname, username, email, password, profession } = state.user;
        // proceed if all fields are filled
        if (fname && lname && username && email && password && profession) {
            try {
                const data = await fetch(`${host}/api/auth/signup`, {
                    method: "POST",
                    body: JSON.stringify(state.user),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const response = await data.json();
                console.log(response);
                if (response.success) {
                    localStorage.setItem("token", JSON.stringify(response.authToken));
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
        <form className="flex flex-col space-y-4 my-4 px-10" onSubmit={handleSubmit}>
            <div className="flex w-full space-x-6">
                <div className="w-full">
                    <label className="block text-sm font-semibold" htmlFor="fname">
                        FIRST NAME
                    </label>
                    <input
                        onChange={handleChange}
                        className="bg-transparent border-b-[1px] border-b-gray-800 py-1 mb-1 w-full placeholder:text-sm placeholder:text-gray-800 focus:border-blue-500 focus:placeholder:text-blue-500 focus:outline-none"
                        id="fname"
                        type="text"
                        // placeholder="Enter your full name"
                    />
                </div>
                <div className="w-full">
                    <label className="block text-sm font-semibold" htmlFor="lname">
                        LAST NAME
                    </label>
                    <input
                        onChange={handleChange}
                        className="bg-transparent border-b-[1px] border-b-gray-800 py-1 mb-1 w-full placeholder:text-sm placeholder:text-gray-800 focus:border-blue-500 focus:placeholder:text-blue-500 focus:outline-none"
                        id="lname"
                        type="text"
                        // placeholder="Enter your full name"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-semibold" htmlFor="profession">
                    PROFESSION
                </label>
                <div className="flex space-x-6 my-2" onChange={handleChange}>
                    <div className="space-x-2">
                        <input
                            className="cursor-pointer"
                            type="radio"
                            id="student"
                            name="profession"
                            value="STUDENT"
                            onChange={handleChange}
                        />
                        <label className="text-lg font-normal cursor-pointer" htmlFor="student">
                            STUDENT
                        </label>
                    </div>
                    <div className="space-x-2">
                        <input
                            className=""
                            type="radio"
                            id="teacher"
                            name="profession"
                            value="TEACHER"
                            onChange={handleChange}
                        />
                        <label className="text-lg font-normal cursor-pointer" htmlFor="teacher">
                            TEACHER
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <label className="block text-sm font-semibold" htmlFor="username">
                    USERNAME
                </label>
                <input
                    onChange={handleChange}
                    className="bg-transparent border-b-[1px] border-b-gray-800 py-1 mb-1 w-full placeholder:text-sm placeholder:text-gray-800 focus:border-blue-500 focus:placeholder:text-blue-500 focus:outline-none"
                    id="username"
                    type="text"
                    placeholder="Example: yourname123"
                />
            </div>
            <div>
                <label className="block text-sm font-semibold" for="mobile">
                    MOBILE NO.
                </label>
                <input
                    onChange={handleChange}
                    className="bg-transparent border-b-[1px] border-b-gray-800 py-1 mb-1 w-full placeholder:text-sm placeholder:text-gray-800 focus:border-blue-500 focus:placeholder:text-blue-500 focus:outline-none"
                    id="mobile"
                    type="text"
                    placeholder="Enter your mobile number"
                />
            </div>
            <div>
                <label className="block text-sm font-semibold" htmlFor="">
                    EMAIL
                </label>
                <input
                    onChange={handleChange}
                    className="bg-transparent border-b-[1px] border-b-gray-800 py-1 mb-1 w-full placeholder:text-sm placeholder:text-gray-800 focus:border-blue-500 focus:placeholder:text-blue-500 focus:outline-none"
                    type="email"
                    placeholder="Enter your email address"
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
                    placeholder="Set a strong password"
                />
            </div>
            <button className="mx-auto my-3 text-white bg-blue-500 text-sm px-6 py-2 font-semibold rounded-full hover:bg-white hover:text-blue-500 shadow-md hover:shadow-blue-400 hover:scale-110 transition-all duration-200">
                Sign Up
            </button>
        </form>
    );
};

export default SignUp;
