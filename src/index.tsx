import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./UistateManagment/store";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queries } from "@testing-library/react";
import AddItemForm from "./components/AddItemForm";
import Files from "./components/Files";
import Router from "./routes/sections";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n";
import "./locales/i18n";
// const router = createBrowserRouter([
//   {
//     path: "/options",
//     element: <div>options</div>,
//   },
//   { path: "/add-item", element: <AddItemForm /> },
//   {
//     path: "/",
//     element: <App />,
//   },
//   { path: "/files/:id?", element: <Files /> },
// ]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},

    mutations: {},
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider
      i18n={i18n}
      defaultNS={"translation"}
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={Router()} />
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
