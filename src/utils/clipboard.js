import { showToast } from "./toast";

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    showToast.success("Copied to clipboard!");
    return true;
  } catch (error) {
    showToast.error("Failed to copy to clipboard.");
    return false;
  }
};
