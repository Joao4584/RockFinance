import tw from "tailwind-styled-components"

export const ContainerSection = tw.section`flex md:flex-row h-screen items-center`;

export const LogoImg = tw.img`absolute top-5 left-6 opacity-100 z-50 saturate-50`;


export const CardText = tw.div`bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-2/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center`;

export const CardBanner = tw.div`bg-blue-900 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen`