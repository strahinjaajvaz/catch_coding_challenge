import "@testing-library/jest-dom";

import React from "react";
import { render } from "@testing-library/react";

import Card from "../components/Card";

import { formatCentsToDollars } from "../utils/helpers";

describe("", () => {
  test("Card renders properly", function () {
    const data = {
      id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
      name: "Buy Olaplex No. 3 Hair Perfector",
      salePrice: formatCentsToDollars(3145),
      retailPrice: formatCentsToDollars(5000),
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
      quantityAvailable: 65,
    };
    const { getByTestId, queryByTestId } = render(<Card {...data} />);

    expect(getByTestId("item-name").textContent).toBe(data.name);
    expect(getByTestId("item-sale-price").textContent).toBe(data.salePrice);
    expect(getByTestId("item-retail-price").textContent).toBe(data.retailPrice);
    expect(queryByTestId("item-sold-out")).toBeNull();
  });

  test("Card renders with retail price being undefined", function () {
    const data = {
      id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
      name: "Buy Olaplex No. 3 Hair Perfector",
      salePrice: formatCentsToDollars(3145),
      retailPrice: undefined,
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
      quantityAvailable: 65,
    };
    const { getByTestId, queryByTestId } = render(<Card {...data} />);

    expect(getByTestId("item-name").textContent).toBe(data.name);
    expect(getByTestId("item-sale-price").textContent).toBe(data.salePrice);
    expect(queryByTestId("item-retail-price")).toBeNull();
    expect(queryByTestId("item-sold-out")).toBeNull();
  });

  test("Card renders with the sold out sign visible", function () {
    const data = {
      id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
      name: "Buy Olaplex No. 3 Hair Perfector",
      salePrice: formatCentsToDollars(3145),
      retailPrice: formatCentsToDollars(5000),
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
      quantityAvailable: 0,
    };
    const { getByTestId } = render(<Card {...data} />);

    expect(getByTestId("item-name").textContent).toBe(data.name);
    expect(getByTestId("item-sale-price").textContent).toBe(data.salePrice);
    expect(getByTestId("item-retail-price").textContent).toBe(data.retailPrice);
    expect(getByTestId("item-sold-out")).toBeInTheDocument();
  });
});
