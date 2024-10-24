import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateCapitalLetters(name: string, maxCount: number): string {
  const capitalLetters: string = name.replace(/[^a-zA-Z]/g, "").toUpperCase();
  const result: string = capitalLetters.slice(0, maxCount);
  return result;
}

export function isValidURL(string:string) {
  try {
    // Attempt to create a new URL object
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}