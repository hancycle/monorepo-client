import type { Preview } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import {
  ColorScale,
  ColorSemantic,
  EffectSemantic,
  SizeSemantic,
} from "../tokens";

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

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};

export default preview;
