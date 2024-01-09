// * Modules * //
import { useEffect, useState } from 'react';


// * Exports * //
import Logo from '@/assets/images/logo.png';

// * Components * //

export default function InitLoadingApp() {
    const [dotsLoading, setDotsLoading] = useState(".");


    useEffect(() => {
        const interval = setInterval(() => {
            setDots();
        }, 400);

        return () => clearInterval(interval);
    }, []);


    const setDots = () => {
        setDotsLoading((dots) => (dots.length >= 3 ? "." : dots + "."));
    };



    return (
        <section className="absolute w-full h-full flex justify-center items-center">
            <div className="w-28 flex flex-wrap justify-center gap-7">
                <div className='animate-bounce'>
                    <img src={Logo} className='animate-spin w-10 h-10' />
                </div>
                <p>Carregando <span>{dotsLoading}</span>

                </p>
            </div>
        </section>
    )
}