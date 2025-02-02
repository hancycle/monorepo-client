import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function RootLayout() {
  return (
    <View>
      <GlobalStyle />
      <Suspense fallback={"loading..."}>
        <Outlet />
      </Suspense>
    </View>
  );
}

const View = styled.div`
  border: solid 1px red;
  background: white;
  height: 100dvh;
`;

export default RootLayout;
