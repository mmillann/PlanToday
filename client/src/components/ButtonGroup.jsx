import React from "react";
import "tailwindcss/tailwind.css";

const ButtonGroup = () => {
    return (
        <div className="flex flex-col items-center">
            <button className="flex justify-center items-center bg-blue-500 w-60 h-60 rounded-full mb-12 border-none">
                <i className="material-icons text-white text-4xl">person_add</i>
            </button>
            <button className="flex justify-center items-center bg-red-700 w-60 h-60 rounded-full mb-12 border-none">
                <i className="material-icons text-white text-4xl">
                    favorite_border
                </i>
            </button>
            <button className="flex justify-center items-center bg-indigo-800 w-60 h-60 rounded-full mb-12 border-none">
                <i className="material-icons text-white text-4xl">
                    chat_bubble_outline
                </i>
            </button>
            <button className="flex justify-center items-center bg-brown-700 w-60 h-60 rounded-full mb-12 border-none">
                <i className="material-icons text-white text-4xl">share</i>
            </button>
            <button className="flex justify-center items-center bg-green-800 w-60 h-60 rounded-full border-none">
                <i className="material-icons text-white text-4xl">person_add</i>
            </button>
        </div>
    );
};

export default ButtonGroup;
