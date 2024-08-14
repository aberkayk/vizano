import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const redirectedPathName = (locale: string, pathname: string) => {
  if (!pathname) return "/";
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/");
};
