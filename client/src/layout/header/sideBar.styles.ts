import tw from "tailwind-styled-components";

export const SideBar = tw.header`
    w-full
    relative
    h-40
    z-10
    text-slate-100
`;
export const Header = tw.section`
    w-full 
    h-20
    flex
    justify-center
    items-center
`;
export const Content = tw.div`
    flex w-full max-w-7xl px-3 mt-1 h-full flex justify-between items-center
`;
export const Menu = tw.ul`
    ml-16
    flex 
    justify-center
    items-center
    gap-4
`;
export const Back = tw.div`
    absolute
    w-full
    h-32
    -z-30
`;