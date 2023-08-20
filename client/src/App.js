import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import AddClientModel from "./components/AddClientModel";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <AddClientModel />
            <Projects />
            <Clients />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
