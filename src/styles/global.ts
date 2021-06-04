import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    
    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
    
    --background: #f0f2f5;
    --shape: #fff;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body { 
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 576px;
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.6);
    }
  }

`