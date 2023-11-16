// * Modules * //
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Space } from 'antd'
import { Link } from 'react-router-dom';

// * Exports * //
import DefaultPerfilImage from '@/assets/images/profile/OIG.jpeg';
import { DivEffect } from './InitEffect';

// * Components * //
const items: MenuProps['items'] = [
    {
        label: (
            <div className="bg-white px-2 flex items-center hover:bg-white cursor-pointer">
                <div>
                    <img className="h-12 w-12 rounded-full"
                        src="https://www.famousbirthdays.com/headshots/russell-crowe-6.jpg" />
                </div>
                <div className="ml-4 flex-1 py-4">
                    <div className="flex items-bottom justify-between">
                        <p className="text-grey-darkest">
                            João Roberto
                        </p>
                        <p className="text-xs text-grey-darkest">
                            12:45 pm
                        </p>
                    </div>
                    <p className="text-grey-dark mt-1 text-xs">
                        Criada em: 11/03/2023
                    </p>
                </div>
            </div>
        ),
        style: { margin: 0, padding: 0, marginBottom: '9' },
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link to="/dashboard/editar-contas">
                Editar Conta
            </Link>
        ),
        key: '1',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Joao4584/RockFinance">
                <span className='mr-40'>
                    GitHub
                </span>
            </a>
        ),
        key: '2',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link to="/auth">
                <span className='mr-40'>
                    Sair
                </span>
            </Link>
        ),
        key: '3',
    },
];

export default function DropdownUser() {
    let userImage = null
    return (
        <div className="">
            <Dropdown menu={{ items }} trigger={['click']} >
                <a onClick={(e) => e.preventDefault()}>
                    <DivEffect whileTap={{ scale: 0.9 }}>
                        <div className="cursor-pointer w-11 h-11 bg-slate-500 relative  hover:bg-slate-400 bg-opacity-50 transition-all rounded-full flex justify-center items-center">
                            <img src={userImage ? userImage : DefaultPerfilImage} alt="Icon Perfil" style={{ width: "2.3rem", height: "2.3rem", borderRadius: '100%' }} />
                        </div>
                    </DivEffect>
                </a>
            </Dropdown>
        </div>
    )
}