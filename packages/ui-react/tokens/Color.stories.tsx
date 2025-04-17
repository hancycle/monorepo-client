import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { ColorScale, ColorSemantic } from "./color";

const meta = {
  title: "Tokens/Colors",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const ColorBox = styled.div<{ $bgColor: string }>`
  width: 200px;
  height: 100px;
  background-color: ${(props) => props.$bgColor};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const ColorInfo = styled.div`
  font-family: monospace;
  margin-bottom: 24px;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  padding: 24px;
`;

const ColorSection = styled.div`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 24px;
  padding: 0 24px;
`;

export const Scale: Story = {
  render: () => (
    <div>
      <SectionTitle>Scale Colors</SectionTitle>
      <ColorGrid>
        {Object.entries(ColorScale).map(([key, value]) => (
          <div key={key}>
            <ColorBox $bgColor={value} />
            <ColorInfo>
              <div>{key}</div>
              <div>{value}</div>
            </ColorInfo>
          </div>
        ))}
      </ColorGrid>
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div>
      <SectionTitle>Semantic Colors</SectionTitle>
      <ColorGrid>
        {Object.entries(ColorSemantic).map(([key, value]) => (
          <div key={key}>
            <ColorBox $bgColor={value} />
            <ColorInfo>
              <div>{key}</div>
              <div>{value}</div>
            </ColorInfo>
          </div>
        ))}
      </ColorGrid>
    </div>
  ),
};
