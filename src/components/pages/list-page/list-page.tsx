import { cn } from "@/lib/utils";

const ListPage = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center gap-3 px-28 md:flex-row md:items-start  ",
        className
      )}
    >
      {children}
    </div>
  );
};
// list-Title
// type ListTitleProps = {
//   title:React.ReactNode;
//    lang: Locale;
// }
const ListTitle = () => {
  return <h1></h1>;
};

// list-sidebar
const ListSideBar = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "sticky top-0 flex w-full flex-col gap-3 md:w-[20%]",
        className
      )}
    >
      {children}
    </div>
  );
};

// list-Content

const ListContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col gap-3 md:w-[80%]", className)}>
      {children}
    </div>
  );
};

export { ListPage, ListTitle, ListSideBar, ListContent };
