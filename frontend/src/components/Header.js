import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    return (
        <header
            className="h-[500px] bg-cover bg-center"
            style={{
                backgroundImage: `url(${props.bgImage})`,
            }}
        >
            <div className="flex-col h-full w-full backdrop-blur-sm pb-10 pt-36 backdrop-brightness-50">
                <h1 className="text-center text-6xl text-cyan-300 py-10 font-semibold">SVNIT Achievement Portal</h1>
                <p className="text-center text-white px-48 font-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolore porro itaque quasi
                    aspernatur quisquam reprehenderit. Aut, ex autem nulla vero et ducimus praesentium eaque modi sed
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolore porro itaque quasi
                    aspernatur quisquam reprehenderit. Aut, ex autem nulla vero et ducimus praesentium eaque modi sed
                </p>
                {/* No need of this one. Thats why removed */}
                {/* {!user && (

                    <div className="flex justify-center space-x-6 py-10">
                        <Link
                            to="/signup"
                            className="text-center w-32 rounded-2xl bg-blue-600 text-sm text-white hover:bg-blue-700 md:py-2 md:px-1 md:text-md transition-colors font-medium"
                        >
                            Sign Up
                        </Link>
                        <Link
                            to="/login"
                            className="text-center w-32 rounded-2xl bg-blue-100 py-1 text-sm text-blue-700 hover:bg-blue-200 md:py-2 md:px-1 md:text-md transition-colors font-medium "
                        >
                            Login
                        </Link>
                    </div>
                )} */}


            </div>
        </header>
    );
}
