import type { Meta, StoryObj } from "@storybook/react";
import { Caption } from "./Caption";

const meta = {
  title: "Components/Typography/Caption",
  component: Caption,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["b-1", "b-2", "r-1", "r-2"],
      description:
        "캡션의 크기를 지정합니다. b는 bold, r은 regular를 의미합니다.",
    },
    as: {
      control: "select",
      options: ["span", "p", "div"],
      description: "HTML 요소를 지정합니다.",
    },
    children: {
      control: "text",
      description: "표시할 캡션 텍스트",
    },
  },
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof Caption>;

export const Regular: Story = {
  args: {
    children: "기본 캡션 텍스트입니다.",
    size: "r-1",
  },
};

export const Bold: Story = {
  args: {
    children: "굵은 캡션 텍스트입니다.",
    size: "b-1",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Caption size="b-1">Caption Bold 1 크기입니다</Caption>
      <Caption size="b-2">Caption Bold 2 크기입니다</Caption>
      <Caption size="r-1">Caption Regular 1 크기입니다</Caption>
      <Caption size="r-2">Caption Regular 2 크기입니다</Caption>
    </div>
  ),
};
