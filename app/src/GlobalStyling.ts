import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, h1, h3, p{
        margin:0;
        padding:0;
        font-size:16px;
        font-family: Arial, Helvetica, sans-serif;
        color:white;
        @media (max-width:320px)  {
            font-size:10px;
        }
        @media (min-width:320px)  {
            font-size:14px;
        }
        @media (min-width:720px){
            font-size:17px;
        }
    }
`;
