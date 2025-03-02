import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import styled from "styled-components";

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 24px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const LoaderLabel = styled.div`
  font-family: monospace;
  font-size: 12px;
  color: #666;
`;

const sizes = ["small", "medium", "large"] as const;
const colors = ["primary", "tertiary", "primary-contrast"] as const;

export const All: Story = {
  render: () => (
    <Grid>
      {sizes.map((size) =>
        colors.map((color) => (
          <LoaderWrapper key={`${size}-${color}`}>
            <Loader size={size} color={color} />
            <LoaderLabel>{`${size} / ${color}`}</LoaderLabel>
          </LoaderWrapper>
        ))
      )}
    </Grid>
  ),
};

export const Small: Story = {
  args: {
    size: "small",
    color: "primary",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    color: "primary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    color: "primary",
  },
};

export const Primary: Story = {
  args: {
    size: "medium",
    color: "primary",
  },
};

export const Tertiary: Story = {
  args: {
    size: "medium",
    color: "tertiary",
  },
};

export const PrimaryContrast: Story = {
  args: {
    size: "medium",
    color: "primary-contrast",
  },
};
