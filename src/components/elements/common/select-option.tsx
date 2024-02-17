import { SelectItem } from "@/components/elements/ui/client";

type SelectOptionProps = {
  value: string;
  title: string;
};
export const SelectOption = ({ value, title }: SelectOptionProps) => {
  return <SelectItem value={value}>{title}</SelectItem>;
};
