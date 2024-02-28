//label e input
import React from 'react'

const Input = ({label, darkMode, ...rest}) => {
    return (
        <div className='flex flex-col w-full'>
            <label 
                className={`text-sm p-2 
                    ${darkMode
                    ? "text-white"
                    : "text-black"}`}
                 htmlFor={label}
            >
                    {label}
            </label>
            <input className={`p-2 bg-slate-200 rounded-lg
                ${darkMode
                ? "bg-slate-600 text-white border border-gray-400"
                : "bg-white text-black border border-gray-400" }`} {...rest}/>
        </div>
    )
}

export default Input