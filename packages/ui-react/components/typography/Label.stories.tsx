import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  title: "Components/Typography/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [
        "b-1",
        "b-2",
        "b-3",
        "b-4",
        "b-5",
        "r-1",
        "r-2",
        "r-3",
        "r-4",
        "r-5",
      ],
      description:
        "라벨의 크기를 지정합니다. b는 bold, r은 regular를 의미합니다.",
    },
    as: {
      control: "select",
      options: ["label", "span", "p"],
      description: "HTML 요소를 지정합니다.",
    },
    children: {
      control: "text",
      description: "표시할 라벨 텍스트",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Regular: Story = {
  args: {
    children: "기본 라벨 텍스트입니다.",
    size: "r-1",
  },
};

export const Bold: Story = {
  args: {
    children: "굵은 라벨 텍스트입니다.",
    size: "b-1",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Label size="b-1">Label Bold 1 크기입니다</Label>
      <Label size="b-2">Label Bold 2 크기입니다</Label>
      <Label size="b-3">Label Bold 3 크기입니다</Label>
      <Label size="b-4">Label Bold 4 크기입니다</Label>
      <Label size="b-5">Label Bold 5 크기입니다</Label>
      <Label size="r-1">Label Regular 1 크기입니다</Label>
      <Label size="r-2">Label Regular 2 크기입니다</Label>
      <Label size="r-3">Label Regular 3 크기입니다</Label>
      <Label size="r-4">Label Regular 4 크기입니다</Label>
      <Label size="r-5">Label Regular 5 크기입니다</Label>
    </div>
  ),
};
