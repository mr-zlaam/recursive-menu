import Link from "next/link";
import type { IMENUITEM } from "../secondaryMenus";
import { cn } from "@/lib/utils";
import { CurrentPath } from "@/helpers/checkActivePath";
import { ArrowDown } from "lucide-react";

interface MenuItemProps {
  item: IMENUITEM;
  depth: number;
  activeMenuPath: number[];

  // eslint-disable-next-line no-unused-vars
  onToggle: (_id: number, _depth: number) => void;
}

const DeskTopMenuItem: React.FC<MenuItemProps> = ({ item, depth, activeMenuPath, onToggle }) => {
  const isCurrentPathActive = CurrentPath();
  const isActive = activeMenuPath[depth] === item.id;

  const handleMouseEnter = () => {
    onToggle(item.id, depth);
  };

  return (
    <li
      className="relative text-base"
      onMouseEnter={handleMouseEnter}>
      {item.href ? (
        <Link
          href={item.href}
          className={cn(
            "flex rounded-md items-center justify-between cursor-pointer",
            depth >= 1 && "hover:bg-primary hover:text-background text-primary px-3 py-2",
            !item.children && depth === 0 && isCurrentPathActive(item.href!) && "hidden"
          )}>
          <span className={cn("font-medium block", depth === 0 && "text-background", depth >= 1 && "whitespace-nowrap pr-2")}>{item.title}</span>

          {item.children && (
            <span
              className={cn(
                isActive && depth === 0 && "rotate-180 transition-all duration-300",
                isActive && depth >= 1 && "-rotate-90 transition-all duration-200",
                depth === 0 && "text-background"
              )}>
              {" "}
              <ArrowDown size={15} />
            </span>
          )}
        </Link>
      ) : (
        <span
          className={cn(
            "flex rounded-md items-center justify-between cursor-pointer",
            depth >= 1 && "hover:bg-primary hover:text-background text-primary px-3 py-2"
          )}>
          <span className={cn("font-medium block", depth === 0 && "text-background", depth >= 1 && "whitespace-nowrap pr-2")}>{item.title}</span>

          {item.children && (
            <span
              className={cn(
                isActive && depth === 0 && "rotate-180 transition-all duration-300",
                isActive && depth >= 1 && "-rotate-90 transition-all duration-200",
                depth === 0 && "text-background"
              )}>
              {" "}
              {depth === 0 ? "▼" : depth >= 1 && <ArrowDown size={15} />}
            </span>
          )}
        </span>
      )}

      {item.children && (
        <ul
          className={cn(
            "absolute left-0 bg-white border border-gray-200 shadow-md w-fit z-[900] transition-all duration-300 ease-in-out transform origin-top pointer-events-auto",
            depth === 0 ? "top-full mt-4" : "top-0 left-full",
            isActive ? "opacity-100 scale-y-100 rounded-md" : "opacity-0 scale-y-0 pointer-events-none"
          )}>
          {/* Invisible Bridge */}
          <span
            className="absolute -top-5 left-0 h-5 w-full bg-transparent pointer-events-auto"
            aria-hidden="true"></span>

          {item.children?.map((child) => (
            <DeskTopMenuItem
              key={child.id}
              item={child}
              depth={depth + 1}
              activeMenuPath={activeMenuPath}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DeskTopMenuItem;
