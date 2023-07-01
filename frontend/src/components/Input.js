import React from "react";

const Input = (props) => {
    return (
        <input
            onChange={props.onChange}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            className="block w-full rounded-md border py-2 text-gray-900 border-gray-300 placeholder-gray-500 sm:text-sm px-3 focus:border-indigo-500 focus:outline focus:ring-indigo-500"
        />
    );
};

export default Input;
