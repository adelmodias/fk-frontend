import { styled } from "styled-components";

export const PageWrap = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const SidebarWrap = styled.div`
    padding-top: 0.5rem;
    padding-right: 1.5rem;
    width: 100%;
    max-width: 164px;

    span {
        display: block;
        font-size: 14px;
        cursor: pointer;

        & + span {
            margin-top: 10px;
        }
    }
`;

export const ContentWrap = styled.div`
    /* background: white; */
    width: 100%;
    max-width: 911px;
    margin-left: auto;
    /* padding: 2rem;
    border-radius: 12px; */
`;
