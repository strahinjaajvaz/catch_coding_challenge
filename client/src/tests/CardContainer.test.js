import "@testing-library/jest-dom";

import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { initializeStore } from "../redux/createStore";
import { initialize } from "../redux/actions/productActions";

import CardContainer from "../components/container/CardContainer";

const results = [
  {
    id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
    name: "Buy Olaplex No. 3 Hair Perfector",
    salePrice: 3145,
    retailPrice: 5000,
    imageUrl:
      "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
    quantityAvailable: 65,
  },
  {
    id: "f56cb6f2-a926-4ff4-80be-4518b0d1997d",
    name: "Havaianas Top Thongs -  Black",
    salePrice: 1499,
    retailPrice: 2500,
    imageUrl:
      "https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg",
    quantityAvailable: 71,
  },
];

test("Card Container renders right amount of children", function () {
  const store = initializeStore();
  store.dispatch(initialize({ results }));
  const { getByTestId } = render(
    <Provider store={store}>
      <CardContainer />
    </Provider>
  );

  expect(getByTestId("card-container").children.length).toBe(2);
});
