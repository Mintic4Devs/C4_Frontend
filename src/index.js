import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { SnackbarProvider } from 'notistack';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: process.env.REACT_APP_BACKEND
    })
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <SnackbarProvider>
            <Router>
                <App />
            </Router>
        </SnackbarProvider>
    </ApolloProvider>,
    document.getElementById("root")
);