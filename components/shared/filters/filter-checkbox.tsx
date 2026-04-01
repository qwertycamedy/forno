import { ReactNode } from "react";

import { Checkbox } from "@/components/ui";

export type TFilterChecboxProps = {
  text: string;
  value: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
};

export const FilterCheckbox = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}: TFilterChecboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-lg w-6 h-6"
        id={`checkbox-${name}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${name}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
