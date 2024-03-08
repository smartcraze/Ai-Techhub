import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Login = () => {
    const { user, loginUser } = useAuth()
    const navigate = useNavigate()

    const loginForm = useRef(null)

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value

        const userInfo = { email, password }

        loginUser(userInfo)
    }

    return (
        <div className="flex justify-center items-center h-[92vh] bg-gray-100">
            <div className="login-register-container max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit} ref={loginForm}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Enter email..."
                            className="form-input mt-1 block w-full border rounded-md px-4 py-2 shadow-sm"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password..."
                            autoComplete="password"
                            className="form-input mt-1 block w-full border rounded-md px-4 py-2 shadow-sm"
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-gray-600 text-center">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
