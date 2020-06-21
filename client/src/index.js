import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Global, css } from "@emotion/core";

import { Container } from "./components/Container";

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

        :root {
          --soldOutRed: rgb(245, 0, 0);
          --white: #ffffff;
        }

        body,
        html {
          margin: 0;
          padding: 0;
          font-family: "Poppins";
        }
      `}
    />
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
