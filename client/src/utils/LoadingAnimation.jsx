import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const LoadingText = styled.h3`
  font-family: var(--primary-font);
  color: var(--light-text-color);
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 1.1rem;

  @media (max-width: 400px) {
    font-size: 1rem;
  }

  @media (max-width: 280px) {
    font-size: 14px;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 200px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    color: "var(--general-blue-color)",
  },
}));

export default function LoadingAnimation() {
  const classes = useStyles();
  return (
    <>
      <LoadingWrapper>
        <LoadingText>Loading</LoadingText>
        <CircularProgress className={classes.root} />
      </LoadingWrapper>
    </>
  );
}
