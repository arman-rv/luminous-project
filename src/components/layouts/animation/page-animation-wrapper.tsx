"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const PageAnimationWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
      exit={{ opacity: 0, y: 30 }}
      className={cn("h-full w-full", className)}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimationWrapper;
