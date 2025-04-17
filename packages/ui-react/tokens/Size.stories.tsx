import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { SizeScale, SizeSemantic } from "./size";

const meta = {
  title: "Tokens/Sizes",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const SizeBox = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const SizeInfo = styled.div`
  font-family: monospace;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

const SizeList = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 24px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 24px;
`;

export const Scale: Story = {
  render: () => (
    <div>
      <SectionTitle>Scale Sizes</SectionTitle>
      <SizeList>
        {Object.entries(SizeScale).map(([key, value]) => (
          <div key={key}>
            <SizeBox $width={value} />
            <SizeInfo>
              <div>{key}</div>
              <div>{value}</div>
            </SizeInfo>
          </div>
        ))}
      </SizeList>
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div>
      <SectionTitle>Semantic Sizes</SectionTitle>
      <SizeList>
        {Object.entries(SizeSemantic).map(([key, value]) => (
          <div key={key}>
            <SizeBox $width={value} />
            <SizeInfo>
              <div>{key}</div>
              <div>{value}</div>
            </SizeInfo>
          </div>
        ))}
      </SizeList>
    </div>
  ),
};
