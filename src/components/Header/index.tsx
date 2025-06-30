import React from 'react'
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className='flex justify-between items-center mb-5'>
            <h1 className="text-2xl font-bold text-[#2F2E79]">Olá, Usuário!</h1>
            <button onClick={() => {navigate('/login')}} className='absolute right-6 px-4 py-2 rounded-lg flex justify-between items-center hover:border hover:border-[#2F2E79] hover:bg-[#2F2E79] hover:text-white transition-colors duration-200 text-[#2F2E79] font-semibold'>
                <LogOut className='inline-block mr-2' />
                <span className=''>Logout</span>
            </button>
        </header>
    )
}
