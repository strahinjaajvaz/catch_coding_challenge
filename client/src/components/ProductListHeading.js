/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProductListHeading({ query, total, page, pages }) {
  return (
    <div>
      <h2
        css={css`
          margin-bottom: 0;
        `}
        data-testid="product-list-heading"
      >
        {query}
      </h2>
      <div
        css={css`
          display: flex;

          & > p {
            margin-right: 20px;
          }
        `}
      >
        <p data-testid="total_items">Total items: {total}</p>
        <p data-testid="pages">
          Page: {page} of {pages}
        </p>
      </div>
    </div>
  );
}

ProductListHeading.propTypes = {
  query: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};

export default connect(function (state) {
  return state.products.data.metadata || {};
})(ProductListHeading);
