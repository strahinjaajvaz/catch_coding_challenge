/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function Container(props) {
  return (
    <div
      css={css`
        margin: 30px auto 0;
        max-width: 1000px;
        padding: 0 20px;
      `}
      {...props}
    />
  );
}

export default Container;
