import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const FormWrap = styled.div`
    position: relative;
    background: #fff;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
    box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
    width: 100%;
    max-width: 445px;
    padding: 3rem;

    img {
        display: block;
        max-width: 125px;
        margin: 0 auto 1.5rem auto;
    }

    h3 {
        color: var(--text-title);
        text-align: center;
        margin-bottom: 1rem;
    }

    p {
        text-align: center;
        margin-bottom: 1.5rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;

    input {
        font-size: 16px;
        border: none;
        border-radius: 5px;
        padding: 12.5px 1rem;
        margin-bottom: 1rem;
        background: rgba(0, 0, 0, 0.05);
    }
`;

export const LoginButton = styled.button`
    font-size: 1rem;
    color: white;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    display: block;
    margin: 0 auto;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;
