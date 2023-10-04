"use client"
// * Modules * //
import React, { useEffect } from 'react';

// * Exports * //
import * as S from "./dashboard.styles"
import HeaderBarLayout from '../header';


// * Components * //

export default function DashboardLayout({ children }: childrenProps) {


    return (
        <S.Main>
            <HeaderBarLayout />
            <S.Box>
                <div className="w-full max-w-7xl px-3">
                    {children}
                </div>
            </S.Box>
        </S.Main>
    )
}