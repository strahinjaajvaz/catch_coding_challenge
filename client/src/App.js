import React from "react";
import { Provider } from "react-redux";

import Header from "./components/Header";
import CardContainer from "./components/container/CardContainer";

import { initializeStore } from "./redux/createStore";
import { useFetch } from "./utils/useFetch";

import { initialize } from "./redux/actions/productActions";

const url = "http://localhost:4000/api/products";

function App() {
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  else if (error) return <p>{error}</p>;
  else if (!data) return null;
  else {
    const store = initializeStore();
    store.dispatch(initialize(data));
    return (
      <Provider store={store}>
        <Header />
        <CardContainer />
      </Provider>
    );
  }
}

export default App;
