import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Global_styles from "./utils/GlobalStyles";
import Layout from "./utils/Layout";

ReactDOM.render(
  <>
    <Global_styles />
    <Layout>
      <App />
    </Layout>
  </>,
  document.getElementById("root")
);
