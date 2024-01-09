// * Modules * //
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Image, Space } from 'antd'
import { Link } from 'react-router-dom';

// * Exports * //
import DefaultPerfilImage from '@/assets/images/profile/OIG.jpeg';
import { DivEffect } from './InitEffect';
import { useContext } from 'react';
import { AuthContext } from '@/app/context/authContext';

// * Components * //

export default function DropdownUser() {
    let userImage = null
    const { userInfo } = useContext(AuthContext);

    const items: MenuProps['items'] = [
        {
            label: (
                <div className="bg-white px-2 flex items-center hover:bg-white cursor-pointer">
                    <div>
                        <Image
                            src={userInfo.image_url ? userInfo.image_url : DefaultPerfilImage}
                            preview={false}
                            fallback={DefaultPerfilImage}
                            className='rounded-full'
                            width={"3rem"}
                            height={"3rem"}
                        />
                    </div>
                    <div className="ml-4 flex-1 py-4">
                        <div className="flex items-bottom justify-between">
                            <p className="text-grey-darkest mr-7">
                                {userInfo.name && userInfo.name.length > 20
                                    ? `${userInfo.name.slice(0, 20)}...`
                                    : userInfo.name || "----"}
                            </p>
                        </div>
                        <p className="text-grey-dark mt-1 text-xs">
                            {userInfo.formatted_created_at ? userInfo.formatted_created_at : '-'}{" "}
                            ({userInfo.timeCreatedAt ? userInfo.timeCreatedAt : '-'})
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

    return (
        <div className="">
            <Dropdown menu={{ items }} trigger={['click']} >
                <a onClick={(e) => e.preventDefault()}>
                    <DivEffect whileTap={{ scale: 0.9 }}>
                        <div className="cursor-pointer w-11 h-11 bg-slate-500 relative hover:bg-slate-400 p-1 bg-opacity-50 transition-all rounded-full flex justify-center items-center">
                            <Image
                                src={userInfo.image_url ? userInfo.image_url : DefaultPerfilImage}
                                preview={false}
                                fallback={DefaultPerfilImage}
                                className='rounded-full' />
                        </div>
                    </DivEffect>
                </a>
            </Dropdown>
        </div>
    )
}