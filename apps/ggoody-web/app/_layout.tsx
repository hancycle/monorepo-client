import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {
  ColorScale,
  ColorSemantic,
  EffectSemantic,
  SizeSemantic,
} from "@hancycle/ui/tokens";

const GlobalStyle = createGlobalStyle`
  :root {
    ${ColorSemantic}
    ${EffectSemantic}
    ${SizeSemantic}
    ${ColorScale}
  }

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
