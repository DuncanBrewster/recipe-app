import styled from "styled-components";

export const Title = styled.h1`
    font-size: 50px;
    font-weight: 400;

    @media screen and (max-width: 1000px) {
      font-size: 40px;
    }
`;

export const AppSearchForm = styled.form`
    margin-top: 20px;
    margin-bottom: 30px;
`;

export const Input = styled.input`
    padding: 6px 16px;
    min-width: 200px;
    max-width: 90vw;
    font-size: 20px;
    border-radius: 25px;
    border: 2px solid #27282c;
    background-color: #27282c;
    color: white;
    box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);

    @media screen and (max-width: 1000px) {
      font-size: 15px;
    }
`;