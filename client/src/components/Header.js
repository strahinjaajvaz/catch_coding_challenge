/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";

import ProductListHeading from "./ProductListHeading";
import { capitalizeFirstLetter } from "../utils/strings";

import { changeSort } from "../redux/actions/productActions";

function Header({ changeSortOrder }) {
  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <img
          src="https://s.catch.com.au/static/catch/images/logo-8b0ef96c7b.svg"
          alt="catch logo"
          css={css`
            width: 225px;
            height: 100px;
          `}
        />
        <select
          css={css`
            align-self: flex-end;
          `}
          data-testid="change-sort-by"
          onChange={changeSortOrder}
        >
          <option value="priceHigh">Price (high - low)</option>
          <option value="priceLow">Price (low - high)</option>
        </select>
      </div>
      <ProductListHeading
        query={capitalizeFirstLetter("best sellers")}
        total={102}
        page={1}
        pages={3}
      />
    </div>
  );
}

export default connect(
  () => ({}),
  (dispatch) => ({
    changeSortOrder: (sortBy) => dispatch(changeSort(sortBy)),
  })
)(Header);
