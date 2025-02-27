import type { Meta, StoryObj } from "@storybook/react";
import { Body } from "./Body";

const meta = {
  title: "Components/Typography/Body",
  component: Body,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["b-1", "b-2", "b-3", "b-4", "r-1", "r-2", "r-3", "r-4"],
      description:
        "본문 텍스트의 크기를 지정합니다. b는 bold, r은 regular를 의미합니다.",
    },
    as: {
      control: "select",
      options: ["p", "span", "div"],
      description: "HTML 요소를 지정합니다.",
    },
    children: {
      control: "text",
      description: "표시할 텍스트 내용",
    },
  },
} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof Body>;

export const Regular: Story = {
  args: {
    children: "기본 본문 텍스트입니다.",
    size: "r-1",
  },
};

export const Bold: Story = {
  args: {
    children: "굵은 본문 텍스트입니다.",
    size: "b-1",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Body size="b-1">Body Bold 1 크기입니다.</Body>
      <Body size="b-2">Body Bold 2 크기입니다.</Body>
      <Body size="b-3">Body Bold 3 크기입니다.</Body>
      <Body size="b-4">Body Bold 4 크기입니다.</Body>
      <Body size="r-1">Body Regular 1 크기입니다.</Body>
      <Body size="r-2">Body Regular 2 크기입니다.</Body>
      <Body size="r-3">Body Regular 3 크기입니다.</Body>
      <Body size="r-4">Body Regular 4 크기입니다.</Body>
    </div>
  ),
};
