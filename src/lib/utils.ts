import classNames from "classnames";

/**
 * shadcn-style class combiner. The site styles with Once UI and SCSS modules,
 * not Tailwind, so there is no tailwind-merge step: this only joins classes.
 */
export function cn(...inputs: Parameters<typeof classNames>) {
  return classNames(...inputs);
}
