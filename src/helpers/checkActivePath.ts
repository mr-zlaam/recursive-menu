"use client";
import { usePathname } from "next/navigation";
// eslint-disable-next-line
export function CurrentPath(): (_: string) => boolean {
  const pathname = usePathname();

  const checkActivePath = (path: string) => {
    return path === pathname;
  };

  return checkActivePath;
}
