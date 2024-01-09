// * Modules * //
import { useContext, useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

// * Exports * //
import HeaderBarLayout from '../../components/NavBar';
import SvgImage from '../../assets/images/mobileBannerError.jpg';
import { DivEffect } from '../../components/InitEffect';
import { ImageProfileModal } from '@/components/Users/ImgProfile';
import InitLoadingApp from '@/components/Loading/InitApp';
import { getStatusUser } from '@/app/api/auth';
import { AxiosResponse } from 'axios';
import { UserDisabled } from '@/components/Users/UserDisabled';
import { AuthContext } from '@/app/context/authContext';

// * Components * //

export default function DashboardLayout({ children }: childrenProps) {
    const { setUserInfo } = useContext(AuthContext);

    const [showPopup, setShowPopup] = useState(false);
    const [initUser, setInitUser] = useState<boolean>(false);
    const [popUp, setPopUp] = useState(<></>);

    const handleResize = () => {
        setShowPopup(window.innerWidth < 565);
    };

    useEffect(() => {
        checkCredentials();
        const interval = setInterval(() => {
            checkCredentials();

        }, 60000);

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const checkCredentials = async () => {
        if (!initUser) {
            const result: AxiosResponse<any, any> = await getStatusUser();

            if (result.status == 200) {
                setTimeout(() => {
                    setInitUser(true);
                }, 1500);

                if (result.data?.data) {
                    let data = result.data?.data;
                    setUserInfo(data);
                    stepsModal(data);
                }
            }
        }
    }

    const stepsModal = (data: any): void => {
        setPopUp(<></>);

        if (!data.status) {
            setPopUp(<UserDisabled />);
            return;
        }

        if (data.image_url == "" || data.image_url == null) {
            setPopUp(<ImageProfileModal />);
            return;
        }

    }

    return initUser ? (
        <main className='bg-gray-100'>
            {popUp}
            < HeaderBarLayout />
            <div className='relative z-10 flex items-center justify-center'>
                <div className="w-full max-w-7xl px-3">
                    {children}
                </div>
            </div>
            {
                showPopup && (
                    <div className="fixed z-20 backdrop-blur-lg top-0 left-0" style={{ width: '99vw', height: '100vh', backgroundColor: '#20202096' }}>
                        <DivEffect>
                            <div className="flex flex-col p-5 mt-44 pb-20 rounded-lg shadow bg-white">
                                <div className="flex flex-col items-center text-center">
                                    <div className="inline-block p-4 bg-yellow-50 rounded-full">
                                        <svg className="w-12 h-12 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" /></svg>
                                    </div>
                                    <h2 className="mt-2 font-semibold text-gray-800">Sistema feito para computador :(</h2>
                                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">Acesse em um tablet ou computador para continuar...</p>
                                </div>
                            </div>
                        </DivEffect>
                    </div>
                )
            }
        </main >
    ) : <InitLoadingApp />

}

