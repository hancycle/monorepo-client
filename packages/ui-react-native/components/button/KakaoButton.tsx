import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

import { Label, LogoKakaoIcon } from "@hancycle/ui-react-native/components";
import {
  ColorSemantic,
  SizeSemantic,
  EffectSemantic,
} from "@hancycle/ui-react-native/tokens";

export type KakaoButtonProps = TouchableOpacityProps & {
  status?: "enabled" | "disabled" | "loading";
  title?: string;
};

export const KakaoButton = ({
  status = "enabled",
  title = "Title",
  style,
  ...props
}: KakaoButtonProps) => {
  const buttonStyle = [
    styles.container,
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
      <LogoKakaoIcon width={24} height={24} />
      <Label size="B1">{title}</Label>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SizeSemantic.spacing6,
    backgroundColor: "#FEE500",
    color: ColorSemantic.infoPrimary,
    height: 56,
    paddingHorizontal: SizeSemantic.spacing12,
    borderRadius: SizeSemantic.borderRadiusM,
  },
  disabled: {
    opacity: EffectSemantic.stateDisabled,
  },
});
