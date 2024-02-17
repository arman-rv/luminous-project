export const DetailsSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mt-5 grid grid-cols-3 items-start gap-5">
      {children}
    </section>
  );
};
