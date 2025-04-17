import type { Meta, StoryObj } from "@storybook/react";
import { Subtitle } from "./Subtitle";

const meta = {
  title: "Components/Typography/Subtitle",
  component: Subtitle,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
      description: "부제목의 크기를 지정합니다. 1이 가장 큰 크기입니다.",
    },
    as: {
      control: "select",
      options: ["h2", "h3", "h4", "h5", "h6"],
      description: "HTML 제목 요소를 지정합니다.",
    },
    children: {
      control: "text",
      description: "표시할 부제목 텍스트",
    },
  },
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof Subtitle>;

export const Level1: Story = {
  args: {
    children: "첫 번째 크기의 부제목입니다",
    size: "1",
  },
};

export const Level2: Story = {
  args: {
    children: "두 번째 크기의 부제목입니다",
    size: "2",
  },
};

export const Level3: Story = {
  args: {
    children: "세 번째 크기의 부제목입니다",
    size: "3",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Subtitle size="1">Subtitle Size 1 입니다</Subtitle>
      <Subtitle size="2">Subtitle Size 2 입니다</Subtitle>
      <Subtitle size="3">Subtitle Size 3 입니다</Subtitle>
    </div>
  ),
};
