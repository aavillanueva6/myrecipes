import React, { useState } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [theme, changeTheme] = useState("dark");

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav theme={theme} />
          <Routes>
            <Route
              path="/"
              element={<Home theme={theme} />}
            />
            {/* <Route
              path="/:username"
              element={<Profile />}
            />
            <Route
              path="/me"
              element={<Profile />}
            />
            <Route
              path="/recipe/:recipeId"
              element={<Recipe />}
            /> */}
            <Route
              path="/login"
              element={<LoginForm />}
            />
            <Route
              path="/signup"
              element={<SignupForm />}
            />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
