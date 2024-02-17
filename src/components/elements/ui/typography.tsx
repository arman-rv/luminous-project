import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const h1Variants = cva("", {
  variants: {
    variant: {
      default: "",
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

export interface H1Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h1Variants> {}

const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <h1
        className={cn(h1Variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
H1.displayName = "H1";

const h2Variants = cva("", {
  variants: {
    variant: {
      default: "",
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

export interface H2Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h2Variants> {}

const H2 = React.forwardRef<HTMLHeadingElement, H2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <h2
        className={cn(h2Variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
H2.displayName = "H2";

const h3Variants = cva("", {
  variants: {
    variant: {
      default: "",
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

export interface H3Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h3Variants> {}

const H3 = React.forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <h3
        className={cn(h3Variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
H3.displayName = "H3";

const h4Variants = cva("", {
  variants: {
    variant: {
      default: "",
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

export interface H4Props
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h4Variants> {}

const H4 = React.forwardRef<HTMLHeadingElement, H4Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <h4
        className={cn(h4Variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
H4.displayName = "H4";

export { H1, H2, H3, H4 };
