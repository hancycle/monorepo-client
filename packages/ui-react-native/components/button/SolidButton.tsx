import { ReactElement } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { Label } from "@hancycle/ui-react-native/components";
import {
  ColorSemantic,
  SizeSemantic,
  EffectSemantic,
} from "@hancycle/ui-react-native/tokens";

export type SolidButtonProps = TouchableOpacityProps & {
  color?: "gray" | "gray-contrast" | "green" | "yellow" | "orange" | "red";
  status?: "enabled" | "disabled" | "loading";
  size?: "small" | "medium" | "large";
  title?: string;
  icon?: ReactElement;
};

export const SolidButton = ({
  icon,
  color = "gray",
  status = "enabled",
  size = "medium",
  title = "Title",
  style,
  ...props
}: SolidButtonProps) => {
  const buttonStyle = [
    styles.container,
    styles[`${color}Color`],
    styles[`${size}Size`],
    status === "disabled" && styles.disabled,
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      activeOpacity={EffectSemantic.statePressed}
      disabled={status === "disabled" || status === "loading"}
      {...props}
    >
      {icon && icon}
      <Label size="B1" style={styles[`${color}Text`]}>
        {title}
      </Label>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SizeSemantic.spacing6,
  },
  // Colors
  grayColor: {
    backgroundColor: ColorSemantic.surfaceMedium,
  },
  "gray-contrastColor": {
    backgroundColor: ColorSemantic.surfaceMediumContrast,
  },
  greenColor: {
    backgroundColor: ColorSemantic.accentGreenMedium,
  },
  yellowColor: {
    backgroundColor: ColorSemantic.accentYellowMedium,
  },
  orangeColor: {
    backgroundColor: ColorSemantic.accentOrangeMedium,
  },
  redColor: {
    backgroundColor: ColorSemantic.accentRedMedium,
  },
  // Text Colors
  grayText: {
    color: ColorSemantic.infoPrimary,
  },
  "gray-contrastText": {
    color: ColorSemantic.infoPrimaryContrast,
  },
  greenText: {
    color: ColorSemantic.infoPrimaryContrast,
  },
  yellowText: {
    color: ColorSemantic.infoPrimary,
  },
  orangeText: {
    color: ColorSemantic.infoPrimaryContrast,
  },
  redText: {
    color: ColorSemantic.infoPrimaryContrast,
  },
  // Sizes
  smallSize: {
    height: SizeSemantic.spacing32,
    paddingHorizontal: SizeSemantic.spacing8,
    borderRadius: SizeSemantic.borderRadiusXs,
  },
  mediumSize: {
    height: SizeSemantic.spacing44,
    paddingHorizontal: SizeSemantic.spacing12,
    borderRadius: SizeSemantic.borderRadiusS,
  },
  largeSize: {
    height: SizeSemantic.spacing56,
    paddingHorizontal: SizeSemantic.spacing12,
    borderRadius: SizeSemantic.borderRadiusM,
  },
  disabled: {
    opacity: EffectSemantic.stateDisabled,
  },
});

export default SolidButton;
