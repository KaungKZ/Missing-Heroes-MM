import { createGlobalStyle } from "styled-components";
import "./typography.css";

const Global_styles = createGlobalStyle`

html {
    --blue-bg-color: #E7F6FC;
    --general-blue-color: #7771DB;
    --text-color: #353535;
    --light-text-color: #5a5a5a;
    --body-background-color: #fdfdfd;
    --small-margin: 7px;
    --large-section-margin: 119px;
    --section-margin: 64px;
    --primary-font: 'Poppins', sans-serif;
    --title-font: 'Raleway', sans-serif;
    --section-title-font-size: 1.8rem;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--body-background-color);
}

@media (max-width: 600px) {
    html {
    --section-margin: 50px;

    }
}

@media (max-width: 320px) {
    html {

    }
}


`;

export default Global_styles;
