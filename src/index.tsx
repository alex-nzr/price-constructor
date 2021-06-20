import React from 'react';
import ReactDOM from 'react-dom';
import './lib/css/reset.css';
import App from './components/App';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import {store} from "./store/"
import {theme} from "./store/theme/theme";

const GlobalStyle = createGlobalStyle`
  html{
    font-family: 'PT Sans Caption', sans-serif;
    background-color: ${theme.colors.bodyBg};
    & div .left-side{
      flex-grow: 1;
      & textarea{
        display: block;
        margin-top: 10px;
      }
      
    }
    & div .right-side{
      --f: 300px;
      flex: 0 0 var(--f);
      margin-left: 50px;
      & img{
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
      }
    }
    & .hidden{
      display: none !important;
    }
  }
`;

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App />
        </ThemeProvider>
    </Provider>
  ,
  document.getElementById('root')
);