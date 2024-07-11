import type { createArrayType } from "./types";

export const createArray: createArrayType = (fromIndex, toIndex) => {
  const result: number[] = [];
  for (let i = fromIndex; i <= toIndex; i++) {
    result.push(i);
  }
  return result;
};

export const toggleTheme = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const dt = e.currentTarget.closest(".dt__wrapper");
  if (dt?.classList.contains("dt--light")) {
    dt.classList.remove("dt--light");
    dt.classList.add("dt--dark");
  } else {
    dt?.classList.remove("dt--dark");
    dt?.classList.add("dt--light");
  }
};
