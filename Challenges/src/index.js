import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';

import "./styles/index.css";

import store from "./redux/store";
import AllRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <Provider store={store}>
    <AllRoutes />
  </Provider>
  );
