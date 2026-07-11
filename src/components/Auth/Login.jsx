import React, { useState } from "react"


const Login = ({handleLogin})=>{
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()

        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
    return(
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form className="flex flex-col item-center justify-center"
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                >
                    <input
                    value= {email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}

                     required className="text-white outline-none border-2 border-emerald-600 py-3 px-6 text-xl rounded-full bg-transparent placeholder:text-gray-400" type="email" placeholder="Enter your email"/>
                    <input
                    value= {password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}

                    required className="text-white outline-none border-2 border-emerald-600 py-3 px-6 text-xl rounded-full bg-transparent mt-3 placeholder:text-gray-400" type="password" placeholder="Enter your password"/>
                    <button className="text-white border-2 border-emerald-600 outline-none bg-emerald-600 hover:bg-emerald-700 py-3 px-5 text-xl rounded-full mt-5" type="submit">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login