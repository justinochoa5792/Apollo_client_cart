import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { CustomInMemoryCache } from "./cache";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: CustomInMemoryCache,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
);
