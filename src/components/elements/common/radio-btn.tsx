import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

import { cn } from "@/lib/utils";

type LabeledRadioGroupItemProps = {
  className: string;
  value: string;
  id: string;
  title: string;
};

export const LabeledRadioGroupItem = ({
  className,
  id,
  value,
  title,
}: LabeledRadioGroupItemProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <RadioGroupItem value={value} id={id} />
      <Label htmlFor={id}>{title}</Label>
    </div>
  );
};
