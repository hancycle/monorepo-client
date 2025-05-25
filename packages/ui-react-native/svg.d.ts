declare module "*.svg" {
  import type { FC } from "react";
  import type { SvgProps } from "react-native-svg";

  const ReactNativeSvgIcon: FC<SvgProps>;
  export default ReactNativeSvgIcon;
}
