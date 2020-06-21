/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";

import Card from "../Card";

import { sortAsc, sortDesc } from "../../utils/helpers";

function CardContainer({ results, sortBy }) {
  const sortedList = results.sort(sortBy === "priceHigh" ? sortAsc : sortDesc);
  return (
    <div
      data-testid="card-container"
      css={css`
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-gap: 10px;

        @media (max-width: 900px) {
          grid-template-columns: repeat(3, auto);
        }
        @media (max-width: 650px) {
          grid-template-columns: repeat(2, auto);
        }
      `}
    >
      {sortedList.map((item) => (
        <Card
          key={item.id}
          {...item}
          retailPrice={
            item.retailPrice !== 0
              ? `$${(item.retailPrice / 100).toFixed(2)}`
              : undefined
          }
          salePrice={`$${(item.salePrice / 100).toFixed(2)}`}
        />
      ))}
    </div>
  );
}

export default connect(function (state) {
  return {
    results: state.products.data.results,
    sortBy: state.products.sortBy,
  };
})(CardContainer);
