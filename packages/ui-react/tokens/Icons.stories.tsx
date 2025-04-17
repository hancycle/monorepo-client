import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import AddFilled from "./icons/hc-icon-mono-add-filled.svg";
import AddOutlined from "./icons/hc-icon-mono-add-outlined.svg";
import CheckCircleFilled from "./icons/hc-icon-mono-check-circle-filled.svg";
import CheckCircleOutlined from "./icons/hc-icon-mono-check-circle-outlined.svg";
import CloseFilled from "./icons/hc-icon-mono-close-filled.svg";
import CloseOutlined from "./icons/hc-icon-mono-close-outlined.svg";
import EmphasisCircleFilled from "./icons/hc-icon-mono-emphasis-circle-filled.svg";
import EmphasisCircleOutlined from "./icons/hc-icon-mono-emphasis-circle-outlined.svg";
import InfoCircleFilled from "./icons/hc-icon-mono-info-circle-filled.svg";
import InfoCircleOutlined from "./icons/hc-icon-mono-info-circle-outlined.svg";
import MeatballFilled from "./icons/hc-icon-mono-meatball-filled.svg";
import MeatballOutlined from "./icons/hc-icon-mono-meatball-outlined.svg";

const meta = {
  title: "Tokens/Icons",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 24px;
  padding: 24px;
  max-width: 800px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 8px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const IconName = styled.div`
  font-family: monospace;
  font-size: 12px;
  color: #666;
  word-break: break-all;
`;

const SectionTitle = styled.h2`
  margin-bottom: 24px;
  padding: 0 24px;
`;

type IconType = {
  name: string;
  component: any;
};

const icons: IconType[] = [
  { name: "Add (Filled)", component: AddFilled },
  { name: "Add (Outlined)", component: AddOutlined },
  { name: "Check Circle (Filled)", component: CheckCircleFilled },
  { name: "Check Circle (Outlined)", component: CheckCircleOutlined },
  { name: "Close (Filled)", component: CloseFilled },
  { name: "Close (Outlined)", component: CloseOutlined },
  { name: "Emphasis Circle (Filled)", component: EmphasisCircleFilled },
  { name: "Emphasis Circle (Outlined)", component: EmphasisCircleOutlined },
  { name: "Info Circle (Filled)", component: InfoCircleFilled },
  { name: "Info Circle (Outlined)", component: InfoCircleOutlined },
  { name: "Meatball (Filled)", component: MeatballFilled },
  { name: "Meatball (Outlined)", component: MeatballOutlined },
];

export const All: Story = {
  render: () => (
    <div>
      <SectionTitle>Icons</SectionTitle>
      <IconGrid>
        {icons.map(({ name, component: Icon }) => (
          <IconWrapper key={name}>
            <IconBox>
              <Icon width={24} height={24} />
            </IconBox>
            <IconName>{name}</IconName>
          </IconWrapper>
        ))}
      </IconGrid>
    </div>
  ),
};
