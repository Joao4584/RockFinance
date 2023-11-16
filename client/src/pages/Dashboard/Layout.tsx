// * Modules * //
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

// * Exports * //
import HeaderBarLayout from '../../components/NavBar';
import SvgImage from '../../assets/images/mobileBannerError.jpg';
import { DivEffect } from '../../components/InitEffect';
import { ImageProfileModal } from '@/components/Users/ImgProfile';

// * Components * //

export default function DashboardLayout({ children }: childrenProps) {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowPopup(window.innerWidth < 565);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Main>
            <ImageProfileModal />
            <HeaderBarLayout />
            <Box>
                <div className="w-full max-w-7xl px-3">
                    {children}
                </div>
            </Box>
            {showPopup && (
                <PopUPMobile />
            )}
        </Main>
    )
}

function PopUPMobile() {

    return (
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

const Main = tw.div`
  bg-gray-100
`;
const Box = tw.div`
    relative
    z-10
    flex
    items-center
    justify-center
    
    
`;