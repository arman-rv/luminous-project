"use client";

import { Next13ProgressBar } from "next13-progressbar";

export const ProgressBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="4px"
        color="hsl(var(--primary))"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
};
