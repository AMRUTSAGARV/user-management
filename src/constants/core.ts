import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

// This value represents a reference or standard screen width (in logical pixels)
const guidelineBaseWidth = 375; // Base screen width
const guidelineBaseHeight = 812; // Base screen height

export const scaleWidth = (size: number) => (width / guidelineBaseWidth) * size;
export const scaleHeight = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const scaleFont = (size: number) => size * PixelRatio.getFontScale();
