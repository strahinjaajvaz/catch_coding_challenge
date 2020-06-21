import "@testing-library/jest-dom";

import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { initializeStore } from "../redux/createStore";
import { initialize } from "../redux/actions/productActions";

import ProductListHeading from "../components/ProductListHeading";

test("Product List Heading renders properly", function () {
  const query = "best sellers",
    total = 102,
    page = 1,
    pages = 3;

  const store = initializeStore();
  store.dispatch(initialize({ metadata: { query, total, page, pages } }));
  const { getByTestId } = render(
    <Provider store={store}>
      <ProductListHeading
        query={query}
        total={total}
        page={page}
        pages={pages}
      />
    </Provider>
  );

  expect(getByTestId("product-list-heading")).toHaveTextContent(query);
  expect(getByTestId("total_items")).toHaveTextContent(total);
  expect(getByTestId("pages")).toHaveTextContent(`Page: ${page} of ${pages}`);
});
