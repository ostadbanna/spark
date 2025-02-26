import React from "react";
import styled from "@emotion/styled";

const Root = styled.input<{ small?: boolean }>`
  font-size: ${({ small }) => (small ? "16px;" : "20px")};
  caret-color: ${({ theme }) => theme.colors.blue100};
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  border: none;
  background: transparent;
  text-align: right;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type="number"] {
    -moz-appearance: textfield;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;

type TProps = React.InputHTMLAttributes<HTMLInputElement> & { small?: boolean };

const AmountInput = React.forwardRef<HTMLInputElement, TProps>(
  ({ onWheel, ...props }, ref) => (
    <Root
      {...props}
      ref={ref}
      small={props.small}
      type="number"
      onWheel={(e) => {
        e.target && (e.target as any).blur();
        onWheel && onWheel(e);
      }}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
    />
  )
);

AmountInput.displayName = "AmountInput";

export default AmountInput;
