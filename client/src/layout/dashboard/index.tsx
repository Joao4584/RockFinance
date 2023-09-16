// * Modules * //
import React, { } from 'react';

// * Exports * //
import * as S from "./dashboard.styles"
import SideBarLayout from '../sideBar';


// * Components * //

export default function DashboardLayout({ children }: childrenProps) {

    return (
        <S.Main>
            <SideBarLayout />
            {children}
        </S.Main>
    )
}