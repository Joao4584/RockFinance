// * Modules * //
import React, { ReactElement } from 'react';

// * Exports * //
import * as S from './init.styles'
import { DivEffect } from '../../../components/InitEffect';


// * Components * //
export function Dashboard(): ReactElement {

    return (
        <DivEffect>
            <section className='pb-14'>

                <S.Main>
                    <div className="grid grid-cols-5 md:grid-cols-4 grid-rows-5 gap-4 w-full h-full">
                        <S.GridCard className="col-span-3 row-span-5 md:row-span-4">1</S.GridCard>
                        <S.GridCard className="col-start-5 flex row-start-1 md:col-span-1 md:row-start-5">
                            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                                <div className="rounded-full bg-lightPrimary p-3 bg-purple-200">
                                    <span className="flex items-center text-brand-500 text-purple-600">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={0}
                                            className="h-6 w-6"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                                <p className="font-dm text-sm font-medium text-gray-600">Your Balance</p>
                                <h4 className="text-xl font-bold text-navy-700 text-gray-500">$1,000</h4>
                            </div>
                        </S.GridCard>
                        <S.GridCard className="col-start-5 flex row-start-2 md:col-span-2 md:row-start-5">
                            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                                <div className="rounded-full bg-lightPrimary p-3 bg-purple-200">
                                    <span className="flex items-center text-brand-500 text-purple-600">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={0}
                                            className="h-6 w-6"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                                <p className="font-dm text-sm font-medium text-gray-600">Your Balance</p>
                                <h4 className="text-xl font-bold text-navy-700 text-gray-500">$1,000</h4>
                            </div>
                        </S.GridCard>
                        <S.GridCard className="row-span-3 md:col-span-2 col-start-4">4</S.GridCard>
                        <S.GridCard className="col-span-2 col-start-4 row-start-4">5</S.GridCard>
                        <S.GridCard className="col-start-5 flex row-start-3 md:col-span-1 md:row-start-6">
                            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                                <div className="rounded-full bg-lightPrimary p-3 bg-purple-200">
                                    <span className="flex items-center text-brand-500 text-purple-600">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            className="h-7 w-7"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                                <p className="font-dm text-sm font-medium text-gray-600">Sales</p>
                                <h4 className="text-xl font-bold text-navy-700 text-gray-500">$1,320</h4>
                            </div>
                        </S.GridCard>
                        <S.GridCard className="col-span-2 col-start-4 row-start-5">7</S.GridCard>
                    </div>
                </S.Main>
            </section>
        </DivEffect>
    )
}