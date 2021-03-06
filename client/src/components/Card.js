/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

function Card({ name, salePrice, retailPrice, imageUrl, quantityAvailable }) {
  return (
    <div
      css={css`
        border: 1px solid grey;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <img
          src={imageUrl}
          alt={name}
          css={css`
            width: 100%;
          `}
        />
        {quantityAvailable === 0 && (
          <span
            css={css`
              position: absolute;
              padding: 3px 8px;
              background-color: var(--soldOutRed);
              color: var(--white);
              right: 20px;
              bottom: 0;
            `}
            data-testid="item-sold-out"
          >
            sold out
          </span>
        )}
      </div>
      <div
        css={css`
          padding: 10px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;

          @media (max-width: 650px) {
            p {
              font-size: 0.8rem;
            }
          }
        `}
      >
        <div
          css={css`
            text-align: center;
            flex: 1;
          `}
        >
          <p data-testid="item-name">{name}</p>
        </div>
        {retailPrice && (
          <p
            data-testid="item-retail-price"
            css={css`
              text-decoration: line-through;
            `}
          >
            {retailPrice}
          </p>
        )}
        <p
          data-testid="item-sale-price"
          css={css`
            font-size: 32px;

            @media (max-width: 650px) {
              font-size: 1.4rem !important;
            }
          `}
        >
          {salePrice}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  salePrice: PropTypes.string.isRequired,
  retailPrice: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  quantityAvailable: PropTypes.number.isRequired,
};

export default Card;
