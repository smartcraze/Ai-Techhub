import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Register = () => {
    const registerForm = useRef(null)
    const { registerUser } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = registerForm.current.name.value
        const email = registerForm.current.email.value
        const password1 = registerForm.current.password1.value
        const password2 = registerForm.current.password2.value

        if (password1 !== password2) {
            alert('Passwords did not match!')
            return
        }

        const userInfo = { name, email, password1, password2 }

        registerUser(userInfo)
    }

    return (
        <div className="flex justify-center items-center h-[92vh] bg-gray-100">
            <div className="login-register-container max-w-[25rem] w-full mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit} ref={registerForm}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Enter name..."
                            className="form-input mt-1 block w-full border rounded-md px-4 py-2 shadow-sm"
                        />
                    </div>
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
                            name="password1"
                            placeholder="Enter password..."
                            autoComplete="password1"
                            className="form-input mt-1 block w-full border rounded-md px-4 py-2 shadow-sm"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                        <input
                            type="password"
                            name="password2"
                            placeholder="Confirm password..."
                            autoComplete="password2"
                            className="form-input mt-1 block w-full border rounded-md px-4 py-2 shadow-sm"
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-gray-600 text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
