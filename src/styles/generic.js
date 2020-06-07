import { createGlobalStyle } from 'styled-components';
import colors from './settings';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    body {

        background-color: ${colors.black};
    }

    body, button, a {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: .9rem;
    }


`;
