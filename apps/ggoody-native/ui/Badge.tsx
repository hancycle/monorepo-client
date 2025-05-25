import { ReactNode } from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import { Label } from "@hancycle/ui-react-native";
import { ColorSemantic, SizeSemantic } from "@hancycle/ui-react-native/tokens";

export type BadgeProps = ViewProps & {
  children: ReactNode;
  size: "small" | "medium";
  theme: "gray" | "gray-contrast" | "green" | "yellow" | "orange" | "red";
};

export function Badge({ children, size, theme, style, ...props }: BadgeProps) {
  return (
    <View
      style={[
        styles.container,
        styles[`${size}Size`],
        styles[`${theme}Theme`],
        style,
      ]}
      {...props}
    >
      <Label size="R4" style={styles[`${theme}Text`]}>
        {children}
      </Label>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  smallSize: {
    paddingHorizontal: SizeSemantic.spacing8,
    borderRadius: SizeSemantic.borderRadiusFull,
    height: 20,
  },
  mediumSize: {
    paddingHorizontal: SizeSemantic.spacing10,
    borderRadius: SizeSemantic.borderRadiusFull,
    height: 24,
  },
  // Theme
  grayTheme: {
    backgroundColor: ColorSemantic.surfaceMedium,
  },
  "gray-contrastTheme": {
    backgroundColor: ColorSemantic.surfaceMediumContrast,
  },
  greenTheme: {
    backgroundColor: ColorSemantic.accentGreenMedium,
  },
  yellowTheme: {
    backgroundColor: ColorSemantic.accentYellowMedium,
  },
  orangeTheme: {
    backgroundColor: ColorSemantic.accentOrangeMedium,
  },
  redTheme: {
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
});
