// * Modules * //
import styled from "styled-components";

// * Styles * //
export const Navigation = styled.div`
    position: fixed;
    width: 90%;
    max-width: 730px;
    height: 5.5rem;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem;

    .nav-bar {
        background: linear-gradient(0deg, #2f3569, #2f3569),
            linear-gradient(0deg, rgba(150, 150, 150, 0.21), rgba(150, 150, 150, 0.21));
        border: 1px solid rgba(150, 150, 150, 0.103);
        box-shadow: 0px 4px 102px 0px rgba(0, 0, 0, 0.08);
        width: 100%;
        height: 100%;
        border-top-left-radius: 2.3rem;
        border-top-right-radius: 2.3rem;
        border-bottom-left-radius: 0.6rem;
        border-bottom-right-radius: 0.6rem;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4%;

        li {
            width: 60px;
            height: 60px;
            background: rgba(72, 81, 156, 0.51);
            border-radius: 15px;
            transition-duration: 0.5s;

            svg {
                width: 44%;
                height: 44%;
                position: relative;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                fill: #dddddd;
            }

            :hover {
                background: #48519c;
                border: 1px solid rgba(197, 197, 197, 0.35);
                box-shadow: 0px 4px 45px 7px rgba(114, 114, 114, 0.2);
                cursor: pointer;
                transition-duration: 0.5s;
            }
        }
        a.active {
            transform: translateY(-20px);
            transition-duration: 0.5s;

            li {
                background: #48519c;
                border: 1px solid rgba(197, 197, 197, 0.35);
                box-shadow: 0px 4px 45px 7px rgba(114, 114, 114, 0.274);
                width: 65px;
                height: 65px;

                svg {
                    width: 44%;
                    height: 44%;
                    position: relative;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    fill: #ffffff;
                }
            }
        }
    }
`;
