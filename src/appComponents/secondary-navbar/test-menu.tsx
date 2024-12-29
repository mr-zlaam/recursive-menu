"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { type IMENUITEM, menuData as menus } from "./secondaryMenus";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.id}>
            {menu.children ? (
              <>
                <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-7 lg:w-[100vw]">
                    {menu.children.map((child) => (
                      <RecursiveListItem
                        key={child.id}
                        item={child}
                        depth={1}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                href={menu.href || "#"}
                legacyBehavior
                passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>{menu.title}</NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface RecursiveListItemProps {
  item: IMENUITEM;
  depth: number; // Added depth to track the nesting level
}

const RecursiveListItem: React.FC<RecursiveListItemProps> = ({ item, depth }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={item.href || "#"}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className={cn("text-sm font-medium leading-none", depth === 1 && "text-primary")}>{item.title}</div>
          {item.description && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.description}</p>}
        </a>
      </NavigationMenuLink>
      {item.children && item.children.length > 0 && (
        <ul className="ml-4 mt-2 space-y-2 border-l-2 border-muted pl-4">
          {item.children.map((child) => (
            <RecursiveListItem
              key={child.id}
              item={child}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
