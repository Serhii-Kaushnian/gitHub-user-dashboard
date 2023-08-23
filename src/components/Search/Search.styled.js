import styled from "@emotion/styled";

export const StyledInput = styled.input`
  position: relative;
  font-size: 15px;
  border-color: transparent;
  background-color: white;
  padding: 3px 15px;
  display: inline-block;
  border-radius: 10px;
  margin-left: 10px;

  *:not(span) {
    position: relative;
    display: inherit;
    border-radius: inherit;
    margin: 0;
    border: none;
    outline: none;
    padding: 0 0.325em;
    z-index: 1;

    &:focus + span {
      opacity: 1;
      transform: scale(1);
    }
  }

  transition: background-color 250ms ease;
  &:focus {
    outline: none;
    background-color: #e7eaf6;
  }

  &:hover {
    outline: none;
    background-color: #e7eaf6;
  }

  span {
    transform: scale(0.993, 0.94);
    transition: transform 0.5s, opacity 0.25s;
    opacity: 0;

    position: absolute;
    z-index: 0;
    margin: 4px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px;
  }
`;
