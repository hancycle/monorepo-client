import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { EffectSemanticStyle, EffectScale } from "./effect";

const meta = {
  title: "Tokens/Effects",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const EffectBox = styled.div<{ $effect: any }>`
  width: 200px;
  height: 100px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 8px;
  ${(props) => props.$effect}
`;

const EffectInfo = styled.div`
  font-family: monospace;
  margin-bottom: 24px;
`;

const EffectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  padding: 24px;
  background-color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  margin-bottom: 24px;
  padding: 0 24px;
`;

const ScaleBox = styled.div<{ $opacity?: number; $blur?: string }>`
  width: 200px;
  height: 100px;
  background-color: ${(props) =>
    props.$opacity !== undefined
      ? `rgba(0, 0, 0, ${props.$opacity})`
      : "white"};
  ${(props) => props.$blur && `filter: blur(${props.$blur});`}
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Scale: Story = {
  render: () => (
    <div>
      <SectionTitle>Scale Effects</SectionTitle>
      <EffectGrid>
        {Object.entries(EffectScale).map(([key, value]) => {
          const isOpacity = key.includes("opacity");
          const isBlur = key.includes("blur");
          return (
            <div key={key}>
              <ScaleBox
                $opacity={isOpacity ? (value as number) : undefined}
                $blur={isBlur ? (value as string) : undefined}
              />
              <EffectInfo>
                <div>{key}</div>
                <div>{value}</div>
              </EffectInfo>
            </div>
          );
        })}
      </EffectGrid>
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div>
      <SectionTitle>Semantic Effects</SectionTitle>
      <EffectGrid>
        {Object.entries(EffectSemanticStyle).map(([key, value]) => (
          <div key={key}>
            <EffectBox $effect={value} />
            <EffectInfo>
              <div>{key}</div>
            </EffectInfo>
          </div>
        ))}
      </EffectGrid>
    </div>
  ),
};
