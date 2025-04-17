import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { TypoScale, TypoSemanticStyle } from "./typography";

const meta = {
  title: "Tokens/Typography",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const TypoBox = styled.div<{ $style?: any }>`
  ${(props) => props.$style}
  margin-bottom: 8px;
`;

const TypoInfo = styled.div`
  font-family: monospace;
  margin-bottom: 24px;
  font-size: 12px;
  color: #666;
`;

const TypoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 24px;
  max-width: 800px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 24px;
  padding: 0 24px;
`;

const ScaleGroup = styled.div`
  margin-bottom: 32px;

  h3 {
    margin-bottom: 16px;
    color: #333;
  }
`;

export const Scale: Story = {
  render: () => {
    const groupedTokens = Object.entries(TypoScale).reduce(
      (acc, [key, value]) => {
        const group = key.split("font-")[1]?.split("-")[0] || "other";
        if (!acc[group]) acc[group] = [];
        acc[group].push([key, value]);
        return acc;
      },
      {} as Record<string, [string, string | number][]>
    );

    return (
      <div>
        <SectionTitle>Typography Scale</SectionTitle>
        <TypoGrid>
          {Object.entries(groupedTokens).map(([group, tokens]) => (
            <ScaleGroup key={group}>
              <h3>{group.charAt(0).toUpperCase() + group.slice(1)}</h3>
              {tokens.map(([key, value]) => (
                <div key={key}>
                  <TypoBox
                    style={{
                      ...(group === "size" && { fontSize: value }),
                      ...(group === "weight" && { fontWeight: value }),
                      ...(group === "family" && { fontFamily: value }),
                    }}
                  >
                    {group === "size"
                      ? "텍스트 예시 Text Example"
                      : group === "weight"
                      ? "텍스트 예시 Text Example"
                      : group === "family"
                      ? "텍스트 예시 Text Example"
                      : String(value)}
                  </TypoBox>
                  <TypoInfo>
                    <div>{key}</div>
                    <div>{value}</div>
                  </TypoInfo>
                </div>
              ))}
            </ScaleGroup>
          ))}
        </TypoGrid>
      </div>
    );
  },
};

export const Semantic: Story = {
  render: () => {
    const groupedTokens = Object.entries(TypoSemanticStyle).reduce(
      (acc, [key, value]) => {
        const group = key.split("semantic-")[1]?.split("-")[0] || "other";
        if (!acc[group]) acc[group] = [];
        acc[group].push([key, value]);
        return acc;
      },
      {} as Record<string, [string, any][]>
    );

    return (
      <div>
        <SectionTitle>Semantic Typography</SectionTitle>
        <TypoGrid>
          {Object.entries(groupedTokens).map(([group, tokens]) => (
            <ScaleGroup key={group}>
              <h3>{group.charAt(0).toUpperCase() + group.slice(1)}</h3>
              {tokens.map(([key, value]) => (
                <div key={key}>
                  <TypoBox $style={value}>텍스트 예시 Text Example 123</TypoBox>
                  <TypoInfo>
                    <div>{key}</div>
                  </TypoInfo>
                </div>
              ))}
            </ScaleGroup>
          ))}
        </TypoGrid>
      </div>
    );
  },
};
