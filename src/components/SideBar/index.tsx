import { ChartPieIcon, Clock } from 'lucide-react';
import logoMipi from '../../assets/images/mipi-logo.png';
import { NavLink } from 'react-router-dom';
import { useSideBar } from '../../hooks/useSideBar';


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
    {
        icon: Clock,
        label: 'Operação Diária',
        roles: ['admin'],
        to: '/operacao-diaria',
    }
]

export default function SideBar() {

    const userRoles = ['admin']

    const { isOpen, toggleSidebar } = useSideBar();

    return (
        <aside className={`flex flex-col p-4 bg-[#2F2E79] text-white  duration-200 ${isOpen ? 'w-60' : 'w-20'} h-full`}>

            <span className='flex justify-center my-10  w-full' onClick={toggleSidebar}>
                <img src={logoMipi} alt="Logo Mipi" className='w-20 h-auto'
                    style={{
                        filter: 'brightness(0) invert(1)'
                    }} />
            </span>
            <nav>
                <ul className='flex flex-col gap-2'>
                    {menu.map((item) => (
                        userRoles.some(role => item.roles.includes(role)) && (
                            <li key={item.label}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `flex items-center ${isOpen ? 'gap-3' : 'gap-0'} p-2 duration-200 rounded
                                        ${isActive ? 'text-[#2F2E79] bg-white' : 'hover:text-[#2F2E79] hover:bg-white'}`
                                    }
                                >
                                    <span className='flex items-center justify-center w-8 h-8'>
                                        <item.icon />
                                    </span>
                                    <span className={`duration-200 ${isOpen ? 'text-1xl' : 'text-[0px]'}`}>{item.label}</span>
                                </NavLink>
                            </li>
                        )
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
