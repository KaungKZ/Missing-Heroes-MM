import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

export const NameNotFound = styled.div`
  font-family: var(--title-font);
  color: var(--light-text-color);
  font-weight: 700;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  height: 200px;
  display: flex;

  @media (max-width: 400px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const InputFormWrapper = styled.form`
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
  }
`;

export const DbErrorText = styled.div`
  font-family: var(--title-font);
  color: var(--light-text-color);
  font-weight: 700;
  font-size: 1.2rem;

  align-items: center;
  justify-content: center;
  height: 200px;
  display: flex;

  @media (max-width: 400px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const InputWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    &.active {
      width: 100%;
      position: sticky !important;
      top: 25px;
      display: flex;

      .MuiTextField-root {
        width: 90%;
        margin: 0 auto;
        box-shadow: rgba(119, 113, 219, 0.1) 0px 4px 12px;
      }

      .MuiInputLabel-outlined.MuiInputLabel-shrink {
        background: #fff;
      }
    }
  }
`;

export const InputFilterStyles = styled(TextField)`
  width: 100%;
  background: #fff;

  & label.Mui-focused {
    color: var(--general-blue-color);
    transform: translate(11px, -6px) scale(0.75);
  }

  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(11px, -6px) scale(0.75);
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: var(--general-blue-color);
    }
  }

  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: var(--general-blue-color);
    border-width: 2px;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: var(--general-blue-color);
    }
  }

  .MuiInputLabel-root {
    font-family: var(--primary-font);
  }

  input {
    font-family: var(--primary-font);

    &:-webkit-autofill {
      background: #fff !important;
    }
  }

  @media (hover: none) {
    & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: var(--general-blue-color);
    }
  }

  @media (max-width: 1024px) {
    &.active {
      margin-bottom: 0px !important;
    }
  }

  @media (max-width: 600px) {
    & label.Mui-focused {
      color: var(--general-blue-color);
      transform: translate(16px, -4.5px) scale(0.75);
    }

    .MuiInputLabel-outlined.MuiInputLabel-shrink {
      transform: translate(16px, -4.5px) scale(0.75);
    }
    & .MuiInputLabel-root {
      font-size: 14px;
    }

    input {
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    .MuiOutlinedInput-input {
      padding: 15.5px 14px;
    }

    .MuiInputLabel-outlined {
      transform: translate(14px, 17px) scale(1);
    }

    .MuiSvgIcon-root {
      width: 0.8em;
      height: 0.8em;
    }

    & label.Mui-focused {
      transform: translate(17px, -5px) scale(0.75);
    }

    .MuiInputLabel-outlined.MuiInputLabel-shrink {
      transform: translate(17px, -5px) scale(0.75);
    }
  }

  @media (max-width: 320px) {
    & .MuiInputLabel-root {
      font-size: 12px;
    }

    input {
      font-size: 12px;
    }
    .MuiOutlinedInput-input {
      padding: 12.5px 14px;
    }

    .MuiInputLabel-outlined {
      transform: translate(14px, 13.5px) scale(1);
    }

    & label.Mui-focused {
      transform: translate(19px, -6px) scale(0.85);
    }

    .MuiInputLabel-outlined.MuiInputLabel-shrink {
      transform: translate(19px, -6px) scale(0.85);
    }
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: var(--section-margin) !important;
`;

export const PaginationOptions = styled.div``;

export const PaginationStyles = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 50%;
  margin: 25px auto 0 auto;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 60%;
  }

  @media (max-width: 600px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    height: 135px;
  }
`;

export const ShowPageStyles = styled(Select)`
  @media (max-width: 700px) {
    z-index: 3;
  }

  @media (max-width: 400px) {
    width: 45%;
  }
`;
export const PageNumbers = styled.span`
  font-size: 14px;
  font-family: var(--primary-font);
`;

export const TableStyles = styled.table`
  border-spacing: 0px;
  margin: 0 auto;
  width: 100%;
`;

export const TableHeaderStyles = styled.thead`
  background: #e9f1f1;
  th {
    padding: 1rem;

    font-family: var(--primary-font);
    font-size: 14px;
    color: #747474;
    font-weight: 400;

    &:first-child {
      font-size: 16px;
      font-weight: 700;
      color: var(--light-text-color);
    }
  }

  tr th:last-child {
    min-width: 400px !important;
  }

  @media (max-width: 1280px) {
    tr th:first-child {
      min-width: 125px !important;
    }
    tr th:last-child {
      min-width: 250px !important;
    }
  }

  @media (max-width: 400px) {
    tr th {
      font-size: 12px;

      &:first-child {
        font-size: 14px;
      }
    }
  }
`;

export const TableBodyStyles = styled.tbody`
  tr {
    td {
      font-family: var(--primary-font);
      padding: 1.5rem;
      color: var(--text-color);
      font-size: 14px;
      border-bottom: 1px solid #dcdcdc;
      text-align: center;
    }
    &:last-child td {
      border-bottom: 0px;
    }
  }

  @media (max-width: 768px) {
    tr td {
      padding: 22px 16px;
    }
  }

  @media (max-width: 480px) {
    tr {
      td:first-child {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 400px) {
    tr td:first-child {
      font-size: 12px;
    }
  }
`;

// Custom table value styles

export const CustomSexStyles = styled.span`
  color: ${(props) =>
    props.sex === "male" ? "var(--general-blue-color)" : "#EA2839"};

  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const CustomRemarkStyles = styled.p`
  font-size: 13px;
  color: #373d3f;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const CustomAddressStyles = styled.span`
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const CustomConditionStyles = styled.span`
  padding: 8px 12px;
  border-radius: 15px;
  color: #555f61;
  white-space: nowrap;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 13px;
  background: ${(props) => {
    return props.c === "danger"
      ? "#FFF0F3"
      : props.c === "warning"
      ? "#FEF9E4"
      : props.c === "free"
      ? "#EDFBFA"
      : "transparent";
  }};

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
