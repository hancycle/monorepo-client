import { Platform } from "react-native";

export const fonts = {
  pretendard: Platform.select({
    ios: "Pretendard Variable",
    android: "PretendardVariable",
    default: "Pretendard Variable",
  }),
} as const;

export type FontKeys = keyof typeof fonts;
