"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    icon?: React.JSX.Element
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex justify-around items-center flex-wrap flex-row w-full",
        className
      )}
    >
      {items.map((item, idx) => (
        <span

          key={idx}
          className="relative group  block p-2  pointer-events-auto"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary/60  block  rounded-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            className=" h-[280px] relative overflow-hidden rounded-md p-5 max-w-[300px] shadow-md hover:shadow-black/50 duration-300 transition-shadow"
          >
            <h1 className="w-16 h-16 bg-background/80 rounded-full flex items-center justify-center">{item.icon!}</h1>
            <div className="absolute top-[-50px] right-[-50px] animate-heart rounded-full bg-primary h-20 w-20" />
            <div className="absolute bottom-[-85px] left-[-50px] animate-heart rounded-full bg-primary h-20 w-20" />
            <CardTitle className="text-foreground">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-background   group-hover: relative z-20 shadow-md shadow-foreground/20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
