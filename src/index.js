import React from "react";
import ReactDOM from "react-dom";
import { MdAllInbox } from "react-icons/md";

import App from "./App";

export default function Main() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
