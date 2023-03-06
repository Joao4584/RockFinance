// * Modules * //
import styled from "styled-components";
import SvgBackground from "/lib/svg/background-auth.svg";
import ImageCard from "/lib/image/login-card.png";

// * Styles * //
export const Page = styled.div`
    background-image: url(${SvgBackground});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    position: relative;
`;

export const Card = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 99%;
    max-width: 810px;
    height: 450px;
    background-color: #ebebebc1;
    backdrop-filter: blur(5px);
    border: solid 1px #e6e6e65a;
    border-radius: 1.3rem;
    display: flex;

    .login-card {
        width: 50%;
        height: 100%;
    }
    .banner-card {
        width: 50%;
        height: 100%;
        border-top-left-radius: 1.3rem;
        border-bottom-left-radius: 1.3rem;

        .card-image {
            width: 140%;
            height: 100%;
            background-image: url(${ImageCard});
            background-size: contain;
            background-repeat: no-repeat;
            border-top-left-radius: 1.3rem;
            border-bottom-left-radius: 1.3rem;
        }
    }
`;
