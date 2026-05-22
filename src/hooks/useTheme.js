import { useState } from "react";

export const useTheme = () => {
  const [dark, setDark] = useState(true);
  return { dark, toggle: () => setDark((d) => !d) };
};