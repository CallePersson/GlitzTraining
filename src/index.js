import React from "react";
import { render } from "react-dom";
import { GlitzClient } from "@glitz/core";
import { GlitzProvider } from "@glitz/react";
import transformers from "@glitz/transformers";
import "./index.css";
import App from "./App";


const glitz = new GlitzClient({ transformer: transformers() });

render(
    <GlitzProvider glitz={glitz}>
      <App />
    </GlitzProvider>,
  document.getElementById("root")
);
