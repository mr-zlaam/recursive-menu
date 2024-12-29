"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import type { IMENUITEM } from "../secondaryMenus";
import Link from "next/link";

const MobileMenuItem: React.FC<{
  item: IMENUITEM;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  depth: number;
}> = ({ item, mobileMenuOpen, setMobileMenuOpen, depth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <li>
      {item.href ? (
        <Link
          href={item.href}
          onClick={handleCloseMenu}
          className={cn(
            "flex justify-between items-center px-4 py-2 cursor-pointer rounded transition-all duration-300 bg-background",
            "hover:bg-primary hover:text-background"
          )}>
          {item.title}
        </Link>
      ) : (
        <span
          className={cn(
            "flex justify-between items-center px-4 py-2 cursor-pointer rounded transition-all duration-300 bg-background",
            "hover:bg-primary hover:text-background"
          )}
          onClick={handleClick}>
          <span>{item.title}</span>
          <span>{item.children && isOpen ? "-" : "+"}</span>
        </span>
      )}

      {/* Dropdown */}
      {item.children && (
        <ul
          className={cn(
            "pl-4 transition-[opacity,max-height] duration-300 ease-in-out overflow-hidden",
            isOpen
              ? "max-h-full opacity-100" // Adjust max-height based on content
              : "max-h-0 opacity-0"
          )}>
          {item.children.map((child) => (
            <MobileMenuItem
              depth={depth + 1}
              key={child.id}
              item={child}
              setMobileMenuOpen={setMobileMenuOpen}
              mobileMenuOpen={mobileMenuOpen}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
export default MobileMenuItem;
