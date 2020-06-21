import "@testing-library/jest-dom";

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Provider } from "react-redux";

import { initializeStore } from "../redux/createStore";

import Header from "../components/Header";

describe("", () => {
  test("Card List Heading renders properly", function () {
    const store = initializeStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    fireEvent.change(getByTestId("change-sort-by"), {
      target: { value: "priceLow" },
    });
    expect(getByTestId("change-sort-by")).toBeInTheDocument();
    expect(getByTestId("change-sort-by").value).toBe("priceLow");
  });
});
