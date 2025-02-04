import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { ColorSemantic } from "../ui/tokens/color";
import { EffectSemantic } from "../ui/tokens/effect";
import { SizeSemantic } from "../ui/tokens/size";

const GlobalStyle = createGlobalStyle`
  :root {
    ${ColorSemantic}
    ${EffectSemantic}
    ${SizeSemantic}
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
