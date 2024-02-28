const Button = ({label, darkMode, ...rest}) => {
    return (
        <button className={`bg-emerald-500  hover:bg-emerald-600 p-2 rounded-lg w-full 
        ${darkMode
        ? "text-white"
        : "text-green-950"}
        `} {...rest}>
            {label}
        </button>
    )
}

export default Button