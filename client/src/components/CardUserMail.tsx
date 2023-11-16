// * Modules * //
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { DivEffect } from './InitEffect'
import { Button } from 'antd';

// * Exports * //


// * Components * //
export function CardUserMail(props: { id: number, sizeNumbers: number, info: string }): ReactElement {
    const inputRefs: any = Array.from({ length: props.sizeNumbers }, () => useRef(null));
    const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    useEffect(() => {
        const handleKeyPress = (index: number, event: any) => {
            const input: HTMLInputElement | null = inputRefs[index].current;

            if (input) {
                if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
                    inputRefs[index - 1].current.focus();
                } else if (input.value.length === 1 && event.key !== 'Backspace' && index < inputRefs.length - 1) {
                    inputRefs[index + 1].current.focus();
                }
            }
        };
        inputRefs.forEach((ref: any, index: any) => {
            if (ref.current) {
                ref.current.addEventListener('keydown', (event: any) => handleKeyPress(index, event));
            }
        });

        return () => {
            inputRefs.forEach((ref: any) => {
                if (ref.current) {
                    ref.current.removeEventListener('keydown', handleKeyPress);
                }
            });
        };
    }, []);

    const componentsArray = Array.from({ length: props.sizeNumbers }, (_, index) => (
        <div key={index} className="w-16 h-16">
            <input
                ref={inputRefs[index]}
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name=""
                id=""
                maxLength={1}
                required
            />
        </div>
    ));
    return (
        <DivEffect>
            <div className={`relative bg-white px-6 pb-9  mx-auto w-full max-w-lg rounded-2xl ${props.info == "RegisterPage" ? "pt-40" : "pt-10"}`}>
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Verificação De Email</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>We have sent a code to your email ba**@dipainhouse.com</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col space-y-16">
                            <div className="flex flex-row items-center gap-4 justify-center mx-auto w-full max-w-2xl">
                                {componentsArray}
                            </div>

                            <div className="flex flex-col space-y-5">
                                <div>
                                    <Button type="text" className="w-full h-12 block !bg-indigo-500 hover:!bg-indigo-400 focus:!bg-indigo-400 text-white font-semibold rounded-lg
                                        px-4 py-3 mt-6 hover:!text-white"
                                        loading={loadings[1]}
                                        onClick={() => enterLoading(1)}
                                    >
                                        Verificar
                                    </Button>
                                </div>

                                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                    <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DivEffect>
    )
}