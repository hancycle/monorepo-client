import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta = {
  title: "Components/Typography/Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2"],
      description: "제목의 크기를 지정합니다. 1이 가장 큰 크기입니다.",
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "HTML 제목 요소를 지정합니다.",
    },
    children: {
      control: "text",
      description: "표시할 제목 텍스트",
    },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const Level1: Story = {
  args: {
    children: "가장 큰 제목입니다",
    size: "1",
  },
};

export const Level2: Story = {
  args: {
    children: "두 번째로 큰 제목입니다",
    size: "2",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Title size="1">Title Size 1 입니다</Title>
      <Title size="2">Title Size 2 입니다</Title>
    </div>
  ),
};
