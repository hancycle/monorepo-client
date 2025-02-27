import type { StorybookConfig } from "@storybook/react-webpack5";
import type { RuleSetRule } from "webpack";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../tokens/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      const imageRule = config.module.rules.find((rule) => {
        const ruleTest = (rule as RuleSetRule).test;
        return ruleTest instanceof RegExp && ruleTest.test(".svg");
      });

      if (imageRule && typeof imageRule !== "string") {
        (imageRule as RuleSetRule).exclude = /\.svg$/;
      }

      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("ts-loader"),
          },
        ],
      });
    }

    if (config.resolve?.extensions) {
      config.resolve.extensions.push(".ts", ".tsx");
    }

    return config;
  },
};

export default config;
