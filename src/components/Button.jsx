import styled from "styled-components";

const Button = styled.button`
  ${(props) =>
    props.$type === "primary"
      ? `background-color: var(--button-primary); color: var(--white);
        &:hover {
            background-color: color-mix(in srgb, var(--button-primary) 80%, var(--button-secondary) 20%);
        }
      `
      : `background-color: var(--button-secondary); color: var(--text);
        &:hover {
            background-color: color-mix(in srgb, var(--button-secondary) 80%, var(--gray) 20%);
        }
        `}

  border-radius: 50px;
  padding: 10px 20px;
  font-size: 1.2rem;
  transition: all 0.3s ease !important;
  margin: 10px;
`;

export default Button;
