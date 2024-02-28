import { useState } from "react"
import Button from "../componnets/Button"
import Input from "../componnets/Input"
import {toast} from "sonner"

const Login = () => {
    //state campos de login e senha
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //state para ver se esta em darkmode
    const [darkMode, setDarkMode] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        //funcao, caso tiver os campos preenchidos, enviar um toast com sucesso, se nao, erro com preecnha os campos
        if(email && password){
            toast.success("Login efetuado com sucesso")
        }else{
            toast.error("Preencha todos os campos")
        }
    }

    //`
    return (
        //string literal pra somar o valor padrao de darkmode e lightmode
        
        <div className={`flex relative items-center justify-center w-screen h-screen 
            ${darkMode 
            ? "bg-gradient-to-r from-slate-800 to-slate-900"
            : "bg-gradient-to-r from-slate-100 to-slate-300"}`}
            >
            {/* toogle para mudar pra darkmode */}
            <button className={`absolute top-5 right-5 rounded-lg p-2
                ${darkMode 
                ? "text-white bg-black"
                : "text-black bg-white"}`}
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "Light" : "Dark"}
            </button>
           <div className={`flex flex-col items-center justify-center shadow-2xl w-[400px] h-[400px] rounded-lg
           ${darkMode 
            ?"bg-slate-800" 
            :"bg-slate-300"}` }>
                <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
                    L O G I N
                </h1>
            <form 
                className="flex flex-col gap-4 items-center justify-center w-full px-8"
                onSubmit={handleSubmit} 
             >
                    <Input label="Email"type="text" placeholder="Email"  darkMode={darkMode} onChange={(e) => setEmail(e.target.value)}/>
                    <Input label="Senha" type="password" placeholder="Senha" darkMode={darkMode} onChange={(e) => setPassword(e.target.value)}/>
                    {/* checkbox para relembrar a senha */}
                   <div className="flex items-center justify-between w-full mb-8">
                    <div className="flex items-center justify-center">
                        <input type="checkbox" name="remember" id="remember" />
                        <label className={`text-sm ${darkMode ? "text-white" : "text-black"}`} htmlFor="remember">Lembrar de mim</label>
                    </div>
                    {/* link pra esqueceu a senha */}
                    <a 
                    className={`text-sm
                        ${darkMode
                        ? "text-white"
                        : "text-black"}`}
                        href="#"
                    >
                        Esqueceu a senha?
                    </a>
                   </div>
                    <Button label="Entrar" darkMode={darkMode}/>
            </form>
           </div>
        </div>
    )
} 

export default Login