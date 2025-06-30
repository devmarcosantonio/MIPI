import { ChartPieIcon } from 'lucide-react';
import logoMipi from '../../assets/images/mipi-logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type menuType = {
    icon: React.ComponentType;
    label: string;
    roles: string[];
    to: string;
};

const menu: menuType[] = [
    {
        icon: ChartPieIcon,
        label: 'OEE',
        roles: ['admin'],
        to: '/oee',
    },
]

export default function SideBar() {

    const userRoles = ['admin']

    const [sideBarOpen, setSideBarOpen] = useState(false)

    return (
        <aside className={`flex flex-col p-4 bg-[#2F2E79] text-white h-screen duration-200 ${sideBarOpen ? 'w-60' : 'w-20'}`}>

            <span className='flex justify-center my-10  w-full' onClick={() => setSideBarOpen(!sideBarOpen)}>
                <img src={logoMipi} alt="Logo Mipi" className='w-20 h-auto'
                    style={{
                        filter: 'brightness(0) invert(1)'
                    }} />
            </span>
            <nav>
                <ul>
                    {menu.map((item) => (
                        userRoles.some(role => item.roles.includes(role)) && (
                            <li key={item.label}>
                                <Link
                                    to={item.to}
                                    className={`flex items-center ${sideBarOpen ? 'gap-3' : 'gap-0'} p-2 duration-200 hover:text-[#2F2E79] hover:bg-white rounded`}
                                >
                                    <span className='flex items-center justify-center w-8 h-8'>
                                        <item.icon />
                                    </span>
                                    <span className={`duration-200 ${sideBarOpen ? 'text-1xl' : 'text-[0px]'}`}>{item.label}</span>
                                </Link>
                            </li>
                        )
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
