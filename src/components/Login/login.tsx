import React, { useState } from 'react';
import Image from 'next/image';
import company1 from '../../../public/company1.png'; 
import Link from 'next/link';

export default function Login() {
    const [loginButton, setLoginButton] = useState(false);

    const handleDashboard = () => {
        setLoginButton(true);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-12">
            <div className="p-4">
                <Image
                    src={company1}
                    alt="Company Logo"
                    width={400}
                    height={600}
                />
            </div>

            {/* Show buttons or login button with link based on loginButton state */}
            {!loginButton ? (
                <>
                    <button 
                        className="mt-4 px-4 w-64 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={handleDashboard}
                    >
                        PNS Turning dashboard
                    </button>

                    <button 
                        className="mt-4 px-4 py-2 w-64 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={handleDashboard}
                    >
                        PNS Excutive dashboard
                    </button>

                    <button 
                        className="mt-4 px-4 py-2 w-64 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={handleDashboard}
                    >
                        PNS Ambassador dashboard
                    </button>
                </>
            ) : (
                <div className=''>
                        <button 
                            className="mt-8 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-200 hover:text-black hover:font-semibold"
                        >
                            Login
                        </button>
                        <br />
                        <Link 
                            href="/Login" 
                            className="mt-4 block text-blue-500 hover:underline"
                        >
                            Back to Home
                        </Link>
                </div>
            )}
        </div>
    );
}
