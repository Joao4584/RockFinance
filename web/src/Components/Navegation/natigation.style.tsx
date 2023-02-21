// * Modules * //
import styled from "styled-components";

// * Styles * //
export const Navigation = styled.div`
    position: fixed;
    width: 90%;
    max-width: 820px;
    height: 5.5rem;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.4rem;

    .nav-bar {
        background-color: #a5a5a545;
        border: 1px solid #96969636;
        width: 100%;
        height: 100%;
        border-top-left-radius: 1.7rem;
        border-top-right-radius: 1.7rem;
        border-bottom-left-radius: 0.6rem;
        border-bottom-right-radius: 0.6rem;
    }
`;
