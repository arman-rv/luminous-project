import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sideBarVariants = cva("space-y-5", {
  variants: {
    variant: {
      default: "",
      sticky: "sticky top-[5.4rem] shrink-0",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SideBarProps extends VariantProps<typeof sideBarVariants> {
  children: React.ReactNode;
  className?: string;
}

export const SideBar = ({
  children,
  className,
  variant,
  size,
}: SideBarProps) => {
  return (
    <div className={cn(sideBarVariants({ variant, size, className }))}>
      {children}
    </div>
  );
};
