import React from "react";
import styled from "styled-components";
import { Props } from "../util/typealies";

const Layout: React.FC<Props> = (props) => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 90vw;
  box-sizing: border-box;

  @media screen and (min-width: 1024px) {
    max-width: 70vw;
  }
`;
